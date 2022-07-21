import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { Map } from './components/Map';
import { useRouter } from 'next/router';
import RideSelector from './components/RideSelector';

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1Ijoia29rb2NhdDEzMTMiLCJhIjoiY2w1c3g2dzcyMm0wODNrbHZoNnBrNWpqYyJ9._EZCdJRrj4_n71ktyeuV1w',
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1Ijoia29rb2NhdDEzMTMiLCJhIjoiY2w1c3g2dzcyMm0wODNrbHZoNnBrNWpqYyJ9._EZCdJRrj4_n71ktyeuV1w',
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector />

        <ConfirmButtonContainer>Confirm UberX</ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
h-screen flex flex-col
`;

const RideContainer = tw.div`
flex-1 flex flex-col
`;

const ConfirmButtonContainer = tw.div`
bg-black text-white
`;
