import { useState, useEffect } from 'react';
import Map from '../components/Map/'




export default function HomePage() {
    const [rowCount, setRowCount] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/cisedb');
                const data = await response.json();
                setRowCount(data.rowCount);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <div className="grid col-1 bg-white h-auto w-75 shadow-sm">
                <Map />
                {rowCount === null ? (
                    <p>Loading...</p>
                ) : (
                    <p>There are {rowCount} rows in the KYUE.collision table.</p>
                )}
            </div>
        </>

    );
}
