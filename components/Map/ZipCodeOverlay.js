import { GeoJSON } from 'react-leaflet';
import zipCodes from '../../public/zipcodes.json';
import zipcodesData from "@/public/zipcodes.json";
import React from "react";

function ZipCodeOverlay(props) {
    const { ZipCode, Count } = props;
    const maxCount = Count.length > 0 ? Math.max(...Count) : 1;

    const onEachFeature = (feature, layer, ZipCode, Count) => {
        layer.on('click', (e) => {
            console.log(ZipCode);
            const zipCodeNumber = feature.properties.postalCode;
            let count = 'unknown';
            const index = ZipCode.indexOf(zipCodeNumber);
            layer.bindPopup(`Zip code: ${zipCodeNumber}<br>Count: ${count}`).openPopup();
        });
    };

    return (
        <GeoJSON
            data={zipCodes}
            onEachFeature={(feature, layer) => onEachFeature(feature, layer, ZipCode, Count)}
            style={(feature) => {
                if (Array.isArray(ZipCode)) {
                    const index = ZipCode.indexOf(feature.properties.postalCode);
                    if (index >= 0) {
                        return {
                            fillColor: '#f00',
                            fillOpacity: (Count[index] / maxCount) * 0.9,
                            color: '#000',
                            weight: 1,
                        };
                    }
                }
                return {
                    fillColor: '#f00',
                    fillOpacity: 0.1,
                    color: '#000',
                    weight: 1,
                };
            }}
        />
    );
}

export default ZipCodeOverlay;



