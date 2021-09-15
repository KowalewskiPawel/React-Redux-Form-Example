import React from "react";
import { connect } from "react-redux";
import { Field, formValueSelector, reduxForm } from "redux-form";

import durationNormalizer from "../utils/durationNormalizer";
import numbersNormalizer from "../utils/numbersNormalizer";

let DishForm = (props) => {
  const { handleSubmit, dishType } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Dish Name</label>
        <Field name='name' component='input' type='text' required />
      </div>
      <div>
        <label htmlFor='preparation_time'>Preparation Time (hh:mm:ss)</label>
        <Field
          name='preparation_time'
          component='input'
          type='text'
          normalize={durationNormalizer}
          required
        />
      </div>
      <div>
        <label htmlFor='type'>Type</label>
        <Field name='type' component='select' required>
          <option value=''>Please choose the type</option>
          <option value='pizza'>Pizza</option>
          <option value='soup'>Soup</option>
          <option value='sandwich'>Sandwich</option>
        </Field>
      </div>
      {dishType === "pizza" && (
        <div>
          <label htmlFor='no_of_slices'>Number of Slices: </label>
          <Field
            name='no_of_slices'
            component='input'
            type='text'
            normalize={numbersNormalizer}
            required
          />
          <label htmlFor='Diameter'>Diameter: </label>
          <Field
            name='diameter'
            component='input'
            type='text'
            normalize={(value) => numbersNormalizer(value, "diameter")}
            required
          />
        </div>
      )}
      {dishType === "soup" && (
        <div>
          <label htmlFor='spiciness_scale'>Spiciness scale(1-10): </label>
          <Field
            name='spiciness_scale'
            component='input'
            type='text'
            normalize={(value) => numbersNormalizer(value, "spiciness")}
            required
          />
        </div>
      )}
      {dishType === "sandwich" && (
        <div>
          <label htmlFor='slices_of_bread'>
            Number of Bread Slices Required:{" "}
          </label>
          <Field
            name='slices_of_bread'
            component='input'
            type='text'
            normalize={numbersNormalizer}
            required
          />
        </div>
      )}
      <button type='submit'>Submit</button>
    </form>
  );
};

DishForm = reduxForm({
  form: "dish",
  initialValues: { preparation_time: "00:00:00" },
})(DishForm);

const selector = formValueSelector("dish");

DishForm = connect((state) => {
  const dishType = selector(state, "type");
  return {
    dishType,
  };
})(DishForm);

export default DishForm;
