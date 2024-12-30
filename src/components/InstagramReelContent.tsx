import { Link } from "react-router-dom";
import instagram_1 from "../assets/instagram/instagram_1.jpg";
import instagram_2 from "../assets/instagram/instagram_2.jpg";
import instagram_5 from "../assets/instagram/instagram_3.jpg";
import instagram_4 from "../assets/instagram/instagram_4.jpg";
import instagram_3 from "../assets/instagram/instagram_5.jpg";
import instagram_6 from "../assets/instagram/instagram_6.jpg";
import instagramIcon from "../assets/instagram/instagramIcon.svg";

interface data {
  index: number
}

export const InstagramReelContent = (inputData: data) => {
  const imageData = [instagram_1, instagram_2, instagram_3, instagram_4, instagram_5, instagram_6];
  return (
    <div className='h-[589px] w-[331.31px] relative top-0 rounded-lg flex-shrink-0'>
      <Link to="https://www.instagram.com/d_effects_events_entertainment/?utm_source=ig_web_button_share_sheet" target="_blank">
        <div className="absolute top-[4%] right-[9%]">
          <img className="w-[30px] h-[30px]" src={instagramIcon} alt="instagramIcon" />
        </div>
        <div style={{backgroundImage: `url(${imageData[inputData.index]})`}} className="h-full w-full bg-cover bg-center rounded-lg"></div>
      </Link>
    </div>
  )
}
