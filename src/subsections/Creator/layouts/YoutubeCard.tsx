type YoutubeCardProps = {
  title: string;
  profilePic: string;
  subCount: number;
  videoCount: number;
  setToggle: () => boolean;
};

const YoutubeCard = ({
  title,
  profilePic,
  subCount,
  videoCount,
  setToggle,
}: YoutubeCardProps) => {
  return (
    <div className="YoutubeCard">
      <img src={profilePic} />
      <h2>{title}</h2>
      <div>
        <p>
          <span style={{ color: "#211629", fontWeight: "bold" }}>
            Subscriber Count:
          </span>{" "}
          {subCount}
        </p>
        <p>
          <span style={{ color: "#211629", fontWeight: "bold" }}>
            Total Videos Uploaded:
          </span>{" "}
          {videoCount}
        </p>
      </div>
      <button onClick={() => setToggle((prev) => !prev)}>Refresh</button>
    </div>
  );
};

export default YoutubeCard;
