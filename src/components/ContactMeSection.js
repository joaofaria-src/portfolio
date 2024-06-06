import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faMedium, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import "./ContactMeSection.css";

const socials = [
  { icon: faGithub, url: "https://github.com/joaofaria-src" },
  { icon: faLinkedin, url: "https://www.linkedin.com/in/joaofariawork/" },
];

const ContactMeSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      comment: Yup.string().min(25, "Must be at least 25 characters").required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      setIsSubmitting(true);
      setAlertMessage(null);

      emailjs.send("service_znklakf", "template_7dmjqhf", {
        from_name: values.firstName,
        from_email: values.email,
        message: values.comment,
      }, "QRPbCGmJYeCNtRile")
      .then((response) => {
        setAlertMessage({ type: "success", text: "Message sent successfully!" });
        resetForm();
      })
      .catch((error) => {
        setAlertMessage({ type: "error", text: "Failed to send message. Please try again later." });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    },
  });

  return (
    <section className="contactme-section" id="contactme-section">
      <h1>Contact Me</h1>
      <p>Feel free to reach out if you want to collaborate on a project or just say hi!</p>
      <div className="form-container">
        {alertMessage && (
          <div className={`alert ${alertMessage.type}`}>
            {alertMessage.text}
          </div>
        )}
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              {...formik.getFieldProps("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="error">{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" {...formik.getFieldProps("email")} />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="comment">Your Message</label>
            <textarea id="comment" name="comment" rows="6" {...formik.getFieldProps("comment")} />
            {formik.touched.comment && formik.errors.comment ? (
              <div className="error">{formik.errors.comment}</div>
            ) : null}
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
      <div className="social-links">
        {socials.map((social, index) => (
          <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={social.icon} size="2x" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactMeSection;
