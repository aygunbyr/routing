import React from "react";
import { Formik, useFormik } from "formik";

function Contact() {
  // Destructure formik object, instead of using const formik = useFormik() then formik.errors, formik.handleSubmit etc.
  const {
    errors,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    isSubmitting,
    touched,
    values,
    resetForm,
  } = useFormik({
    initialValues: { email: "deneme@gmail.com", password: "", message: "" },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        resetForm();
      }, 400);
    },
  });

  return (
    <div>
      <h2>İletişim</h2>

      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Email"
            disabled={isSubmitting}
          />
          {errors.email && touched.email && errors.email}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder="Password"
            disabled={isSubmitting}
          />
          {errors.password && touched.password && errors.password}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            placeholder="Your message..."
            disabled={isSubmitting}
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}

export default Contact;
