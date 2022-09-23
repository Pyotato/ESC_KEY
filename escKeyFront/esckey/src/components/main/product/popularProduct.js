import styled from "styled-components";
import CustomProductSwiper from "./item/swiper/CustomPrSwiper"
import { dummydata1 } from "../../../dummydata/product";
const PopularCustomProduct = () => {
    return (
        <>
        <Container>
            <div>
                <Title>POPULAR PRODUCTS</Title>
                <br/>
                <Description>인기 게이밍 키보드</Description>
                <CustomProductSwiper data={dummydata1.product}/>
            </div>
        </Container>
        <GreenCircle/>
        <PinkCircle/>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${({ theme }) => theme.padding_uuul};
    padding-bottom: ${({ theme }) => theme.padding_uuul};
`

const Title = styled.span`
    font-size: ${({ theme }) => theme.fontSize_ul};
    color: ${({theme}) => theme.theme === 'dark' ? theme.color_white : theme.color_gray_red};
`

const Description = styled.span`
    font-size: ${({ theme }) => theme.fontSize_tiny};
    color: ${({theme}) => theme.theme === 'dark' ? theme.color_white : theme.color_gray_red};
`

const GreenCircle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 100%;
    display: ${({theme}) => theme.theme === 'dark' ? 'none' : 'block'};
    background-color: ${({ theme }) => theme.color_green_1};
    position: absolute;
    top: 1860px;
    right: -20px;
    z-index: 1;
`

const PinkCircle = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 100%;
    display: ${({theme}) => theme.theme === 'dark' ? 'none' : 'block'};
    background-color: ${({ theme }) => theme.color_pink_1};
    position: absolute;
    top: 1990px;
    right: -90px;
`

export default PopularCustomProduct