import { GeoJSON } from 'react-leaflet';
import zipCodes from '../../public/zipcodes.json';
import zipcodesData from "@/public/zipcodes.json";
import React from "react";

function ZipCodeOverlay(props) {
    const { ZipCode, Count } = props;
    console.log(ZipCode);
    console.log(Count);
    const maxCount = Count.length > 0 ? Math.max(...Count) : 1;

    const onEachFeature = (feature, layer) => {
        layer.on('click', (e) => {
            console.log(feature.properties.ZipCode);
            const zipCodeNumber = feature.properties.postalCode;
            let count = 0;
            const index = feature.properties.ZipCode.indexOf(zipCodeNumber);
            if (index >= 0) {
                count = feature.properties.Count[index];
            }
            layer.bindPopup(`Zip code: ${zipCodeNumber}<br>Count: ${count}`).openPopup();
        });
    };


    return (
        <GeoJSON
            data={zipCodes}
            onEachFeature={onEachFeature}
            style={(feature) => {
                if (Array.isArray(ZipCode)) {
                    const index = ZipCode.indexOf(feature.properties.postalCode);
                    feature.properties.Count = Count;
                    feature.properties.ZipCode = ZipCode;
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
                    fillOpacity: 0,
                    color: '#000',
                    weight: 1,
                };
            }}
            ZipCode={ZipCode}
            Count={Count}
        />
    );
}

export default ZipCodeOverlay;



