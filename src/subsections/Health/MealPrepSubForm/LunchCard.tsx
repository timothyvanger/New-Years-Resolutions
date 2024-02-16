import style from "../mealPrepForm.module.css";

const LunchCard = ({ setFormData, formData }) => {
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <p>Lunch</p>
      <label id={style.formLabel}>
        <p>Carbohydrate:</p>
        <input
          type="text"
          id={style.inputText}
          name="lunch_Carb"
          value={formData.lunch_Carb}
          onChange={(e) => handleOnChange(e)}
        />
      </label>
      <label id={style.formLabel}>
        <p>Protein:</p>
        <input
          type="text"
          id={style.inputText}
          name="lunch_Protein"
          value={formData.lunch_Protein}
          onChange={(e) => handleOnChange(e)}
        />
      </label>
      <label id={style.formLabel}>
        <p>Fruit and Vegies:</p>
        <input
          type="text"
          id={style.inputText}
          name="lunch_VG"
          value={formData.lunch_VG}
          onChange={(e) => handleOnChange(e)}
        />
      </label>
    </>
  );
};

export default LunchCard;
