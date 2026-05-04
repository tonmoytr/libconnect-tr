import { getBooks } from "@/utils/getBooks";
import Banner from "./components/home/Banner";
import FeaturedBooks from "./components/home/FeaturedBooks";
import AnnouncementMarquee from "./components/home/Marquee";
import Mission from "./components/home/Mission";
import Testimonials from "./components/home/Testimonials";

export default async function Home() {
  return (
    <>
      <div className="">
        <Banner />
        <AnnouncementMarquee />
        <FeaturedBooks />
        <Mission />
        <Testimonials />
      </div>
    </>
  );
}
