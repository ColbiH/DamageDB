import { useState, useEffect } from 'react';
import Map from '../components/Map/'
import Zipcode from "@/components/Filters/Zipcode";
import Casualty from "@/components/Filters/Casualty";
import Month from "@/components/Filters/Month";
import Year from "@/components/Filters/Year";
import Day from "@/components/Filters/Day";
import Time from "@/components/Filters/Time";
import Vehicle from "@/components/Filters/Vehicle";
import Factor from "@/components/Filters/Factor";
import SearchButton from '../components/SearchButton';
import TupleButton from "@/components/TupleButton";






export default function HomePage() {
    const [ZipCode, setZipCode] = useState(0);
    const [Count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [Tuple, setTuple] = useState(0);
    const [selectedVehicleType, setSelectedVehicleType] = useState("");
    const [selectedZipCode, setSelectedZipCode] = useState("");
    const [selectedDay, setSelectedDay] = useState("");
    const [selectedCasualty, setSelectedCasualty] = useState("");
    const [selectedFactor, setSelectedFactor] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

    function handleVehicleTypeSelection(selected) {
        setSelectedVehicleType(selected);
    }

    function handleZipCodeSelection(selected) {
        setSelectedZipCode(selected);
    }

    function handleDaySelection(selected) {
        setSelectedDay(selected);
    }

    function handleCasualtyTypeSelection(selected) {
        setSelectedCasualty(selected);
    }

    function handleFactorSelection(selected) {
        setSelectedFactor(selected);
    }

    function handleMonthSelection(selected) {
        setSelectedMonth(selected);
    }

    function handleTimeSelection(selected) {
        setSelectedTime(selected);
    }

    function handleYearSelection(selected) {
        setSelectedYear(selected);
    }

    const handleSearch = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(`/api/cisedb?return=map
            &vehicletype=${selectedVehicleType}
            &zipcode=${selectedZipCode}&day=${selectedDay}&casualtytype=${selectedCasualty}
            &factor=${selectedFactor}&month=${selectedMonth}&time=${selectedTime}
            &year=${selectedYear}`);
            const data = await response.json();
            setZipCode(data.ZipCode);
            setCount(data.Count);
        } catch (error) {
            console.error(error.message);
        }
        setIsLoading(false);
    };

    const handleTupleCount = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`/api/cisedb?return=tuple`);
            const data = await response.json();
            setTuple(data.Tuple);
            alert("Tuple Count: " + data.Tuple);
        } catch (error) {
            console.error(error.message);
        }

        setIsLoading(false);
    };

    return (
        <>
            <div className="grid col-1 bg-white h-auto w-75 shadow-sm">
                <Map ZipCode={ZipCode} Count={Count}/>
            </div>
            <div className="mt-8 grid lg:grid-cols-5 gap-5 mb-16">
                <div className="rounded bg-white h-20 shadow-sm">
                    <Zipcode onZipCodeSelect={handleZipCodeSelection}/>
                </div>
                <div className="rounded bg-white h-20 shadow-sm">
                    <Casualty onCasualtyTypeSelect={handleCasualtyTypeSelection}/>

                </div>
                <div className="rounded bg-white h-20 shadow-sm">
                    <Year onYearSelect={handleYearSelection}/>
                </div>
                <div className="rounded bg-white h-20 shadow-sm">
                    <Month onMonthSelect={handleMonthSelection}/>
                </div>
                <div className="rounded bg-white h-20 shadow-sm">
                    <Day onDaySelect={handleDaySelection}/>
                </div>
            </div>

            <div className="mt-8 grid lg:grid-cols-5 gap-5 mb-16">

                <div className="rounded bg-white h-20 shadow-sm">
                    <Time onTimeSelect={handleTimeSelection}/>
                </div>
                <div className="rounded bg-white h-20 shadow-sm">
                    <Factor onFactorSelect={handleFactorSelection}/>
                </div>
                <div className="rounded bg-white h-20 shadow-sm">
                    <Vehicle onVehicleTypeSelect={handleVehicleTypeSelection}/>
                </div>
                <div className="rounded bg-white h-20 shadow-sm">
                    <TupleButton onTuple={handleTupleCount} />
                </div>
                <div className="rounded bg-white h-20 shadow-sm">
                    <div>
                        <SearchButton onSearch={handleSearch} />
                    </div>
                </div>
            </div>

        </>

    );
}
