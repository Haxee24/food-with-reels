import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

import authRouter from './routes/auth.routes.js';
import partnerRouter from './routes/partner.routes.js'
app.use("/api/users", authRouter);
app.use("/api/partner", partnerRouter);

app.get("/", (req, res) => {
    res.send("HELLO ANKUR")
})

export default app;