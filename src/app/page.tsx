'use client';

import dynamic from 'next/dynamic';
import styles from './SomeStyle.module.css';
import { locations } from '../constants/locations'

const SomeMap = dynamic(() => import("@/components/SomeMap"), { ssr: false });

export default function MapPage() {

    return (
        <div
            className={styles.forSomeMap}
        >
            <SomeMap center={[ 49.5535, 25.5943 ]} locations={locations}/>
        </div>
    );
}