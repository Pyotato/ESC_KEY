import styled from "styled-components";
import { useTheme } from "../../context/themeProvider"

const Header = () => {
    const [ThemeMode, toggleTheme] = useTheme()
    return (
        <>
        <Wrap>
            <nav style={{marginLeft: '50px', fontFamily: 'Noto Sans KR'}}>
                <HeaderList href="#">견적내기</HeaderList>
                <HeaderList href="/community">커뮤니티</HeaderList>
                <HeaderList href="/product/all">전체상품</HeaderList>
                <HeaderList href="/support">고객센터</HeaderList>
            </nav>
            <nav style={{marginRight: '50px', fontFamily: 'Noto Sans KR'}}>
                <HeaderList onClick={toggleTheme}> {ThemeMode === 'dark' ? 'BASIC' : 'GAME'}</HeaderList>
                <HeaderList href="/product">마이페이지</HeaderList>
            </nav>
        </Wrap>
        </>
    )
}

const Wrap = styled.header`
    width: 100%;
    height: 55px;
    position: fixed;
    z-index: 999;
    top: 0px;
    left: 0px;
    background-color: ${({theme}) => theme.theme === 'dark' ? theme.color_bg_dark : theme.color_bg_white};
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const HeaderList = styled.a`
    color: ${({theme}) => theme.theme === 'dark' ? theme.color_white : theme.color_gray_red};
    font-size: ${({ theme }) => theme.fontSize_small};
    margin: 0px 10px 0px 10px;
    text-decoration: none;
    :hover {
        cursor: pointer;
    }
`

const ChangeThemeWrap = styled.a`
    color: ${({ theme }) => theme.fontColor1};
    font-size: 11.5px;
    margin: 0px 10px 0px 10px;
    text-decoration: none;
`

export default Header