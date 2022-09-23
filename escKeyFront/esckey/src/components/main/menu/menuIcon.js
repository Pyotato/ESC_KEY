import styled from "styled-components";
import { useTheme } from "../../../context/themeProvider"

const MenuIcon = (props) => {
    const [ThemeMode, toggleTheme] = useTheme()
    return (
        <>
        <Wrap>
            <Icon src={ThemeMode === 'dark' ? props.img + '.png' : props.img + '_light.png'}/>
            <Text>{props.text}</Text>
        </Wrap>
        </>
    )
}

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px 80px 0px 80px;
    &:hover {
        cursor: pointer;
    }
`

const Icon = styled.img`
    width: 50px;
`

const Text = styled.span`
    color: ${({theme}) => theme.theme === 'dark' ? theme.color_white : theme.color_gray_red};
    font-size: 13px;
    margin-top: 15px;
    font-family: 'Noto Sans KR';
`

export default MenuIcon