import express from "express";
import ip from "ip";
import cookieParser from "cookie-parser";
import render from "./render";

const server = express();

server.use(cookieParser());

server.all("*", async (request, response) => {
  if (request.url === "/favicon.ico") return null;
  console.log(`request: ${request.url}`);

  const fullHtml = await render(request);
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  response.send(fullHtml);
  return null;
});

server.listen(3000, () => {
  console.log(`server stared at: ${ip.address()}:3000 by express`);
});
