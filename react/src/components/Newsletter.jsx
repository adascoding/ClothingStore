import { Send } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #f1faee;
    height: 30%;
    padding-bottom: 30px;
`
const Title = styled.h2`

`
const Desc = styled.p`
    margin: 0 20px;
    font-size: 0.9rem;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;

`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    outline: none;
`
const Button = styled.button`
    flex:1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;

`

export default function Newsletter() {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Subscribe now to our newsletter and gain access to exclusive offers and discounts reserved just for our loyal readers!</Desc>
            <InputContainer>
            <Input placeholder="Your email" name="search"></Input>
            <Button>
                <Send/>
            </Button>
            </InputContainer>
        </Container>
    )
}
