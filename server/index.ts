// Packages
import 'colors';

import path from 'path';
import http from 'http';

import express from 'express';
import cors from 'cors';

// Main
const start = Date.now();

const app = express();
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../client')));

const server = http.createServer(app);
server.listen(3000);

// Log
console.log(`Server running at ${'http://localhost:3000'.cyan}`);
console.log(`\u2728  Awake in ${(Date.now() - start) / 1000}s.`.green);
