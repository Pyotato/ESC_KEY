import styled from "styled-components";

const ProductItem = (props) => {
    return (
        <>
        <Wrap>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <Thumnail src={props.thumnail}/>
            <Button>자세히 보기</Button>
        </Wrap>
        </>
    )
}



const Wrap = styled.div`
    background-color: ${({theme}) => theme.theme === 'dark' ? theme.color_gray_2 : theme.color_white};
    margin-top: ${({ theme }) => theme.margin_uul};
    padding: ${({ theme }) => theme.padding_xxl};
    display: flex;
    flex-direction: column;
    width: 190px;
    box-shadow: ${({theme}) => theme.theme === 'dark' ? null : '0px 0px 15px rgba(121, 103, 99, 0.38)'};
`

const Title = styled.span`
    font-size: ${({ theme }) => theme.fontSize_base};
    color: ${({theme}) => theme.theme === 'dark' ? theme.color_white : theme.color_gray_red};
`

const Description = styled.span`
    font-size: ${({ theme }) => theme.fontSize_xTiny};
    color: ${({theme}) => theme.theme === 'dark' ? theme.color_gray_4 : theme.color_gray_red};
`

const Thumnail = styled.img`
    width: 170px;
    margin: 0 auto;
    margin-top: ${({ theme }) => theme.margin_xl};
`

const Button = styled.button`
    background-color: ${({theme}) => theme.theme === 'dark' ? theme.color_invisible : theme.color_green_2};
    border: 1px solid #fff;
    color: ${({theme}) => theme.theme === 'dark' ? theme.color_white : theme.color_white};
    font-size: ${({ theme }) => theme.fontSize_xTiny};
    margin-top: ${({ theme }) => theme.margin_xl};
    padding: 10px 0px 10px 0px;
    :hover{cursor: pointer}
`


export default ProductItem