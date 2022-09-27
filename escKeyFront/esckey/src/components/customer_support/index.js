import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors, fontSizes } from "../../theme/theme";
const SupportContents = () => {
  const navigate = useNavigate();

  return (
    <>
      <CustomerSupportWrap>
        <div className="descriptionWrap">
          <div>ESCKEY 고객지원센터 입니다.</div>
          <div>무엇을 도와드릴까요?</div>
        </div>
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
    </>
  );
};
export default SupportContents;

const CustomerSupportWrap = styled.div`
  background-color: ${({ theme }) =>
    theme.theme === "dark" ? colors.color_bg_dark : colors.color_white};
  width: 100%;
  min-height: fit-content;
  font-size: ${fontSizes.fontSize_xxxl};
  display: inline-flex;
  flex-direction: column;
  padding: 9vh 0;

  & .descriptionWrap {
    padding: 12vh 0 3em 3em;
  }

  & > div {
    color: ${({ theme }) =>
      theme.theme === "dark" ? colors.color_bg_white : colors.color_gray_red};
  }
  & .user_manual_dark {
    background-image: ${({ theme }) =>
      theme.theme === "dark"
        ? "url(/img/icon/user_manual_dark.png)"
        : "url(/img/icon/user_manual_light.png)"};
    background-repeat: no-repeat;
    background-size: contain;
    width: 6em;
    height: 9em;
  }
  & .faq {
    background-image: ${({ theme }) =>
      theme.theme === "dark"
        ? "url(/img/icon/FAQ_dark.png)"
        : "url(/img/icon/FAQ_light.png)"};
    background-repeat: no-repeat;
    background-size: contain;
    width: 6em;
    height: 9em;
  }
  & .chat {
    background-image: ${({ theme }) =>
      theme.theme === "dark"
        ? "url(/img/icon/chatbot_dark.png)"
        : "url(/img/icon/chatbot_light.png)"};
    background-repeat: no-repeat;
    background-size: contain;
    width: 6em;
    height: 9em;
  }
  & .flexWrap {
    display: inline-flex;
    gap: 8em;
    justify-content: space-evenly;
    width: 100%;
    padding-bottom: 30vh;

    flex-wrap: wrap;
  }
  & .hoverIcon:hover {
    cursor: pointer;
  }
`;
