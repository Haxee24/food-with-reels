import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser());

import authRouter from './routes/auth.routes.js';
import partnerRouter from './routes/partner.routes.js'
app.use("/api/users", authRouter);
app.use("/api/partner", partnerRouter);

app.get("/", (req, res) => {
    res.send("HELLO ANKUR")
})

export default app;