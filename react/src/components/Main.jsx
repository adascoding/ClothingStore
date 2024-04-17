import styled from "styled-components";
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
    margin: auto 15px;
    
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`

const Card = styled.div`
    border: 1px solid lightgray;
    position: relative;
    grid-column: ${props => props.column};
    grid-row: ${props => props.row};
    min-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    @media (max-width: 600px) {
        grid-column: 1 / 2;
        grid-row: ${props => props.responsive};
    }
`

const Item1 = styled(Card)`
    background: linear-gradient(90deg, rgba(229,238,247,1) 0%, rgba(199,219,241,1) 100%);
`


const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(5px 5px 2px rgba(0, 0, 0, 0.2));
`
const Title = styled.h3`
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: #14213d;
  filter: drop-shadow(5px 5px 2px rgba(0, 0, 0, 0.2));
`;
const CategoryLink = styled(Link)`
    position: absolute;
    bottom: 5px;
    left: 15px;
    color: aliceblue;
    text-decoration: none;
    padding: 5px;
    background-color: #457b9d;
    border-radius: 5px;
    font-size: 0.8rem;
`

const Item2 = styled(Card)`
    background: linear-gradient(90deg, rgba(232,234,246,1) 0%, rgba(232,234,246,1) 100%);
`

const Item3 = styled(Card)`
    background: linear-gradient(90deg, rgba(245,245,245,1) 0%, rgba(246,246,246,1) 100%);
`

const Item4 = styled(Card)`
    background: linear-gradient(90deg, rgba(246,246,246,1) 0%, rgba(174,181,189,1) 100%);
`

export default function Main() {
    return (
        <Container>
            <Item1 column="1/2" row="1/3" responsive="1/2">
                <Image src="../src/assets/mens.png"/>
                <Title>Mens</Title>
                <CategoryLink to='/shop/mens'>Shop now</CategoryLink>
            </Item1>
            <Item2 column="2/4" row="1/2" responsive="2/3">
                <Image src="../src/assets/womens.png"/>
                <Title>Womens</Title>
                <CategoryLink to='/shop/womens'>Shop now</CategoryLink>
            </Item2>
            <Item3 column="2/3" row="2/3" responsive="3/4">
                <Image src="../src/assets/kids.png"/>
                <Title>Kids</Title>
                <CategoryLink to='/shop/kids'>Shop now</CategoryLink>
            </Item3>
            <Item4 column="3/4" row="2/3" responsive="4/5">
                <Image src="../src/assets/accessories.png"/>
                <Title>Accessories</Title>
                <CategoryLink to='/shop/accessories'>Shop now</CategoryLink>
            </Item4>
        </Container>
    )
}
