import Banner from "../components/Banner";
import { bannerContent, cardImgUrls } from "../utils/constants";

const LandingPage = () => {
  return (
    <>
      <div >
        {bannerContent?.map((item) => (
          <Banner {...item} key={item.title} />
        ))}
      </div>
      <div className="py-4 px-10 flex mx-auto bg-white flex-col md:flex-row">
        <div className="md:w-[50%] p-5">
          <div className="text-5xl font-thin">Your favorite channels all in one place</div>
          <div className="text-2xl font-thin my-5">With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice</div>
        </div>
        <div className="md:w-[50%] flex flex-wrap justify-center">
          {cardImgUrls?.map((imgUrl) => (
            <div className="p-1 cursor-pointer hover:scale-105 hover:shadow-lg" key={imgUrl}>
              <img src={imgUrl} alt="icon" width={200} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
