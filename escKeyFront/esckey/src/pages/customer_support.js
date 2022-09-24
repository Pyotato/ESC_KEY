import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import styled from "styled-components";
import { colors, fontSizes, margins, paddings, theme } from "../theme/theme";
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
            <div
              className="hoverIcon user_manual_dark"
              onClick={() => navigate("/customizing/instructions")}
            />
          </div>
          <div>
            <div className="hoverIcon faq" onClick={() => navigate("/FAQ")} />
          </div>
          <div>
            <div className="hoverIcon chat" onClick={() => navigate("/chat")} />
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
  padding: 9%;

  & > div {
    color: ${({ theme }) =>
      theme.theme === "dark" ? colors.color_bg_dark : colors.color_gray_red};
  }
  & .user_manual_dark {
    background-image: ${({ theme }) =>
      theme.theme === "dark"
        ? "url(/img/icon/user_manual_dark.png)"
        : "url(/img/icon/user_manual_light.png)"};
    background-repeat: no-repeat;
    width: 9em;
    height: 12em;
  }
  & .faq {
    background-image: ${({ theme }) =>
      theme.theme === "dark"
        ? "url(/img/icon/FAQ_dark.png)"
        : "url(/img/icon/FAQ_light.png)"};
    background-repeat: no-repeat;
    width: 9em;
    height: 12em;
  }
  & .chat {
    background-image: ${({ theme }) =>
      theme.theme === "dark"
        ? "url(/img/icon/chatbot_dark.png)"
        : "url(/img/icon/chatbot_light.png)"};
    background-repeat: no-repeat;
    width: 9em;
    height: 12em;
  }
  & .flexWrap {
    display: inline-flex;
    gap: 9em;
    padding: ${paddings.padding_uuul};
    width: 100%;
  }

  & .hoverIcon:hover {
    cursor: pointer;
  }
`;
