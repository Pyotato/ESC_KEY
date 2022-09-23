import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import styled from "styled-components";
import { colors, fontSizes, margins, paddings } from "../theme/theme";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

const CustomerSupportPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <CustomerSupportWrap>
        <div>ESCKEY 고객지원센터 입니다.</div>
        <div>무엇을 도와드릴까요?</div>
        <div className="flexWrap">
          <div className="hoverIcon">
            <img
              className="hoverIcon"
              src="/img/icon/arcticons_user_manual.png"
              alt="faq_icon"
              onClick={() => navigate("/customizing/instructions")}
            />
          </div>
          <div>
            <img
              className="hoverIcon"
              src="/img/icon/FAQ.png"
              alt="faq_icon"
              onClick={() => navigate("/FAQ")}
            />
          </div>
          <div>
            <img
              className="hoverIcon"
              src="/img/icon/chatbot.png"
              alt="faq_icon"
              onClick={() => navigate("/chat")}
            />
          </div>
        </div>
      </CustomerSupportWrap>
      <Footer />
    </>
  );
};
export default CustomerSupportPage;

const CustomerSupportWrap = styled.div`
  background-color: ${({ theme }) =>
    theme.theme === "dark" ? colors.color_bg_dark : colors.color_bg_white};
  width: 100%;
  font-size: ${fontSizes.fontSize_xxxl};
  padding: 12%;
  & > div {
    color: ${({ theme }) =>
      theme.theme === "dark" ? colors.color_bg_dark : colors.color_bg_white};
  }

  & .flexWrap {
    display: inline-flex;
    gap: 12em;
    padding: ${paddings.padding_uuul};
    width: 100%;
  }

  & .hoverIcon {
    width: ${fontSizes.fontSize_xxlTitleSize};
  }

  & .hoverIcon:hover {
    cursor: pointer;
  }
`;
