const oracledb = require('oracledb');

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_HOST
};

export default async function handler(req, res) {
    try {
        const connection = await oracledb.getConnection(dbConfig);

        const result = await connection.execute(
            'SELECT COUNT(*) FROM KYUE.collision'
        );

        const rowCount = result.rows[0][0];

        res.status(200).json({ rowCount });

        await connection.close();
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
}
