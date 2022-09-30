import styled from "styled-components";
import { colors, fontSizes, margins } from "../../../theme/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { CommunityBtn } from "../../../_common/buttons";

const WritePost = ({ onWritePost }) => {
  return (
    <>
      <WritePostWrap>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="xmark"
          onClick={onWritePost}
        />
        <div>글쓰기</div>
        <div>
          <div className="flexContents">
            <div className="flexBox">
              <span>제목</span>
              <input
                placeholder="제목을 입력해주세요"
                style={{ width: "29vw" }}
              ></input>
            </div>
            <div className="flexBox">
              <span>분류</span>{" "}
              <select>
                <option value="전체">전체</option>
                <option value="후기글">후기글</option>
                <option value="추천글">추천글</option>
              </select>
            </div>
            <div className="flexBox">
              <span>내용</span>{" "}
              <textarea placeholder="내용을 입력해주세요"></textarea>
            </div>
          </div>
        </div>
        <CommunityBtn className="btn"> 제출 </CommunityBtn>
      </WritePostWrap>
    </>
  );
};
export default WritePost;

const WritePostWrap = styled.div`
  position: fixed;
  top: 50vh;
  left: 50%;
  width: 75%;
  height: 75%;
  transform: translate(-50%, -45%);
  background-color: ${colors.color_white};
  z-index: 200;
  box-shadow: 6px 6px 6px ${colors.color_gray_3};

  & .xmark {
    transform: translate(35vw, 2vh);
    font-size: ${fontSizes.fontSize_xxxl};
    color: ${({ theme }) =>
      theme.theme === "dark" ? colors.color_gray_3 : colors.color_gray_red};
  }
  & .xmark:hover {
    cursor: pointer;
    color: ${({ theme }) =>
      theme.theme === "dark" ? colors.color_black : colors.color_gray_red3};
  }

  & .flexContents {
    display: inline-flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin: ${margins.margin_uul};
  }
  & .btn {
    clear: both;
    float: right;
  }
  & .btn:hover {
    cursor: pointer;
  }
  & .flexBox {
    margin-bottom: ${margins.margin_lg};
    align-items: center;
    gap: 2em;
    flex-wrap: wrap;
    display: inline-flex;
    & textarea {
      width: 29vw;
      height: 30vh;
      resize: none;
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;
