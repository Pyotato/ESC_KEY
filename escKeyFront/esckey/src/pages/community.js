import styled from "styled-components";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import {
  colors,
  fontSizes,
  fontWeights,
  margins,
  paddings,
} from "../theme/theme";
import CommunityList from "../components/community";
import CommunityCp from "../components/community";

const CommunityPage = () => {
  return (
    <>
      <Header />
      <CommunityCp />
      {/* <CommunityWrap>
        <div>커뮤니티</div>
        <div className="descriptionWrap">
          <div>POPULAR CUSTOM</div>
          <div>게이머들이 추천하는 커스텀 조합입니다.</div>
        </div>
        <CommunityList />
      </CommunityWrap> */}

      <Footer />
    </>
  );
};
export default CommunityPage;
const CommunityWrap = styled.div`
  background-color: ${colors.color_invisible};
  width: 100%;
  height: 100vh;
  padding-top: ${paddings.padding_uul};
  color: ${colors.color_ft_black};
  font-size: ${fontSizes.fontSize_xxxl};
  font-weight: ${fontWeights.fontWeight_bolder};
  margin-top: ${margins.margin_uuul};
  text-align: center;

  & .descriptionWrap {
    float: left;
    text-align: left;
  }
`;
