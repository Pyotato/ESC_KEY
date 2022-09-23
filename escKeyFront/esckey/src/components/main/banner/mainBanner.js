import styled from "styled-components";
import theme from '../../../config/theme'

const MainBanner = () => {
    return (
        <>
        <Wrap>
            <Title>GAMING</Title>
            <Title style={{position: 'relative', top: '-15px', fontSize: theme.fontSizes.titleSize}}>KEYBOARD</Title>
        </Wrap>
        </>
    )
}

const Wrap = styled.div`
    width: 100%;
    height: 80vh;
    background-image: ${({theme}) => theme.theme === 'dark' ? 'url(/img/banner/main_banner.png)' : 'url(/img/banner/main_banner_2.png);'};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.span`
    color: white;
    font-size: ${({ theme }) => theme.fontSize_xlTitleSize};
`

export default MainBanner