import CreatorSection from "./subsections/Creator/CreatorSection";
import ArtistSection from "./subsections/Artist/ArtistSection";
import HealthSection from "./subsections/Health/HealthSection";
import DeveloperSection from "./subsections/Developer/DeveloperSection";
import MainSchedule from "./featuers/main_shedule/MainSchedule";
import Animation from "./subsections/Animation/Animation";
import "./index.css";
import img from "./public/images/banner_bg.png";

const MainPage = () => {
  return (
    <>
      <header>
        <img src={img} className="banner-img" />
        <div className="bannerContainer">
          <div className="banner-content">
            <h1>2024 New Years Resolution!</h1>
            <p>
              Last year you had a rough year, but this year is new and with
              better opportuniutes. This year's goal is simple: LEARN, GROW,
              REPEAT. I don't want you to be complancent this year. GO OUT your
              comfort ZONE. IF YOU WANT THE FREEDOM THAT YOUR DREAM OF LAST
              YEAR, THEN you better PUT IN THE TIME AND EFFORT TO GET THERE!
              DON'T BE COMPLACENT AND FCKING DO SOMETHING NEW.
            </p>
          </div>
          <div className="scheduleWrapper">
            <MainSchedule />
          </div>
          <div className="navContainer">
            <a href="#creatorSection" className="nav-link">
              Creator
            </a>
            <a href="#animationSection" className="nav-link">
              Animation
            </a>
            <a href="#artistSection" className="nav-link">
              Artist
            </a>
            <a href="#healthSection" className="nav-link">
              Health
            </a>
            <a href="#developerSection" className="nav-link">
              Developer
            </a>
          </div>
        </div>
      </header>
      <main>
        <div className="contentContainer">
          <CreatorSection />
          <Animation />
          <ArtistSection />
          <HealthSection />
          <DeveloperSection />
          <MainSchedule />
        </div>
      </main>
    </>
  );
};

export default MainPage;
