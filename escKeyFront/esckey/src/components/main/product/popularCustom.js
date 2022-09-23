import styled from "styled-components";
import CustomProductSwiper from "./item/swiper/CustomPrSwiper"
import { dummydata1 } from "../../../dummydata/product";
const PopularProduct = () => {
    return (
        <>
        <Container>
            <div>
                <Title>POPULAR CUSTOM</Title>
                <br/>
                <Description>게이머들이 추천하는 커스텀 조합입니다.</Description>
                <CustomProductSwiper data={dummydata1.custom}/>
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
    padding-top: 150px;
    padding-bottom: ${({ theme }) => theme.padding_uuul};
`

const Title = styled.span`
    font-size: ${({ theme }) => theme.fontSize_ul};
    color: ${({theme}) => theme.theme === 'dark' ? theme.color_white : theme.color_gray_red};
    margin-left: 15px;
`

const Description = styled.span`
    font-size: ${({ theme }) => theme.fontSize_tiny};
    color: ${({theme}) => theme.theme === 'dark' ? theme.color_white : theme.color_gray_red};
    margin-left: 15px;
`

const GreenCircle = styled.div`
    width: 350px;
    height: 350px;
    border-radius: 100%;
    display: ${({theme}) => theme.theme === 'dark' ? 'none' : 'block'};
    background-color: ${({ theme }) => theme.color_green_1};
    position: absolute;
    top: 700px;
    left: -150px;
`

const PinkCircle = styled.div`
    width: 220px;
    height: 220px;
    border-radius: 100%;
    display: ${({theme}) => theme.theme === 'dark' ? 'none' : 'block'};
    background-color: ${({ theme }) => theme.color_pink_1};
    position: absolute;
    top: 980px;
    left: 0px;
`

export default PopularProduct