import { createServer, IncomingMessage, ServerResponse } from 'http';

const host = '0.0.0.0';
const port = 3000;

const server = createServer((_: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});

server.listen(port, host, () => { console.log(`Server running at ${host}:${port}`); });
