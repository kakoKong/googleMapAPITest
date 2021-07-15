import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, Circle } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const options = {
    strokeColor: '#FDA4D3',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FCBFF1',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    zIndex: 1
  };


function Map(props) {

    const distance = props.distance

    const [position, setPosition] = useState({
        lat: 0,
        lng: 0
    })

    const [radius, setRadius] = useState(0)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", typeof(position.coords.latitude));
            console.log("Longitude is :", position.coords.longitude);
            setPosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })

        });
        setRadius(distance)

    }, [distance])

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCG36ffpiL45aMOyO10z_YWUY3WaHB5gCo"
  })

  return isLoaded ? (
    <GoogleMap
      id="circle-example"
      mapContainerStyle={containerStyle}
      zoom={13}
      center={position}
    >
      <Circle
        // optional
        radius={parseInt(radius)}
        // required
        center={position}
        // required
        options={options}
      />
      <Marker
        position={position}
      />
    </GoogleMap>
  ) : <></>
}

export default Map