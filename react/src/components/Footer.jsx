import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, YouTube } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    margin: auto;
    max-width: 1024px;
`
const Left = styled.div`
    flex: 1;
    flex-direction: column;
    padding: 20px;
`
const Right = styled.div`
    flex: 1;
    padding: 5px;
`
const Center = styled.div`
    flex: 1;
    padding: 5px;
`
const Logo = styled.div`
    color: #212529;
    font-weight: bold;
    text-decoration: none;
`
const Title = styled.h4`
    margin-bottom: 10px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 2px;
    
    a {
        color: black;
        text-decoration: none;
        font-size: 0.8rem;
    }
    a:hover {
        text-decoration: underline;
    }

`
const Description = styled.div`
    margin: 20px 0;   
`
const SocialContent = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin-right: 4px;
`
const ContactItem = styled.div`
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    font-size: 0.8rem;
`

export default function Footer() {
    return (
        <Container>
            <Left>
                <Logo>CLOTHING STORE.</Logo>
                <Description>
                    Welcome to our affordable fashion hub!
                    Discover trendy streetwear and timeless classics in our curated collection.
                </Description>
                <SocialContent>
                    <SocialIcon><Facebook /></SocialIcon>
                    <SocialIcon><Instagram /></SocialIcon>
                    <SocialIcon><Twitter /></SocialIcon>
                    <SocialIcon><YouTube /></SocialIcon>
                </SocialContent>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem><a href="#">Contact Us</a></ListItem>
                    <ListItem><a href="#">Size Guide</a></ListItem>
                    <ListItem><a href="#">Privacy Policy</a></ListItem>
                    <ListItem><a href="#">FAQs</a></ListItem>
                    <ListItem><a href="#">Affiliate Program</a></ListItem>
                    <ListItem><a href="#">Gift Cards</a></ListItem>
                    <ListItem><a href="#">Shipping Information</a></ListItem>
                    <ListItem><a href="#">Returns & Exchanges</a></ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight: "10px"}}/>742 Evergreen Terrace</ContactItem>
                <ContactItem><Phone style={{marginRight: "10px"}}/>+370-600-00000</ContactItem>
                <ContactItem><MailOutline style={{marginRight: "10px"}}/>contact@clothing.store</ContactItem>
            </Right>
        </Container>
    )
}