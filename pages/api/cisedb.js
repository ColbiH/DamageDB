const oracledb = require('oracledb');

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_HOST
};

export default async function handler(req, res) {
    try {
        const selectedVehicleType = req.query.vehicletype;
        const connection = await oracledb.getConnection(dbConfig);
        const result = await connection.execute(
            "SELECT ZipCode, Count(*) \n" +
            "FROM KYUE.vehicle v\n" +
            "JOIN KYUE.collision c ON v.CollisionID = c.CollisionID\n" +
            "JOIN KYUE.location l ON c.coordinates = l.coordinates\n" +
            "GROUP BY ZipCode",
        );

        const ZipCode = result.rows.map((row) => row[0]);
        const Count = result.rows.map((row) => row[1]);

        res.status(200).json({ ZipCode , Count});

        await connection.close();
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
}
