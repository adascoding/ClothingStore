import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  position: relative;
  display: flex;
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Image = styled.img`
  object-fit: cover;
  width: 250px;
  height: 250px;
  border-radius: 5px;
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
`;

export default function SliderItem({ item }) {
  return (
    <Container>
      <SliderContainer>
        <Image src={item.img} />
        <Title>{item.title}</Title>
      </SliderContainer>
    </Container>
  );
}