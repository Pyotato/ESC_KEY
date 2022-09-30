import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import {
  colors,
  fontSizes,
  fontWeights,
  margins,
  paddings,
} from "../../theme/theme";
import { CommunityBtn, CommunityWritePostBtn } from "../../_common/buttons";
import CommunityPost from "./communityPost";
import PopularCustomList from "./popularCustomList";
import WritePost from "./writePost";

const CommunityCp = () => {
  const [modalState, setModalState] = useState(0);

  useEffect(() => {
    setModalState(0);
  }, []);

  const onWritePost = useCallback(() => {
    if (modalState === 0) {
      setModalState(1);
    } else {
      setModalState(0);
    }
  }, [modalState]);

  console.log(modalState);
  return (
    <>
      <CommunityWrap>
        {modalState === 1 ? (
          <>
            <div className="modalWrap" onClick={onWritePost}></div>
            <WritePost onWritePost={onWritePost} />
          </>
        ) : (
          <></>
        )}
        <div>
          <div className="pageTitle">커뮤니티</div>
          <div className="descriptionWrap">
            <div>POPULAR CUSTOM</div>
            <div>게이머들이 추천하는 커스텀 조합입니다.</div>
          </div>
        </div>
        <PopularCustomList />
        <div className="sectionTitle">POST</div>
        <ListWrap>
          <div>
            <select>
              <option value="전체">전체</option>
              <option value="후기글">후기글</option>
              <option value="추천글">추천글</option>
            </select>
            <select style={{ marginLeft: "6em" }}>
              <option value="정렬">정렬</option>
              <option value="추천순">추천순</option>
              <option value="조회순">조회순</option>
            </select>
          </div>
          <CommunityWritePostBtn onClick={onWritePost} className="btn">
            글쓰기
          </CommunityWritePostBtn>
        </ListWrap>
        <CommunityPost />
      </CommunityWrap>
    </>
  );
};
export default CommunityCp;

const CommunityWrap = styled.div`
  /* height: 100vh; */
  height: fit-content;
  text-align: center;
  padding: 4em 12em;

  & .pageTitle {
    font-weight: ${fontWeights.fontWeight_bolder};
    font-size: ${fontSizes.fontSize_ul};
    margin: ${margins.margin_uul};
  }
  & .descriptionWrap {
    float: left;
    text-align: left;
    font-size: ${fontSizes.fontSize_lg};

    & > div:nth-child(2) {
      font-size: ${fontSizes.fontSize_xxTiny};
    }
  }
  & .sectionTitle {
    clear: both;
    font-size: ${fontSizes.fontSize_lg};
    margin: ${margins.margin_ul} 0;
    text-align: center;
  }
  & .modalWrap {
    width: 100vw;
    height: 100vh;
    z-index: 100;
    position: fixed;
    top: 0;
    right: 0;
    background-color: ${colors.color_ft_black};
    opacity: 0.4;
  }
  & .xmark {
    transform: translate(35vw, 2vh);
    font-size: ${fontSizes.fontSize_xxxl};
  }
  & .xmark:hover {
    cursor: pointer;
  }
`;

const ListWrap = styled.div`
  clear: both;
  width: 100%;
  justify-content: space-between;
  display: inline-flex;
  & select {
    width: 9em;
    float: left;
    height: 4.5em;
    font-size: ${fontSizes.fontSize_xTiny};
    padding: ${paddings.padding_small};
  }
  & .btn {
    clear: both;
    float: inline-end;
  }
  & .btn:hover {
    cursor: pointer;
  }
`;
