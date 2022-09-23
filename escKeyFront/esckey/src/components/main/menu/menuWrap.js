import styled from "styled-components";
import MenuIcon from './menuIcon'

const MenuWrap = (props) => {
    return (
        <>
        <Wrap>
            <MenuIcon img='/img/icon/estimate' text='견적내기'/>
            <MenuIcon img='/img/icon/profile' text='커뮤니티'/>
            <MenuIcon img='/img/icon/shop' text='전체상품'/>
            <MenuIcon img='/img/icon/chat' text='고객센터'/>
        </Wrap>
        </>
    )
}

const Wrap = styled.div`
    width: 750px;
    display: flex;
    justify-content: center;
    margin-top: 100px;
    border-bottom: 1.5px solid ${({theme}) => theme.theme === 'dark' ? '' : theme.color_gray_red3};
    border-top: 1.5px solid ${({theme}) => theme.theme === 'dark' ? '' : theme.color_gray_red3};
    padding: 80px 0px 80px 0px;
`

export default MenuWrap