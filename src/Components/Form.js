import React from "react";
import * as Yup from "yup";
import "./styles.css";
import { useFormik } from "formik";
function Form() {
  const formInput = useFormik({
    initialValues: {
      email: "",
      password: "",
      phone: "",
      mess: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a vaild email adress"
        ),
      password: Yup.string().required("Required"),
      phone: Yup.string().required("Required"),
      mess: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert("Add contact successfully!!!");
      // console.log(values);
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
            value={formInput.values.name}
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
            value={formInput.values.name}
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
