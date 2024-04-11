import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    color: white;
    background-color: #669bbc;
    font-size: 0.8rem;
`

export default function SpecialSale() {
    return(
        <Container>Special Deal! Free Shipping on Orders Over €25</Container>
    );
}