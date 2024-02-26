import { useEffect, useState } from "react";
import YoutubeCard from "./layouts/YoutubeCard";
import { useLocalStorage } from "../../featuers/hooks/useLocalStorage";
import SubSchedule from "../../featuers/context/SubSchedules/SubSchedule";
import { creatorScheduleData } from "../../data/subScheduleData/Creator/CreatorSchedule";
import { getMonthWeek } from "../../utili";

const CreatorSection = () => {
  const [toggleRefresh, setToggle] = useState(false);
  const [youtubeData, setYoutubeData] = useLocalStorage([], "YOUTUBE_DATA");
  const [localWeekNumber, setLocalWeekNumber] = useState<number>(1);

  useEffect(() => {
    if (toggleRefresh) {
      fetchYoutubeData();
      setToggle(false);
    }
  }, [toggleRefresh]);

  useEffect(() => {
    const num = getMonthWeek();
    setLocalWeekNumber(num);
  }, []);

  // const returnCorrectWeekSchedule = (weekNumber: number) => {
  //   if (weekNumber > 3) {
  //     weekNumber = 1;
  //   }
  //   switch (weekNumber) {
  //     case 1:
  //       return creatorScheduleData.week[0];
  //     case 2:
  //       return creatorScheduleData.week[1];
  //     case 3:
  //       return creatorScheduleData.week[2];
  //     default:
  //       throw new Error("Did not return a valid week");
  //   }
  // };

  const fetchYoutubeData = async () => {
    console.log("fetching");
    await fetch(
      "https://youtube.googleapis.com/youtube/v3/channels?part=statistics&part=snippet&id=UCnrPYYUzU3pJZTidtdYq9cw&key=AIzaSyCPipAT6VCQizJulmD4Qa_3NnTRsnVmnWQ"
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => setYoutubeData(data.items[0]));
    setToggle(false);
  };

  const returnYoutubeCard = () => {
    const data = {
      title: youtubeData.snippet.title,
      profilePic: youtubeData.snippet.thumbnails.high.url,
      subCount: youtubeData.statistics.subscriberCount,
      videoCount: youtubeData.statistics.videoCount,
      setToggle: setToggle,
    };

    return <YoutubeCard {...data} />;
  };

  // create a featuere that tracks amount of video posted/gives a streak if a certain amount of videos are posted without missing a post date; a feature that tracks if a video is posted on expected date.
  return (
    <section id="creatorSection">
      <div className="c-top">
        <h2>Content Creation</h2>
      </div>
      <span className="c-left-right-bg"></span>
      <div className="c-left">
        <p>
          To be a Content Creator, you must create content on a consistent
          schedule. There must be a concrete plan and effort to produce the best
          quality you are capable of doing. You have the grit and stamina to
          achieve this goal, but you must remain consistent and true to
          yourself. Create a schedule that is easy, simple for you to follow and{" "}
          <span style={{ color: "#e3b23c", fontStyle: "italic" }}>
            realistcally do.
          </span>
        </p>
        <p>
          You and Emi want to be youtubers , but you guys are not putting in the
          work.{" "}
        </p>
      </div>
      <div className="c-right">
        {youtubeData.length === 0 ? (
          <button onClick={() => setToggle(true)}>Reload Data</button>
        ) : (
          returnYoutubeCard()
        )}
      </div>
      <div className="c-bottom">
        <div className="creatorSchedule">
          {creatorScheduleData.map((days, index) => {
            return (
              <SubSchedule
                key={index}
                task={days.task}
                description={days.description}
                weekDay={days.weekDay}
              />
            );
          })}
        </div>

        <div className="c-bottom-text-container">
          <h2>
            As for the content, keep it simple. Do not increase the complixity
            of the content.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
