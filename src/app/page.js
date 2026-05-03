import Banner from "./components/home/Banner";
import AnnouncementMarquee from "./components/home/Marquee";

export default function Home() {
  return (
    <>
      <div className="container mx-auto max-w-7xl py-8 px-4">
        <Banner />
      </div>
      <AnnouncementMarquee />
    </>
  );
}
