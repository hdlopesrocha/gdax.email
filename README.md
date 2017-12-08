# gdax.email
GDAX email notifications

This app fetches your gdax account for any buy/sell every 30 seconds.

A report is sent every time there is a new fill.

Create a GDAX API key.

Add your credentials to **application.properties** 

Dependencies:
```
npm install express --save
npm install gdax --save
npm install nodemailer --save
npm install play-sound --save
npm install properties-reader --save
```

Run with:
```
nodejs app.js
```

Email Example:
<h2>Activity Summary</h2>
<h3>Fills:</h3>
<table cellspacing="0" style="border-top: solid 1px =
#000000;border-left: solid 1px #000000;">
<tr><th style="border-right: =
   solid 1px #000000;border-bottom: solid 1px #000000;background-color: =
   #aaaaaa;padding:8px;">Product</th><th style="border-right: solid 1px =
   #000000;border-bottom: solid 1px #000000;background-color: =
   #aaaaaa;padding:8px;">Side</th><th style="border-right: solid 1px =
   #000000;border-bottom: solid 1px #000000;background-color: =
   #aaaaaa;padding:8px;">Price</th><th style="border-right: solid 1px =
   #000000;border-bottom: solid 1px #000000;background-color: =
   #aaaaaa;padding:8px;">Size</th><th style="border-right: solid 1px =
   #000000;border-bottom: solid 1px #000000;background-color: =
   #aaaaaa;padding:8px;">Total</th><th style="border-right: solid 1px =
   #000000;border-bottom: solid 1px #000000;background-color: =
   #aaaaaa;padding:8px;">Time</th>
</tr>
<tr style="background-color:#ffcccc;font-weight: bold;"=
   ><td style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">ETH-EUR</td><td style="border-right: solid 1px =
   #000000;border-bottom: solid 1px #000000;padding:8px;">sell</td><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">392.50000000</td><td style="border-right: solid 1px=
   #000000;border-bottom: solid 1px #000000;padding:8px;">1.27389000</td><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">500.001825</td><td style="border-right: solid 1px =
   #000000;border-bottom: solid 1px #000000;padding:8px;">2017-12-08T09:48:00.=
   437Z</td>
</tr>
<tr style="background-color:#ffcccc;"><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">ETH-EUR</td><td style="border-right: solid 1px =
   #000000;border-bottom: solid 1px #000000;padding:8px;">sell</td><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">390.00000000</td><td style="border-right: solid 1px=
   #000000;border-bottom: solid 1px #000000;padding:8px;">1.28204000</td><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">499.9956</td><td style="border-right: solid 1px =
   #000000;border-bottom: solid 1px #000000;padding:8px;">2017-12-08T09:41:28.=
   546Z</td>
</tr>
<tr style="background-color:#ffcccc;"><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">ETH-EUR</td><td style="border-right: solid 1px =
   #000000;border-bottom: solid 1px #000000;padding:8px;">sell</td><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">387.50000000</td><td style="border-right: solid 1px=
   #000000;border-bottom: solid 1px #000000;padding:8px;">1.29031000</td><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">499.99512500000003</td><td style="border-right: =
   solid 1px #000000;border-bottom: solid 1px #000000;padding:8px;">2017-12-08=
   T08:55:43.354Z</td>
</tr>
<tr style="background-color:#ffcccc;"><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">ETH-EUR</td><td style="border-right: solid 1px =
   #000000;border-bottom: solid 1px #000000;padding:8px;">sell</td><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">385.00000000</td><td style="border-right: solid 1px=
   #000000;border-bottom: solid 1px #000000;padding:8px;">1.29870000</td><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">499.9995</td><td style="border-right: solid 1px =
   #000000;border-bottom: solid 1px #000000;padding:8px;">2017-12-08T08:37:34.=
   103Z</td>
</tr>
<tr style="background-color:#ffcccc;"><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">ETH-EUR</td><td style="border-right: solid 1px =
   #000000;border-bottom: solid 1px #000000;padding:8px;">sell</td><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">382.50000000</td><td style="border-right: solid 1px=
   #000000;border-bottom: solid 1px #000000;padding:8px;">1.30720000</td><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">500.00399999999996</td><td style="border-right: =
   solid 1px #000000;border-bottom: solid 1px #000000;padding:8px;">2017-12-08=
   T05:27:41.286Z</td>
</tr>
<tr style="background-color:#ccff99;"><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">ETH-EUR</td><td style="border-right: solid 1px =
   #000000;border-bottom: solid 1px #000000;padding:8px;">buy</td><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">360.00000000</td><td style="border-right: solid 1px=
   #000000;border-bottom: solid 1px #000000;padding:8px;">1.38890795</td><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">500.00686199999996</td><td style="border-right: =
   solid 1px #000000;border-bottom: solid 1px #000000;padding:8px;">2017-12-07=
   T17:30:49.782Z</td>
</tr>
<tr style="background-color:#ccff99;"><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">ETH-EUR</td><td style="border-right: solid 1px =
   #000000;border-bottom: solid 1px #000000;padding:8px;">buy</td><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">370.01000000</td><td style="border-right: solid 1px=
   #000000;border-bottom: solid 1px #000000;padding:8px;">1.35132000</td><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">500.0019132</td><td style="border-right: solid 1px =
   #000000;border-bottom: solid 1px #000000;padding:8px;">2017-12-07T15:59:16.=
   352Z</td>
</tr>
<tr style="background-color:#ccff99;"><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">ETH-EUR</td><td style="border-right: solid 1px =
   #000000;border-bottom: solid 1px #000000;padding:8px;">buy</td><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">375.20000000</td><td style="border-right: solid 1px=
   #000000;border-bottom: solid 1px #000000;padding:8px;">1.33261000</td><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">499.995272</td><td style="border-right: solid 1px =
   #000000;border-bottom: solid 1px #000000;padding:8px;">2017-12-07T15:37:09.=
   358Z</td>
</tr>
<tr style="background-color:#ccff99;"><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">ETH-EUR</td><td style="border-right: solid 1px =
   #000000;border-bottom: solid 1px #000000;padding:8px;">buy</td><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">380.00000000</td><td style="border-right: solid 1px=
   #000000;border-bottom: solid 1px #000000;padding:8px;">1.31578900</td><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">499.99982000000006</td><td style="border-right: =
   solid 1px #000000;border-bottom: solid 1px #000000;padding:8px;">2017-12-07=
   T15:22:25.481Z</td>
</tr>
<tr style="background-color:#ccff99;"><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">ETH-EUR</td><td style="border-right: solid 1px =
   #000000;border-bottom: solid 1px #000000;padding:8px;">buy</td><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">381.50000000</td><td style="border-right: solid 1px=
   #000000;border-bottom: solid 1px #000000;padding:8px;">1.31061000</td><td =
   style="border-right: solid 1px #000000;border-bottom: solid 1px =
   #000000;padding:8px;">499.997715</td><td style="border-right: solid 1px =
   #000000;border-bottom: solid 1px #000000;padding:8px;">2017-12-07T14:53:18.=
   649Z</td>
</tr>
</table>


Happy trading.

Feel free to donate some BTC:
1ML9M3VJ9uh79sGV3QmYxihWr1XCancUyT

