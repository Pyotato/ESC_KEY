import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, fontSizes, fontWeights, paddings } from "../../theme/theme";
const CustomizingInstructionsWrap = () => {
  const [manualState, setManualState] = useState([
    {
      manualNo: 1,
      title: "타이틀내용",
      subtitle: "타입",
      thumbnail: "/img/temporary/temporary_thumbnail.png",
    },
    {
      manualNo: 2,
      title: "타이틀내용",
      subtitle: "타입",
      thumbnail: "/img/temporary/temporary_thumbnail.png",
    },
    {
      manualNo: 3,
      title: "타이틀내용",
      subtitle: "타입",
      thumbnail: "/img/temporary/temporary_thumbnail.png",
    },
  ]);
  const [articleState, setArticleState] = useState([
    {
      articleNo: 1,
      title: "전체",
      uploadYear: "2022",
      fileFormat: "PDF",
      fileLink: "/img/temporary/temporary_thumbnail.png",
    },
    {
      articleNo: 2,
      title: "아무거나",
      uploadYear: "2022",
      fileFormat: "PDF",
      fileLink: "/img/temporary/temporary_thumbnail.png",
    },
    {
      articleNo: 3,
      title: "끄적이는",
      uploadYear: "2022",
      fileFormat: "PDF",
      fileLink: "/img/temporary/temporary_thumbnail.png",
    },

    {
      articleNo: 4,
      title: "의미없는 이름",
      uploadYear: "2022",
      fileFormat: "PDF",
      fileLink: "/img/temporary/temporary_thumbnail.png",
    },
  ]);

  return (
    <>
      <CustomerSupportWrap>
        <div className="descriptionWrap">
          <div>커스텀 과정 / 메뉴얼</div>
        </div>
        <div className="flexWrap">
          {manualState.map((e) => (
            <div key={e.manualNo} className="shortcuts">
              <div style={{ display: "inline-block" }}>
                <div>{e.title}</div>
                <div>{e.subtitle}</div>
              </div>
              <img src={e.thumbnail} alt={e.thumbnail}></img>
            </div>
          ))}
        </div>
        <div className="manualList">
          <div>잦은 질문</div>
          {articleState.map((e) => (
            <div key={e.articleNo}>
              <div style={{ display: "inline-block" }}>
                <div className="listFlexWrap">
                  <span>
                    {e.articleNo}. {e.title}
                  </span>
                  <span>{e.uploadYear}</span>
                  <span>{e.fileFormat}</span>
                  <Link
                    to={e.fileLink}
                    target="_blank"
                    download
                    className="downloadBtn"
                  >
                    다운로드
                  </Link>
                </div>
              </div>
              <img src={e.thumbnail} alt={e.thumbnail}></img>
            </div>
          ))}
        </div>
      </CustomerSupportWrap>
    </>
  );
};
export default CustomizingInstructionsWrap;

const CustomerSupportWrap = styled.div`
  background-color: ${colors.color_white};
  width: 100%;
  height: fit-content;
  font-size: ${fontSizes.fontSize_xxxl};
  display: inline-flex;
  flex-direction: column;
  padding: 9vh 0;

  & .descriptionWrap {
    font-weight: ${fontWeights.fontWeight_bold};
    padding: 6vh 0 1em 3em;
  }

  & .flexWrap {
    display: inline-flex;
    gap: 1em;
    justify-content: space-evenly;
    width: 100%;
    flex-wrap: wrap;
  }

  & img {
    float: right;
  }

  & .shortcuts {
    border: 1px solid ${colors.color_black};
    padding: ${paddings.padding_lg};
    width: 13em;
    & div:nth-child(1) {
      font-weight: ${fontWeights.fontWeight_bold};
      font-size: ${fontSizes.fontSize_lg};
    }
    & div:nth-child(2) {
      font-weight: ${fontWeights.fontWeight_regular};
      font-size: ${fontSizes.fontSize_small};
    }
  }
  & .shortcuts:hover {
    cursor: pointer;
  }

  & .manualList {
    font-size: ${fontSizes.fontSize_small};
    font-weight: ${fontWeights.fontWeight_bold};
    padding: ${paddings.padding_ul} ${paddings.padding_uuul};

    & > div {
      padding: 1em;
      border-bottom: 1px solid
        ${({ theme }) =>
          theme.theme === "dark"
            ? colors.color_bg_dark
            : colors.color_gray_red3};
    }
  }
  & .listFlexWrap {
    display: inline-flex;
    justify-content: space-evenly;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;

    & span:nth-child(1) {
      width: 62vw;
    }
    & span {
      width: 6vw;
    }
    & span:nth-child(4) {
      width: 9vw;
    }
    & .downloadBtn {
      text-decoration: none;
      border: 1px solid none;
      color: ${({ theme }) =>
        theme.theme === "dark" ? colors.color_bg_dark : colors.color_brown};
      padding: ${paddings.padding_small} ${paddings.padding_ul};
      background-color: ${({ theme }) =>
        theme.theme === "dark"
          ? colors.color_gray_5
          : colors.color_beige_brown};
      font-size: ${fontSizes.fontSize_tiny};
    }
  }
`;
