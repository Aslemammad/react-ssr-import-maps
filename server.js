import http from 'http';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

function Hello() {
  return React.createElement(
    "h1",
    null,
    "Hello World"
  );
}
const html = ReactDOMServer.renderToString(React.createElement(Hello, null));

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(html);
}

const server = http.createServer(requestListener);
server.listen(8080);
