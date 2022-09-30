import { dummydata1 } from "../../../dummydata/product";
import CustomProductSwiper from "../../main/product/item/swiper/CustomPrSwiper";

const PopularCustomList = () => {
  return (
    <>
      <div style={{ display: "block", clear: "both" }}>
        <CustomProductSwiper data={dummydata1.custom} />
        {/* <CustomProductSwiper /> */}
      </div>
    </>
  );
};
export default PopularCustomList;
