import { LatLngLiteral } from 'leaflet';

export type MapLocation = LatLngLiteral & { id: string | number; name: string; description: string };

export type MapProps = {
    center: LatLngLiteral | [number, number];
    locations: MapLocation[];
};