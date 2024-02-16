import style from "./animation.module.css";

const Animation = () => {
  return (
    <>
      <section id={style.animationSection}>
        <div className={style.topContainer} id="animationSection">
          <h2>Animation</h2>
        </div>
        <div className={style.contentContainer}>
          <h3 className={style.hThree}>Animation Schedule</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            delectus libero sed perferendis suscipit architecto ea fuga magni
            temporibus voluptatibus eos, odio quasi molestiae accusamus maxime
            tenetur sunt fugit. Iste?
          </p>
        </div>
        <div className={style.bottomContainer}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            reprehenderit similique harum! Maiores, cum? Aliquam porro quos,
            obcaecati quibusdam, fuga ipsum reiciendis totam eos facilis
            voluptatem id fugit cum error.
          </p>
        </div>
      </section>
    </>
  );
};

export default Animation;
