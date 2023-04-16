const oracledb = require('oracledb');

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_HOST
};

export default async function handler(req, res) {
    try {
        const selectedVehicleType = req.query.vehicletype;
        const selectedZipCode = req.query.zipcode;
        const selectedDay = req.query.day;
        const selectedCasualty = req.query.casualtytype;
        const selectedFactor = req.query.factor;
        const selectedMonth = req.query.month;
        const selectedTime = req.query.time;
        const selectedYear = req.query.year;

        const connection = await oracledb.getConnection(dbConfig);
        let Where = "";
        if (selectedVehicleType !== "" || selectedZipCode !== "" || selectedDay !== "" || selectedCasualty !== ""
            || selectedFactor !== "" || selectedMonth !== "" || selectedTime !== "" || selectedYear !== "") {
            Where = "WHERE" + selectedVehicleType + selectedZipCode + "\n";
            Where = Where.replace("AND", "")
        }
        const result = await connection.execute(
            "SELECT ZipCode, Count(*) \n" +
            "FROM KYUE.vehicle v\n" +
            "JOIN KYUE.collision c ON v.CollisionID = c.CollisionID\n" +
            "JOIN KYUE.location l ON c.coordinates = l.coordinates\n" +
            Where +
            "GROUP BY ZipCode"
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
