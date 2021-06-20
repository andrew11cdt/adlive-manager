const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

console.log("NODE_ENV", process.env.NODE_ENV);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = +process.env.NEXT_PUBLIC_PORT || 8000;

console.log("PORT", port);

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
