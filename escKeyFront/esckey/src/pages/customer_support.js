import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import styled from "styled-components";
import SupportContents from "../components/customer_support";
import { colors, paddings } from "../theme/theme";

const CustomerSupportPage = () => {
  return (
    <>
      <Header />
      <CustomerSupportWrap>
        <SupportContents />
      </CustomerSupportWrap>
      <Footer />
    </>
  );
};
export default CustomerSupportPage;

const CustomerSupportWrap = styled.div`
  background-color: ${({ theme }) =>
    theme.theme === "dark" ? colors.color_bg_dark : colors.color_white};
`;
