import style from "../mealPrepForm.module.css";
const DinnerCard = ({ setFormData, formData }) => {
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <p>Dinner</p>
      <label id={style.formLabel}>
        <p>Carbohydrate:</p>
        <input
          type="text"
          id={style.inputText}
          name="dinner_Carb"
          value={formData.dinner_Carb}
          onChange={(e) => handleOnChange(e)}
        />
      </label>
      <label id={style.formLabel}>
        <p>Protein:</p>
        <input
          type="text"
          id={style.inputText}
          name="dinner_Protein"
          value={formData.dinner_Protein}
          onChange={(e) => handleOnChange(e)}
        />
      </label>
      <label id={style.formLabel}>
        <p>Fruit and Vegies:</p>
        <input
          type="text"
          id={style.inputText}
          name="dinner_VG"
          value={formData.dinner_VG}
          onChange={(e) => handleOnChange(e)}
        />
      </label>
    </>
  );
};

export default DinnerCard;
