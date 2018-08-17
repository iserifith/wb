import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
routes(app);

const PORT = process.env.PORT || 4450;
app.listen(PORT, () => {
	console.log(`App is running on port ${PORT}`);
});
