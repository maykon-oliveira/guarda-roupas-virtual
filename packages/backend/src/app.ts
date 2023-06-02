import express, { Application } from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

const app: Application = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, '..', 'public')));

export default app;
