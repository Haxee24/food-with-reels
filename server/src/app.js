import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

import authRouter from './routes/auth.routes.js';
import partnerRouter from './routes/partner.routes.js';
import storeRouter from './routes/store.routes.js';
app.use("/api/users", authRouter);
app.use("/api/partner", partnerRouter);
app.use("/api/stores", storeRouter);

app.get("/", (req, res) => {
    res.send("HELLO ANKUR")
})

export default app;