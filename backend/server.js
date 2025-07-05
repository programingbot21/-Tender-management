import express from 'express';
import mongoose  from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/auth.js';
import router1 from './routes/comroutes.js';
import router2 from './routes/tenders.js';
import router3 from './routes/approu.js';


dotenv.config();
const app =express();

//middlewares
app.use(express.json());
app.use(cors())



app.use('/api/auth', router);
app.use('/api/company', router1);
app.use('/api/tenders',router2);
app.use('/api/applications', router3)


const PORT = process.env.PORT || 8005;

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`connected to the database`);
    app.listen(PORT, () => {
        console.log(`Server is connected on part ${PORT}`);
    })

   
}).catch((err) => {
    console.log(`Error connecting to the database: `, err);
})