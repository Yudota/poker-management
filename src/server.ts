import express from "express";
import { routes } from "./routes";
import cors from 'cors';

const app = express();

const corsOptions = {
    origin: 'http://localhost:5174',
    // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(routes);

const port = 3000;
app.listen(port, () => console.log(`Server running on ${port}/player`));
