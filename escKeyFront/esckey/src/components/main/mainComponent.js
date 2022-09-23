import MainBanner from './banner/mainBanner'
import SubBanner from './banner/subBanner'
import PopularCustomProduct from './product/popularCustom'
import PopularProduct from './product/popularProduct'
import Header from '../header/header'
import MenuWrap from './menu/menuWrap'
import styled from "styled-components";
import Footer from '../footer/footer'

const MainPageComponent = () => {
    return (
        <>
        <Header/>
        <Wrap>
            <MainBanner/>
            <PopularCustomProduct/>
            <MenuWrap/>
            <SubBanner/>
            <PopularProduct/>
            <Footer/>
        </Wrap>
        </>
    )
}

const Wrap = styled.div`
    background-color: ${({theme}) => theme.theme === 'dark' ? theme.color_bg_dark : theme.color_bg_white};
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
`

export default MainPageComponent