import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sql = new Sequelize(`postgres://postgres:${process.env.DB_PASS}@db.fyipxrvzaupgdtfnwlyy.supabase.co:5432/postgres`);

const connection = sql

export default connection