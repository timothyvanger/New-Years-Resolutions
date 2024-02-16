import { useEffect, useState } from "react";
import { ReactNode } from "react";
import style from "./mealPrepForm.module.css";
import BreakFestCard from "./MealPrepSubForm/BreakFestCard";
import DinnerCard from "./MealPrepSubForm/DinnerCard";
import LunchCard from "./MealPrepSubForm/LunchCard";
import SubmitCard from "./MealPrepSubForm/SubmitCard";

//add modal that pops up this form. pop up should be a form that shows individual cards for each meal time. can clikc next ofback to complete the form.
//display should be three cards showing the input information. shows the date of each sunday to provide when the meal prep starts
type MealPrepFormProps = {
  closeModal: () => void;
};

const MealPrepForm = ({ closeModal, setDisplayData }) => {
  const [formData, setFormData] = useState({});
  const [index, setIndex] = useState(0);
  const [displayCard, setCard] = useState<ReactNode>();

  useEffect(() => {
    switch (index) {
      case 0:
        setCard(
          <BreakFestCard setFormData={setFormData} formData={formData} />
        );
        break;
      case 1:
        setCard(<LunchCard setFormData={setFormData} formData={formData} />);
        break;
      case 2:
        setCard(<DinnerCard setFormData={setFormData} formData={formData} />);
        break;
      case 3:
        setCard(<SubmitCard />);
        break;
      default:
        throw new Error("Index has gone to far");
    }
  }, [index]);

  const moveFoward = () => {
    if (index > 2) return;
    console.log(index);
    setIndex((prev) => prev + 1);
  };

  const moveBack = () => {
    if (index < 1) return;
    setIndex((prev) => prev - 1);
  };

  const returnProgressColor = (indexColor: number) => {
    if (indexColor === index) {
      return "#e3b23c";
    } else return "#2b2131";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayData(formData);
    closeModal();
  };
  return (
    <>
      <div className="modalContainer">
        <form onSubmit={handleSubmit}>
          <div className={style.formContainer}>
            <div className={style.cardContainer}>{displayCard}</div>
            <div className={style.progressIndicator}>
              <div
                className={style.progressIcon}
                style={{ backgroundColor: returnProgressColor(0) }}
              >
                o
              </div>
              <div
                className={style.progressIcon}
                style={{ backgroundColor: returnProgressColor(1) }}
              >
                o
              </div>
              <div
                className={style.progressIcon}
                style={{ backgroundColor: returnProgressColor(2) }}
              >
                o
              </div>
              <div
                className={style.progressIcon}
                style={{ backgroundColor: returnProgressColor(3) }}
              >
                o
              </div>
            </div>
            <div className={style.buttonContainer}>
              <button onClick={() => moveBack()} type="button">
                Back
              </button>
              <button onClick={() => closeModal()} type="button">
                Cancel
              </button>
              <button onClick={() => moveFoward()} type="button">
                Foward
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default MealPrepForm;
