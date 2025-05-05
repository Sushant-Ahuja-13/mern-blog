import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log('MongoDB Connected');
}).catch((err) => {
    console.log(err);
})
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!!!');
})
app.get('/test', (req, res) => {
    res.json({ message: 'Api working!!' });
})
app.use('/api/user', userRoutes);
app.listen(3000, () => {
    console.log('Server running on port 3000');
})