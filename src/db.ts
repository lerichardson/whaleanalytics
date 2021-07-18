import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const USER = process.env.MONGOOSE_DB_UNAME
const PASSWORD = process.env.MONGODB_DB_PASSWORD
const HOST = process.env.MONGODB_DB_HOST
const DB = process.env.MONGODB_DB_NAME

const DB_URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB}?retryWrites=true&w=majority`


mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

export default connection