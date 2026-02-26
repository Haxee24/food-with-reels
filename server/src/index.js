import app from './app.js';
import connectDB from './db/dbase.js';

const PORT = process.env.PORT;

connectDB();

app.listen(PORT, () => {
    console.log("Server is runnning on port " + PORT);
})