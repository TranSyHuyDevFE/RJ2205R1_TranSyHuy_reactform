import React from "react";
import * as Yup from "yup";
import "./styles.css";
import { useFormik } from "formik";
function Form() {
  const REGEX_EMAIL = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const EMAIL_VALID = "Please enter a vaild email adress";
  const REQUIRED = "Required";
  const formInput = useFormik({
    initialValues: {
      email: "",
      password: "",
      phone: "",
      mess: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required(REQUIRED).matches(REGEX_EMAIL, EMAIL_VALID),
      password: Yup.string().required(REQUIRED),
      phone: Yup.string().required(REQUIRED),
      mess: Yup.string().required(REQUIRED),
    }),
    onSubmit: (values, { resetForm }) => {
      alert("Add contact successfully!!!");
      resetForm({ values: "" });
      console.log(values);
    },
  });

  return (
    <div className="container" onSubmit={formInput.handleSubmit}>
      <form action="/action_page.php">
        <div className="form-group">
          <label>Email address:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formInput.values.email}
            onChange={formInput.handleChange}
          />
          {formInput.errors.email && (
            <label className="error">{formInput.errors.email}</label>
          )}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formInput.values.password}
            onChange={formInput.handleChange}
          />
          {formInput.errors.password && (
            <label className="error">{formInput.errors.password}</label>
          )}
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={formInput.values.phone}
            onChange={formInput.handleChange}
          />
          {formInput.errors.phone && (
            <label className="error">{formInput.errors.phone}</label>
          )}
        </div>
        <div className="form-group">
          <label>Messages:</label>
          <input
            type="text"
            name="mess"
            className="form-control"
            value={formInput.values.mess}
            onChange={formInput.handleChange}
          />
          {formInput.errors.mess && (
            <label className="error">{formInput.errors.mess}</label>
          )}
        </div>
        <br />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
