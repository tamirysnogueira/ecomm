import mongoose from 'mongoose';

mongoose.connect('mongodb://admin:secret@localhost:27017/ecomm?authSource=admin');

const db = mongoose.connection;

export default db;
