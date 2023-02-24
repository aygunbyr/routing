import { useFormik } from "formik";
import contactSchema from "./validations";
import "./styles.css";

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
    setErrors, // backend validation'i simule etmek icin
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(false);
      // Bu dogrulamayi backende istek-request gonderip donen sonuca-response gore yapabilirsiniz.
      if (values.email === "turkoaygun@gmail.com") {
        return setErrors({
          email: "Bu mail adresi zaten kullanılıyor.",
          // message: "Lütfen geçersiz karakterler kullanmayınız.",
        });
      }
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <div>
      <h2>İletişim</h2>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="firstName">Name</label>
          <input
            name="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
            placeholder="Name"
            disabled={isSubmitting}
          />
          {errors.firstName && touched.firstName && (
            <div className="error">{errors.firstName}</div>
          )}
          <label htmlFor="lastName">Surname</label>
          <input
            name="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
            placeholder="Surname"
            disabled={isSubmitting}
          />
          {errors.lastName && touched.lastName && (
            <div className="error">{errors.lastName}</div>
          )}
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
          {errors.email && touched.email && (
            <div className="error">{errors.email}</div>
          )}
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
        {errors.message && touched.message && (
          <div className="error">{errors.message}</div>
        )}
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}

export default Contact;
