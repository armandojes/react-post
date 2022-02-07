import { createServer } from 'http';
import ip from 'ip';
import render from './render';

const handler = async (request, response) => {
  if (request.url === '/favicon.ico') return response.end();

  const fullHtml = await render(request);
  response.write(fullHtml);
  response.end();
  return null;
};

createServer(handler).listen(3000, () => {
  console.log(`server stared at: ${ip.address()}:3000`);
});
