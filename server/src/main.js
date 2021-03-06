import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import db from './models';

import routes from './routes/index';
import config from './config/config';

const app = express();
app.disable('etag').disable('x-powered-by');

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', routes);

db.sequelize
  // .sync({ force: true })
  .sync()
  .then(() => {
    /* eslint-disable no-console */
    app.listen(config.port, () => console.log(`Server is running at port ${config.port}`));
  });
