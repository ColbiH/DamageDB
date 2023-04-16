const oracledb = require('oracledb');

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_HOST
};

export default async function handler(req, res) {
    try {
        const selectedReturnType = req.query.return;
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


        if(selectedReturnType.trim() === "map"){
            if (selectedVehicleType.trim() !== "" || selectedZipCode.trim() !== "" || selectedDay.trim() !== ""
                || selectedCasualty.trim() !== "" || selectedFactor.trim() !== "" || selectedMonth.trim() !== ""
                || selectedTime.trim() !== "" || selectedYear.trim() !== "" ) {
                Where = "WHERE" + selectedVehicleType + selectedZipCode + selectedDay + selectedCasualty + selectedFactor
                    + selectedMonth + selectedTime + selectedYear + "\n";
                Where = Where.replace("AND", "");
            }
            console.log("SELECT ZipCode, Count(*) \n" +
                "FROM KYUE.vehicle v\n" +
                "JOIN KYUE.collision c ON v.CollisionID = c.CollisionID\n" +
                "JOIN KYUE.location l ON c.coordinates = l.coordinates\n" +
                Where +
                "GROUP BY ZipCode")
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
        } else if (selectedReturnType.trim() === "chart"){
            if (selectedVehicleType.trim() !== "" || selectedZipCode.trim() !== "" || selectedDay.trim() !== ""
                || selectedCasualty.trim() !== "" || selectedFactor.trim() !== "" || selectedMonth.trim() !== ""
                || selectedTime.trim() !== "" || selectedYear.trim() !== "" ) {
                Where = "WHERE" + selectedVehicleType + selectedZipCode + selectedDay + selectedCasualty + selectedFactor
                    + selectedMonth + selectedTime + selectedYear + "\n";
                Where = Where.replace("AND", "");
            }
            const result = await connection.execute(
                "SELECT ZipCode, Count(*), EXTRACT(YEAR FROM c.CrashDate) \n" +
                "FROM KYUE.vehicle v\n" +
                "JOIN KYUE.collision c ON v.CollisionID = c.CollisionID\n" +
                "JOIN KYUE.location l ON c.coordinates = l.coordinates\n" +
                Where +
                "GROUP BY ZipCode, EXTRACT(YEAR FROM c.CrashDate)" +
                "ORDER BY EXTRACT(YEAR FROM c.CrashDate) ASC"
            );
            const ZipCode = result.rows.map((row) => row[0]);
            const Count = result.rows.map((row) => row[1]);
            const Years = result.rows.map((row) => row[2]);
            res.status(200).json({ ZipCode , Count, Years});
        } else if (selectedReturnType === "tuple"){

            const result = await connection.execute(
                "SELECT Count(*) \n" +
                "FROM KYUE.vehicle v\n" +
                "JOIN KYUE.collision c ON v.CollisionID = c.CollisionID\n" +
                "JOIN KYUE.location l ON c.coordinates = l.coordinates\n" +
                Where
            );
            const Tuple = result.rows.map((row) => row[0]);
            res.status(200).json({Tuple});
        }
        await connection.close();
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
}
