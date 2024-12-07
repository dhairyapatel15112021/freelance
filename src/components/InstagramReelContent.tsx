import { Link } from "react-router-dom";
import instagram_1 from "../assets/instagram/instagram_1.png";
import instagram_2 from "../assets/instagram/instagram_2.png";
import instagram_3 from "../assets/instagram/instagram_3.png";
import instagram_4 from "../assets/instagram/instagram_4.png";
import instagram_5 from "../assets/instagram/instagram_5.png";

interface data {
  index: number
}
export const InstagramReelContent = (inputData: data) => {
  const imageData = [instagram_1, instagram_2, instagram_3, instagram_4, instagram_5];
  return (
    <div className='h-[589px] w-[331.31px] relative top-0 left-[10vw] md:left-[5vw] rounded-lg flex-shrink-0'>
      <Link to="https://www.instagram.com/d_effects_events_entertainment/?utm_source=ig_web_button_share_sheet" target="_blank">
        <div className="absolute top-[5%] right-[10%]">icon</div>
        <img src={imageData[inputData.index]} alt="image" />
      </Link>
    </div>
  )
}
