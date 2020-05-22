import { Application } from "https://deno.land/x/oak/mod.ts";
import React from "https://dev.jspm.io/react@16.13.1";
import ReactDOMServer from "https://dev.jspm.io/react-dom@16.13.1/server";
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
