// lib/db.js
import sql from 'mssql';

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

let connection;

export async function getConnection() {
  if (!connection) {
    try {
      connection = await sql.connect(config);
      console.log('✅ Connected to live SQL Server');
    } catch (error) {
      console.error(' DB Connection Error:', error);
      throw error;
    }
  }
  return connection;
}
