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
      postTitle: "제목 6입니다~~~~~~~~~~~~~",
      postAuthor: "글쓴이666666666",
      postCreateDate: "2022/9/21",
      postLikes: 0,
      postViews: 0,
    },
    {
      postNo: 7,
      postTitle: "제목 7입니다~~~~~~~~~~~~~",
      postAuthor: "글쓴이77",
      postCreateDate: "2022/9/21",
      postLikes: 0,
      postViews: 0,
    },
    {
      postNo: 8,
      postTitle: "제목 7입니다~~~~~~~~~~~~~",
      postAuthor: "글쓴이77",
      postCreateDate: "2022/9/21",
      postLikes: 0,
      postViews: 0,
    },
    {
      postNo: 9,
      postTitle: "제목 9입@@@@@@@@@니다~~~~~~~~~~~~~",
      postAuthor: "글쓴이9",
      postCreateDate: "2022/9/21",
      postLikes: 0,
      postViews: 0,
    },
    {
      postNo: 10,
      postTitle: "제목 10입니다~~~~~~@@@@@@@@@~~~~~~~",
      postAuthor: "글쓴이101010",
      postCreateDate: "2022/9/21",
      postLikes: 0,
      postViews: 0,
    },
  ]);
  return (
    <>
      <TotalWrap>
        <div className="flexWrap">
          <div className="flexItem wrap">
            <span> no.</span>
            <span className="titleWrap">제목</span>
            <span className="titleWrap">글쓴이</span>
            <span className="itemWt">작성일</span>
            <span>추천</span>
            <span>조회</span>
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
                <span>{v.postCreateDate}</span>
                <span>{v.postLikes}</span>
                <span>{v.postViews}</span>
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
`;
