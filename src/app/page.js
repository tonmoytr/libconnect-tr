import Banner from "./components/home/Banner";
import FeaturedBooks from "./components/home/FeaturedBooks";
import AnnouncementMarquee from "./components/home/Marquee";

export default function Home() {
  return (
    <>
      <div className="">
        <Banner />
        <AnnouncementMarquee />
        <FeaturedBooks />
      </div>
    </>
  );
}
