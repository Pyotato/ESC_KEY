import { useState } from "react";
import styled from "styled-components";
import { device, deviceSizes } from "../../../theme/theme";

const CommunityPost = () => {
  const [dummyPost, setDummyPost] = useState([
    {
      postNo: 1,
      postTitle: "제목 1",
      postAuthor: "글쓴이1",
      postCreateDate: "2022/9/21",
      postLikes: 0,
      postViews: 0,
    },
    {
      postNo: 2,
      postTitle: "제목 2",
      postAuthor: "글쓴이2",
      postCreateDate: "2022/9/21",
      postLikes: 0,
      postViews: 0,
    },
    {
      postNo: 3,
      postTitle: "제목 3",
      postAuthor: "글쓴이3",
      postCreateDate: "2022/9/21",
      postLikes: 0,
      postViews: 0,
    },
    {
      postNo: 4,
      postTitle: "제목 4",
      postAuthor: "글쓴이4",
      postCreateDate: "2022/9/21",
      postLikes: 0,
      postViews: 0,
    },
    {
      postNo: 5,
      postTitle: "제목 5",
      postAuthor: "글쓴이5",
      postCreateDate: "2022/9/21",
      postLikes: 0,
      postViews: 0,
    },
    {
      postNo: 6,
      postTitle: "제목 6",
      postAuthor: "글쓴이666666666",
      postCreateDate: "2022/9/21",
      postLikes: 0,
      postViews: 0,
    },
  ]);
  return (
    <>
      <TotalWrap>
        <div className="flexWrap">
          <div className="flexItem">
            <div> no.</div>
            {dummyPost.map((v) => (
              <div key={v.postNo}>{v.postNo}</div>
            ))}
          </div>
          <div className="postTitleWrap flexItem">
            <div>제목</div>
            {dummyPost.map((v) => (
              <div key={v.postNo}>{v.postTitle}</div>
            ))}
          </div>
          <div className="postAuthorWrap flexItem">
            <div>글쓴이</div>
            {dummyPost.map((v) => (
              <div key={v.postNo}>
                {/* {v.postAuthor.length < 3 ? ( */}
                {/* {device <= device.device_tabletL ? ( */}
                {device.device_tabletL ? (
                  <>{v.postAuthor}</>
                ) : (
                  <>{v.postAuthor.substring(0, 1) + "..."}</>
                )}
              </div>
            ))}
          </div>
          <div className="flexItem">
            <div>작성일</div>
            {dummyPost.map((v) => (
              <div key={v.postNo}>{v.postCreateDate}</div>
            ))}
          </div>
          <div className="flexItem">
            <div>추천</div>
            {dummyPost.map((v) => (
              <div key={v.postNo}>{v.postLikes}</div>
            ))}
          </div>
          <div className="flexItem">
            <div>조회</div>
            {dummyPost.map((v) => (
              <div key={v.postNo}>{v.postViews}</div>
            ))}
          </div>
        </div>
      </TotalWrap>
    </>
  );
};
export default CommunityPost;

const TotalWrap = styled.div`
  /* width: 100vw; */
  width: 100%;

  /* background-color: red; */
  & .flexWrap {
    display: inline-flex;
    /* flex-wrap: wrap; */
    justify-content: center;
    width: 90vw;
    & div > div {
      padding: 1em;
      border-bottom: 1px solid black;
    }
    /* & .flexItem {
      padding: 1em;
      border-bottom: 1px solid black;
      border: 1px solid black;
    } */
  }
  & .postTitleWrap {
    /* width: 40%; */
  }
  & .postAuthorWrap {
    overflow-x: hidden;
    /* width: 30%; */
  }
`;
