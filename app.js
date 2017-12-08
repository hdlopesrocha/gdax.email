// npm install express --save
// npm install gdax --save
// npm install nodemailer --save
// npm install play-sound --save
// npm install properties-reader --save

const fs = require('fs');
const express = require('express');
const Gdax = require('gdax');
var nodemailer = require('nodemailer');	// requires node 6.x
var player = require('play-sound')(opts = {})
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('application.properties');
 
const authenticatedClient = new Gdax.AuthenticatedClient(
	properties.get('gdax.key'),
	properties.get('gdax.b64secret'),
	properties.get('gdax.passphrase'),
	'https://api.gdax.com'
);

var auth = {
    user: properties.get('sender.email'),
    pass: properties.get('sender.password')
};

var transporter = nodemailer.createTransport({
  service: properties.get('sender.service'),
  auth: auth
});

function saveDB(db){
	fs.writeFile('data.json', JSON.stringify(db));
}

function loadDB(){
	if (fs.existsSync('data.json')) {
		return JSON.parse(fs.readFileSync('data.json'));
	}
	return [];
}

function getOrder(orders,id){
	for(var i in orders){
		var order = orders[i];
		if(order.trade_id === id){
			return order;
		}
	}
	return null;
}

function printCell(cell){
	return '<td style="border-right: solid 1px #000000;border-bottom: solid 1px #000000;padding:8px;">' + cell +'</td>';
	
}

function printHeader(cell){
	return '<th style="border-right: solid 1px #000000;border-bottom: solid 1px #000000;background-color: #aaaaaa;padding:8px;">' + cell +'</th>';
}

function printRow(row,color){
	var html = '<tr style="background-color:'+color+';">';
	html += printCell(row.product_id);
	html += printCell(row.side);
	html += printCell(row.price);
	html += printCell(row.size);
	html += printCell(row.size *row.price);
	html += printCell(row.created_at);
	html += '</tr>';
	return html;
}

function printTable(title, data){
	var html = '<h3>'+title+'</h3>';
	html += '<table cellspacing="0" style="border-top: solid 1px #000000;border-left: solid 1px #000000;">';
	html += '<tr>';
	html += printHeader('Product');
	html += printHeader('Side');
	html += printHeader('Price');
	html += printHeader('Size');
	html += printHeader('Total');
	html += printHeader('Time');
	html += '</tr>';
	for(var i in data){
		html += printRow(data[i], data[i].side ==='buy' ? '#ccff99' : '#ffcccc');
	}
	html += '</table>';
	return html;
}


function sendEmail(fills,histo,db,first){
	var html = 'Activity Summary';
	html += printTable('Fills', fills);
	html += printTable('History', histo);
	

	var mailOptions = {
		from: auth.user,
		to: auth.user,
		subject: '[GDAX] Activity Summary',
		html: html
	};
	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
		  if(error){
		      return console.log(error);
		  }
		  saveDB(db);
		  console.log('Message sent: ' + info.response);
	});

	if(properties.get('sound.enabled')=='true'){
		// $ mplayer foo.mp3  
		player.play('alert.mp3', function(err){
			if (err) throw err;
		});
	}
}
function collector(){

	authenticatedClient.getFills(
		{},
		(error, response, orders) => {
  		if (!error && response.statusCode == 200) {
				console.log('getFills',new Date());
				var database = loadDB();
				if(database.length == 0){
					database = orders;
				}
				
				var fills = [];
				var histo = [];
				var hasNew = false;
				for(var i in orders){
					var oid = orders[i].trade_id;
					var curr = getOrder(orders,oid);						
					var prev = getOrder(database,oid);
					if(prev == null) {
						hasNew = true;
						fills.push(curr);
					}
				}
				if(hasNew) { 
					for(var i in orders){
						var oid = orders[i].trade_id;
						var curr = getOrder(orders,oid);						
						var prev = getOrder(database,oid);
					
						var d = new Date(curr.created_at);
						var c = new Date();
										
						if(c.getTime() - d.getTime() < 1000*60*60*24) {
							histo.push(curr);
						}
					}
				}
				if(fills.length>0){
					sendEmail(fills,histo, orders);
				}
			}else{
				console.log('error',new Date());
			}
		}
	);
	setTimeout(collector, 30000);
}

collector();
