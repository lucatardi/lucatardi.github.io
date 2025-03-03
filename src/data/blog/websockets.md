---
banner_alt: WebSockets
banner: https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg
title_prefix: Code
title: WebSockets
description: Let's explore the communication protocol alternative to HTTP.
date: '2025-03-01'
---

## What are WebSockets

Websocket is a communication protocol which enables real time and bidirectional communication between the server and the browser.

## Why do we need them

While for most of the web applications the HTTP protocol makes sense there are some cases where does not perform the best.
Let's take as an example a chat application between two users: If we were using the HTTP protocol their clients would need to keep requesting data for new messages (if present) to the server while with a web sockets connection is the server to send new messages to the browser whenever there it a new one.

## How to implement them

In the server side we need a library called `ws` which enables us to create a new WebSocker connection and define listerners to messages which will intercept a message and react to that.

In the browser side we can use the browser native `WebSocket` class to create a socket and specify the methods we want to execute on `onopen`, `onmessage` and `onclose`.

Server code:

```js
// Install ws: npm install ws
const WebSocket = require('ws');

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

console.log('WebSocket server is running on ws://localhost:8080');

// Handle client connections
wss.on('connection', (ws) => {
  console.log('New client connected!');

  // Send a welcome message to the client
  ws.send('Welcome to the WebSocket server!');

  // Listen for messages from the client
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    // Echo the message back to the client
    ws.send(`Server received: ${message}`);
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
```

Client code:

```js
// Client-side WebSocket code (to run in a browser)
const socket = new WebSocket('ws://localhost:8080');

// Connection established
socket.onopen = () => {
  console.log('Connected to server');
  socket.send('Hello Server!');
};

// Listen for messages from the server
socket.onmessage = (event) => {
  console.log(`Message from server: ${event.data}`);
};

// Handle connection closure
socket.onclose = () => {
  console.log('Disconnected from server');
};

```
