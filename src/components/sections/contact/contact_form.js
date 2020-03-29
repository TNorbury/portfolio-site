import React from "react"
import styled from "styled-components"
import { Formik, Form, Field, ErrorMessage } from "formik"
import Recaptcha from "react-google-recaptcha"
import * as Yup from "yup"

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY

const ContactFormWrapper = styled.div`
  width: 40%;

  @media (max-width: 960px) {
    width: 100%;
  }
`

const ContactFormHeader = styled.h3`
  font-size: 20pt;

  @media (max-width: 960px) {
    font-size: 17pt;
  }
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const InputField = styled.div`
  width: 100%;
  box-sizing: border-box;
  // border: 2px solid #6c63ff;
  border: 1px solid;
  padding: 0.8rem 1rem;
  border-radius: 7px;
  margin-bottom: 0.25rem;
  transition: 0.3s;

  // When there is an error, make the border red
  ${({ error }) =>
    error &&
    `
      border-color: #ff4136;
      margin-bottom: 0.15rem;
      border-width: 2px;
    `}

  &::placeholder {
    color: #a7a7a7;
  }
`

const RecaptchaField = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.15rem;
`

const Error = styled.div`
  color: #ff4136;
  margin-bottom: 0.5rem;
`

const SubmitButton = styled.button`
  border: none;
  border-radius: 7px;
  padding: 10px;
  background-color: #88a4cf;
  color: white;

  width: 45%;

  @media (max-width: 960px) {
    width: 100%;
    padding: 12px;
  }
`

// Function for encode data to be send via POST request
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
  return (
    <ContactFormWrapper>
      <ContactFormHeader>Or you can shoot me a message:</ContactFormHeader>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
          recaptcha: ""
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          email: Yup.string()
            .email("invalid email")
            .required("Required"),
          recaptcha: Yup.string()
            .required("You must complete the recaptcha!")
            .nullable(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          // Send a post request to the server so the the form input can be saved
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
              "form-name": "contact-form",
              name: values.name,
              email: values.email,
              message: values.message,

              // also include recaptcha result, so spam/robots will be filtered out
              "g-recaptcha-response": values.recaptcha,
            }),
          })
            .then(() => {
              setSubmitting(false)
              alert("Success")
            })
            .catch(error => {
              alert(error)
            })
        }}
      >
        {({ isSubmitting, touched, errors, setFieldValue }) => (
          <Form action="/" data-netlify="true" data-netlify-recaptcha="true">
            <FormWrapper>
              {/* Name field */}
              <InputField
                as={Field}
                type="text"
                name="name"
                component="input"
                placeholder="Name"
                error={touched.name && errors.name}
              />
              <ErrorMessage name="name" component={Error} />

              {/* Email field */}
              <InputField
                as={Field}
                type="text"
                name="email"
                component="input"
                placeholder="Email"
                error={touched.email && errors.email}
              />
              <ErrorMessage name="email" component={Error} />

              {/* Message field */}
              <InputField
                as={Field}
                type="text"
                name="message"
                component="textarea"
                rows="4"
                placeholder="Message (optional)"
              />

              {/* ReCaptcha field... no robots allowed :( */}
              <RecaptchaField>
                <Field
                  component={Recaptcha}
                  sitekey={RECAPTCHA_KEY}
                  name="recaptcha"
                  onChange={value => setFieldValue("recaptcha", value)}
                />
              </RecaptchaField>
              <ErrorMessage name="recaptcha" component={Error} />

              <SubmitButton type="submit" disabled={isSubmitting}>
                Submit
              </SubmitButton>
            </FormWrapper>
          </Form>
        )}
      </Formik>
    </ContactFormWrapper>
  )
}

export default ContactForm
