#! /usr/bin/env node

var hostapd = require('wireless-tools/hostapd');
 
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
  // the access point was created
});