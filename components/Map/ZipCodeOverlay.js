import { GeoJSON } from 'react-leaflet';
import zipCodes from '../../public/zipcodes.json';
import zipcodesData from "@/public/zipcodes.json";
import React from "react";

function ZipCodeOverlay() {

    // Define an onEachFeature function to add a click event listener to each feature
    // Define an onEachFeature function to add a mouseover event listener to each feature
    const onEachFeature = (feature, layer) => {
        layer.on('click', (e) => {
            const zipCodeNumber = feature.properties.postalCode;
            layer.bindPopup(`Zip code: ${zipCodeNumber}`).openPopup();
        });
    };


    return (
        <GeoJSON
            data={zipCodes}
            onEachFeature={onEachFeature}
            style={() => ({
                fillColor: '#f00',
                fillOpacity: 0.1,
                color: '#000',
                weight: 1
            })}
        />
    );
}

export default ZipCodeOverlay;
