import { Application } from "oak";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App.tsx";

const app = new Application();

app.use(async (ctx) => {
  ctx.response.body = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Deno + React application</title>
      </head>

      <body>
        <div id="root">
          ${ReactDOMServer.renderToString(<App />)}
        </div>
      </body>
    </html>
  `;
});

app.listen({ port: 8000 });
console.log("Listening on http://127.0.0.1:8000");
