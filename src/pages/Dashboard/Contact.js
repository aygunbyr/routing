import React from "react";
import { Formik, useFormik } from "formik";

function Contact() {
  // Destructure formik object, instead of using const formik = useFormik() then formik.errors, formik.handleSubmit etc.
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    touched,
    values,
  } = useFormik({
    initialValues: { email: "", password: "", message: "" },
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
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
