import React from "react"
import styled from "styled-components"
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik"
import * as Yup from "yup"

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

const FormItem = styled.div`
  // margin-top: 0.25rem;
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

const ContactForm = () => {
  return (
    <ContactFormWrapper>
      <ContactFormHeader>Or you can shoot me a message:</ContactFormHeader>
      <Formik
        initialValues={{ name: "", email: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          email: Yup.string()
            .email("invalid email")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form>
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
