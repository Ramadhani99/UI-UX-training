//src / Components / StudentForm.js
import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  FormGroup,
  // eslint-disable-next-line
  FormControl,
  Button,
} from "react-bootstrap";

const StudentForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string()
      .email(`You have enter an invalid email address`)
      .required("Required"),
    rollno: Yup.number()
      .positive("Invalid roll number")
      .integer("Invalid roll number")
      .required("Required"),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <label className="form-label">Name</label>
            <Field
              name="name"
              placeholder="Enter Student Name"
              type="text"
              className="form-control mt-2 mb-2"
            />
            <ErrorMessage
              name="name"
              className="d-block 
                                invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <label className="form-label">Email</label>
            <Field
              name="email"
              placeholder="Enter Email"
              type="text"
              className="form-control mt-2 mb-2"
            />
            <ErrorMessage
              name="email"
              className="d-block 
                                invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <label className="form-label">Enrollment Number</label>
            <Field
              name="rollno"
              placeholder="Enter Enrollment Number"
              type="number"
              className="form-control mt-2 mb-2"
            />
            <ErrorMessage
              name="rollno"
              className="d-block 
                                invalid-feedback"
              component="span"
            />
          </FormGroup>
          <Button
            className="mt-2 float-end"
            variant="success"
            size="lg"
            block="block"
            type="submit"
          >
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default StudentForm;
