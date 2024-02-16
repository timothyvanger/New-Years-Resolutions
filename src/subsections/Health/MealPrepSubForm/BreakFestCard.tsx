import style from "../mealPrepForm.module.css";

const BreakFestCard = ({ setFormData, formData }) => {
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <p>BreakFest</p>
      <label id={style.formLabel}>
        <p>Carbohydrate:</p>
        <input
          type="text"
          id={style.inputText}
          name="breakFest_Carb"
          value={formData.breakFest_Carb}
          onChange={(e) => handleOnChange(e)}
        />
      </label>
      <label id={style.formLabel}>
        <p>Protein:</p>
        <input
          type="text"
          id={style.inputText}
          name="breakFest_Protein"
          value={formData.breakFest_Protein}
          onChange={(e) => handleOnChange(e)}
        />
      </label>
      <label id={style.formLabel}>
        <p>Fruit and Vegies:</p>
        <input
          type="text"
          id={style.inputText}
          name="breakFest_FV"
          value={formData.breakFest_FV}
          onChange={(e) => handleOnChange(e)}
        />
      </label>
    </>
  );
};

export default BreakFestCard;
