import style from "./healthSection.module.css";
import TaskSchedule from "../../featuers/context/SubSchedules/TaskSchedule";
import { workoutSchedule } from "../../data/subScheduleData/Fitness/workoutSchedule";
import MealPrepForm from "./MealPrepForm";
import useModal from "../../featuers/hooks/useModal";
import { useState } from "react";
import { useLocalStorage } from "../../featuers/hooks/useLocalStorage";

type DisplayData = {
  breakFest_Carb: string;
  breakFest_Protein: string;
  breakFest_VG: string;
  lunch_Carb: string;
  lunch_Protein: string;
  lunch_VG: string;
  dinner_Carb: string;
  dinner_Protein: string;
  dinner_VG: string;
};

const HealthSection = () => {
  const { isOpen, openModal, createModal, closeModal } = useModal();
  const [displayData, setDisplayData] = useLocalStorage({}, "MEALDATA");

  const isEmptyObject = (obj: object): boolean => {
    return Object.keys(obj).length === 0;
  };
  const mealCards = () => {
    if (isEmptyObject(displayData)) return;

    return (
      <div className={style.leftContainer}>
        <div className={style.breakfestCard}>
          <h2>Breakfest</h2>
          <div className={style.textContainer}>
            <h2>Carbs:</h2>
            <p>{displayData.breakFest_Carb}</p>
          </div>
          <div className={style.textContainer}>
            <h2>Protein:</h2>
            <p>{displayData.breakFest_Protein}</p>
          </div>
          <div className={style.textContainer}>
            <h2>Veggies and Fruits:</h2>
            <p>{displayData.breakFest_VG}</p>
          </div>
        </div>
        <div className={style.lunchCard}>
          <h2>Lunch</h2>
          <div className={style.textContainer}>
            <h2>Carbs:</h2>
            <p>{displayData.lunch_Carb}</p>
          </div>
          <div className={style.textContainer}>
            <h2>Protein:</h2>
            <p>{displayData.lunch_Protein}</p>
          </div>
          <div className={style.textContainer}>
            <h2>Veggies and Fruits:</h2>
            <p>{displayData.lunch_VG}</p>
          </div>
        </div>
        <div className={style.dinnerCard}>
          <h2>Dinner</h2>
          <div className={style.textContainer}>
            <h2>Carbs:</h2>
            <p>{displayData.dinner_Carb}</p>
          </div>
          <div className={style.textContainer}>
            <h2>Protein:</h2>
            <p>{displayData.dinner_Protein}</p>
          </div>
          <div className={style.textContainer}>
            <h2>Veggies and Fruits:</h2>
            <p>{displayData.dinner_VG}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {isOpen && createModal()}
      <section id={style.healthSection}>
        <div className={style.topContainer} id="healthSection">
          <h2>You are a Healthy and Fit person!</h2>
        </div>

        <div className={style.health}>
          <h3 className={style.hThree}>A Healthy Person:</h3>
          <p>
            I know you have not been diligent with your health as of late, but
            you are in the constant position to change that. You are able to
            change your fiet, phsique, and health, but, just like everything on
            this resolution, you have to make an effort. You have to stay
            consistent and try.
          </p>
          <ul>
            <li>Makes an effort in what they are eating</li>
            <li>Eat food that promotes their health</li>
            <li>Research on their health</li>
            <li>Just eat healthier</li>
            <li>Drink WATER!</li>
          </ul>
          <p>
            There is nothing you really need to do, but watch what you eat. Just
            track your calories and weight
          </p>
          {isEmptyObject(displayData) && (
            <div>There is no data for a meal plan</div>
          )}
          <div className={style.mealPrepContainer}>
            {!isEmptyObject(displayData) ? (
              mealCards()
            ) : (
              <button
                style={{ cursor: "pointer" }}
                onClick={() =>
                  openModal(
                    <MealPrepForm
                      closeModal={closeModal}
                      setDisplayData={setDisplayData}
                    />
                  )
                }
              >
                Create this weeks meal prep
              </button>
            )}
          </div>
        </div>
        <div className={style.fit}>
          <h3 className={style.hThree}>A Fit Person:</h3>
          <div className={style.contentContainer}>
            <p>
              To be a fit person, it will require more work and longivity. You
              will have to put in the work like every other fit person. Stay
              commited and don't waver.
            </p>
            <ul>
              <li>Have a consistent schedule of their exercise</li>
              <li>
                Stay to their routine and pushes through even when that shit
                hurts
              </li>
              <li>
                Do resistant/weight workouts along with cardio to balance the
                whole body
              </li>
              <li>DRINK WATER!!!!!</li>
              <br />
              <div className={style.healthSchedule}>
                {workoutSchedule.map((day, index) => {
                  return <TaskSchedule key={index} {...day} />;
                })}
              </div>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthSection;
