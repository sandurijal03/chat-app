import express from 'express';
import ejs from 'ejs';
import http from 'http';

import indexRouter from './apis';

const app = express();

app.use(express.static('./src/public'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', indexRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log('Server is listening on port ' + port));
