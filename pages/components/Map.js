import React, { useEffect } from 'react';
import mapboxgl from '!mapbox-gl';
import tw from 'tailwind-styled-components';

mapboxgl.accessToken =
  'pk.eyJ1Ijoia29rb2NhdDEzMTMiLCJhIjoiY2w1c3g2dzcyMm0wODNrbHZoNnBrNWpqYyJ9._EZCdJRrj4_n71ktyeuV1w';

export const Map = ({ pickupCoordinates, dropoffCoordinates }) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates);
    }

    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates);
    }

    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([dropoffCoordinates, pickupCoordinates], { padding: 60 });
    }
  }, [pickupCoordinates, dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map">Map</Wrapper>;
};

const Wrapper = tw.div`
flex-1`;
