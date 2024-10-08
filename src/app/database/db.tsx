import mysql from 'mysql2/promise';

const db = async (query: string) => {
    let connection;

    try {
        connection = await mysql.createConnection({
            host: process.env.MYSQL_HOST,
            port: Number(process.env.MYSQL_PORT) || 3306,
            database: process.env.MYSQL_DATABASE,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
        });

        const [results, fields] = await connection.query(query);

        console.log(results);
        return [results, fields];
    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        if (connection) {
            await connection.end();
        }
    }
};

export default db;
