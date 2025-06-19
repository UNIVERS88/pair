{
"name": "web-pair",
    "version": "0.0.1",
    "description": "A multi functional whatsapp bot Web paircode.",
    "main": "index.js",
    "scripts": {
      "start": "pm2 start index.js --deep-monitoring --attach --name prabath",
      "stop": "pm2 stop prabath",
     "restart": "pm2 restart prabath"
 },
 "dependencies": {
  "@whiskeysockets/baileys": "^6.6.0",
  "qrcode": "^1.5.3",
  "awesome-phonenumber": "^2.105.0",
  "pino": "^8.19.0",
  "phone": "^3.2.2",
  "body-parser": "^1.20.2",
  "express": "^4.19.2",
  "path": "^0.12.7",
  "megajs": "^1.3.1",
  "pm2": "^5.3.0"
}
