#! /usr/bin/env node

var hostapd = require('wireless-tools/hostapd');

var path = require('path');
var express = require('express');
var app = express();

var dir = path.join(__dirname, 'public');

var options = {
  channel: 6,
  driver: 'rtl871xdrv',
  hw_mode: 'g',
  interface: 'wlan0',
  ssid: 'RaspberryPi',
  wpa: 2,
  wpa_passphrase: 'raspberry'
};
 
hostapd.enable(options, function(err) {
  console.log('Device is discoverable.')
});

app.use(express.static(dir));

app.listen(80, () => console.log('Listening on http://localhost:80/'));