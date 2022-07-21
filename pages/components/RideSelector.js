import React from 'react';
import tw from 'tailwind-styled-components';

const RideSelector = () => {
  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>

      <CarList>
        <Car>
          <CarImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
          <CarDetails>
            <Service>UberX</Service>
            <Time>5 min. away</Time>
          </CarDetails>

          <Price>$46.77</Price>
        </Car>
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const Wrapper = tw.div`
flex flex-1 w-full
`;

const Title = tw.div`
text-gray-500 text-sm py-2 border-b text-center
`;

const CarList = tw.div``;

const Car = tw.div`
flex p-4 items-center
`;

const CarImage = tw.img`
h-14
`;

const CarDetails = tw.div`
flex-1
`;

const Service = tw.div``;

const Time = tw.div``;

const Price = tw.div``;
