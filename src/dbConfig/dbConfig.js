import mongoose from 'mongoose';

mongoose.connect(`mongodb://admin:secret@${process.env.HOST_MONGO || 'localhost'}:27017/ecomm?authSource=admin`);

const db = mongoose.connection;

export default db;
