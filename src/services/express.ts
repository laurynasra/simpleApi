import express from "express";

const app = express();

console.log('Starting server...');

app.get('/', (req, res) => {
    res.send('Hello, World');
});

app.post('/', (req, res) => {
    res.send('Hello, Worlds POST');
});

const server = app.listen(3000);

process.on('SIGINT', () => {
    server.close((err) => {
        console.log('Server is closing...');
        process.exit(err ? 1 : 0);
    });
});
