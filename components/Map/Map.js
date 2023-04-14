import 'leaflet/dist/leaflet.css'
import styles from '../../styles/Home.module.css'
import {GeoJSON, MapContainer, TileLayer,} from "react-leaflet";
import zipcodesData from '../../public/zipcodes.json';
import React, { Component } from 'react';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js'
import 'leaflet/dist/leaflet.css';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css'
import ZipCodeOverlay from "../../components/Map/ZipCodeOverlay";



function Map(){
    return(
        <MapContainer className={styles} center={[40.7420, -73.9073]} fullscreenControl={true} zoom={10} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <ZipCodeOverlay />
        </MapContainer>

    );
}

export default Map;