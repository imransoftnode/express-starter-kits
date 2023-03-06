import { server } from './app/app';
import config from './config';

const { PORT = 4000 } = config;

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`http://localhost:${PORT}`);
});
