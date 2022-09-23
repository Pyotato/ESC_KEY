import styled from "styled-components";

const Footer = () => {
    return (
        <>
        <Container>
            <Wrap>
                <div>
                    <Logo>ESC KEY</Logo>
                </div>
                <div style={{display: 'flex'}}>
                    <div style={{width: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <FooterList>견적내기</FooterList>
                    </div>
                    <div style={{width: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <FooterList>커뮤니티</FooterList>
                    </div>
                    <div style={{width: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <FooterList>전체상품</FooterList>
                    </div>
                    <div style={{width: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <FooterList>고객센터</FooterList>
                    </div>
                </div>
            </Wrap>
            <Divided/>
            <Wrap style={{padding: '20px 70px 30px 70px', alignItems: 'flex-start'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <ServiceDescription>Everything Styles' Custom Keyboard</ServiceDescription>
                    <Description>상호: ESC ( Everything Styles' Custom Keyboard )<br/>사업자 등록 번호: 000-00-00000ㅣ이메일: esckey@gmail.com<br/>주소: 서울특별시 강남구 역삼동 736-7</Description>
                </div>
                <div style={{display: 'flex'}}>
                    <div style={{width: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <FooterList>취향찾기</FooterList>
                    </div>
                    <div style={{width: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <FooterList>글쓰기</FooterList>
                    </div>
                    <div style={{width: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <FooterList style={{marginBottom: '20px'}}>Case</FooterList>
                        <FooterList style={{marginBottom: '20px'}}>PCB</FooterList>
                        <FooterList style={{marginBottom: '20px'}}>PLATE</FooterList>
                        <FooterList style={{marginBottom: '20px'}}>SWITCHES</FooterList>
                        <FooterList style={{marginBottom: '20px'}}>KEYCAPS</FooterList>
                    </div>
                    <div style={{width: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <FooterList>고객센터</FooterList>
                    </div>
                </div>
            </Wrap>
        </Container>
        </>
    )
}

const Container = styled.header`
    width: 100vw;
    background-color: ${({theme}) => theme.theme === 'dark' ? theme.color_ft_black : theme.color_gray_red};
`

const Wrap = styled.div`
    padding: 40px 70px 0px 70px;
    display: flex;
    flex-direction: row;
    align-content: space-between;
    justify-content: space-between;
    align-items: center;
`

const FooterList = styled.a`
    color: ${({theme}) => theme.theme === 'dark' ? theme.color_white : theme.color_white};
    font-size: ${({ theme }) => theme.fontSize_tiny};
    text-decoration: none;
    :hover {
        cursor: pointer;
    }
`

const Divided = styled.div`
    background-color: ${({theme}) => theme.theme === 'dark' ? theme.color_gray_3 : theme.color_pink_1};
    height: 1px;
    margin: 10px 70px 0px 70px;
`

const Logo = styled.span`
    color: ${({theme}) => theme.theme === 'dark' ? theme.color_white : theme.color_white};
    font-size: ${({theme}) => theme.fontSize_ul};
`

const ServiceDescription = styled.span`
    color: ${({theme}) => theme.theme === 'dark' ? theme.color_white : theme.color_white};
`

const Description = styled.span`
    color: ${({theme}) => theme.theme === 'dark' ? theme.color_white : theme.color_white};
    font-size: ${({theme}) => theme.fontSize_xTiny};
    line-height: 35px;
    margin-top: 10px;
`

export default Footer