import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

 
export default function Map(props) {

    const positions = [props.longitude, props.latitude];

    function setMarker([positions]) {
        const output = [];
        const pos = [positions.longitude, positions.latitude];
        positions.forEach(element => {
            <Marker position={pos}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            output.push();
        });

        return output;
    }


    return (
        <>
            <MapContainer style={{ height: "650px" }} center={[47.41366, 9.74237]} zoom={14} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            <setMarker/>
            </MapContainer>
        </>
    )
}
