import styled from "styled-components";
import { dummyPost } from "../../../dummydata/post";

const CommunityPost = () => {
  return (
    <>
      <TotalWrap>
        <div className="flexWrap">
          <div className="flexItem wrap">
            <span> no.</span>
            <span className="titleWrap">제목</span>
            <span className="titleWrap">글쓴이</span>
            <span className="itemWt">작성일</span>
            <span className="itemWt">추천</span>
            <span className="itemWt">조회</span>
          </div>

          {dummyPost.map((v) => (
            <>
              <div className="wrap">
                <span>{v.postNo}</span>
                <span className="titleWrap">
                  {v.postTitle.length < 12 ? (
                    <>{v.postTitle}</>
                  ) : (
                    <>{v.postTitle.substring(0, 11) + "..."}</>
                  )}

                  {/* {v.postTitle}</span> */}
                </span>
                <span className="titleWrap">
                  {v.postAuthor.length < 6 ? (
                    <>{v.postAuthor}</>
                  ) : (
                    <>{v.postAuthor.substring(0, 5) + "..."}</>
                  )}
                </span>
                <span className="itemWt">{v.postCreateDate}</span>
                <span className="itemWt">{v.postLikes}</span>
                <span className="itemWt">{v.postViews}</span>
              </div>
            </>
          ))}
        </div>
      </TotalWrap>
    </>
  );
};
export default CommunityPost;

const TotalWrap = styled.div`
  & .wrap {
    display: inline-flex;
    width: 95%;
    justify-content: space-evenly;
    border-bottom: 1px solid black;
    gap: 1em;
    padding: 1em;
  }

  & .titleWrap {
    width: 12vw;
  }
  & .itemWt {
    width: 6vw;
  }
`;
