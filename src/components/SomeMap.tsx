'use client';

import { MapProps } from '@/types/TypeSomeMap';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import {
    MapContainer,
    TileLayer,
    Marker,
    Tooltip,
    Popup,
} from "react-leaflet";
import styles from './SomeMap.module.css';
import { iconUrls } from '@/constants/iconUrls';

// Виправлення шляхів до іконок
delete (L.Icon.Default as any).prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    ...iconUrls,
});

const SomeMap: React.FC<MapProps> = ({ center, locations }) => {
    
    return (
        <div
            // Для коректного відображення карти
            className={styles.mapContainer}
        >
            <MapContainer 
                center={center} 
                zoom={13}
                scrollWheelZoom={true}
                className={styles.map}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {locations.map((location) => (
                    <Marker key={location.id} position={[location.lat, location.lng]}>
                        {/* <Tooltip>{location.name}</Tooltip> */}
                        <Popup>
                            <div>
                                <div className={styles.popup}>
                                    <h3>{location.name}</h3>
                                    <div>
                                        <img 
                                            src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png" 
                                            alt="icon" 
                                            className={styles.iconLight}
                                        />
                                        <p>{location.description}</p>
                                    </div>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}

export default SomeMap;