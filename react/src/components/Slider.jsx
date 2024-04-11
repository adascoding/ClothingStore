import styled from "styled-components";
import SliderItem from "./SliderItem";
import popularItems from '../data.js';
import { useState, useEffect } from "react";

const Container = styled.div`
    overflow-x: hidden;
    display: flex;
    width: 1030px;
    margin: 16px auto;
    position: relative;

    @media (max-width: 1060px) {
        width: 770px;
    }

    @media (max-width: 800px) {
        width: 510px; 
    }

    @media (max-width: 550px) {
        width: 250px; 
    }
`;

const SliderContainer = styled.div`
    display: flex;
    gap: 10px;
    transition: transform 0.5s ease;
`;

const NavButton = styled.button`
    position: absolute;
    top: 50%;
    background-color: white;
    border: 1px solid lightgray;
    font-size: 1.5rem;
    cursor: pointer;
    ${(props) => (props.direction === 'left' ? 'left: 10px;' : 'right: 10px;')}
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

const Heading = styled.h2`
    text-align: center;
`;

const Paragraph = styled.p`
    text-align: center;
    font-size: 0.9rem;
`;

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const [maxSlideIndex, setMaxSlideIndex] = useState();
    const sliderTime = 5000;
    const slideWidth = 260;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 550) {
                setMaxSlideIndex(popularItems.length - 1);
            } else if (window.innerWidth <= 800) {
                setMaxSlideIndex(popularItems.length - 2);
            } else if (window.innerWidth <= 1060) {
                setMaxSlideIndex(popularItems.length - 3);
            } else {
                setMaxSlideIndex(popularItems.length - 4);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        const interval = setInterval(() => {
            if (slideIndex < maxSlideIndex) {
                setSlideIndex(slideIndex + 1);
            } else {
                setSlideIndex(0);
            }
        }, sliderTime);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        };
    }, [slideIndex, maxSlideIndex]);

    const handleNextSlide = () => {
        if (slideIndex < maxSlideIndex) {
            setSlideIndex(slideIndex + 1);
        } else {
            setSlideIndex(0);
        }
    };

    const handlePrevSlide = () => {
        if (slideIndex > 0) {
            setSlideIndex(slideIndex - 1);
        } else {
            setSlideIndex(maxSlideIndex);
        }
    };

    return (
        <>
            <Heading>Popular Items</Heading>
            <Paragraph>
            Discover a curated selection of popular items to suit your style.<br/>
            From trendy apparel to stylish accessories, elevate your look with us.
            </Paragraph>
            <Container>
                {slideIndex !== 0 && <NavButton direction="left" onClick={handlePrevSlide}>{'<'}</NavButton>}
                <SliderContainer style={{ transform: `translateX(-${slideIndex * slideWidth}px)` }}>
                    {popularItems.map((item, index) => (
                        <SliderItem key={index} item={item} />
                    ))}
                </SliderContainer>
                {slideIndex < maxSlideIndex && <NavButton direction="right" onClick={handleNextSlide}>{'>'}</NavButton>}
            </Container>
        </>
    );
}