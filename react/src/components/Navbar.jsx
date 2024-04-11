import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import styled from "styled-components";
import { Link } from "react-router-dom"

const Container = styled.div`
    height: 60px;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto; 
`
const Wrapper = styled.div`
    padding: 10px 20px;  
    display: flex;
    align-items: center;
    justify-content: space-between;  
`
const Left = styled.div`
    flex: 1;
`
const HomeLink = styled(Link)`
    color: #212529;
    font-weight: bold;
    text-decoration: none;
`
const Center = styled.div`
    flex: 1;
`
const CategoryLink = styled(Link)`
    color: #212529;
    margin: 1.5rem 0.7rem;
    text-decoration: none;
    font-size: 0.9rem;
    line-height: 2;
    &:hover {
        text-decoration: underline;
    }
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: right;
`
const IconWrapper = styled.div`
    margin-right: 10px;
`

export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <HomeLink to="/">CLOTHING STORE.</HomeLink>
                </Left>
                <Center>
                    <CategoryLink to='/shop'>Shop</CategoryLink>
                    <CategoryLink to='/'>Support</CategoryLink>
                    <CategoryLink to=''>About</CategoryLink>
                </Center>
                <Right>
                    <IconWrapper>
                        <SearchIcon />
                    </IconWrapper>
                    <IconWrapper>
                        <PersonOutlineOutlinedIcon />
                    </IconWrapper>
                    <IconWrapper>
                        <Badge color="primary" badgeContent={3}>
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </IconWrapper>
                </Right>
            </Wrapper>
        </Container>
    );
}