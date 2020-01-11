import React, { useState } from "react";
import axios from "axios";
import { Col, Button, Form, Alert } from "react-bootstrap";

export default function FinalForm() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);

  const NameInput = e => {
    setName(e.target.value);
  };

  const EmailInput = e => {
    setEmail(e.target.value);
  };
  const MessageInput = e => {
    setMessage(e.target.value);
  };

  const data = { name, email, message };
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      setLoading(<i className="fa fa-spinner fa-spin loadingIcon" />);

      axios
        .post(
          "https://projects.rintuweb.com/Scrolling-React-App/contact.php ",
          data
        )
        .then(function(response) {
          console.log(response);
          setName("");
          setEmail("");
          setMessage("");
          setLoading("");
          setSuccessMsg(true);
          setValidated(false);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };
  return (
    <>
      {successMsg ? (
        <Alert
          variant="success"
          onClose={() => setSuccessMsg(false)}
          dismissible
        >
          <p className="mb-0">
            Contact form successfully submitted. Thank you, We will get back to
            you soon!
          </p>
        </Alert>
      ) : null}
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        method="POST"
      >
        <Form.Row>
          <Form.Group as={Col} sm="12">
            <Form.Control
              required
              type="text"
              placeholder="First name"
              value={name}
              name="name"
              onChange={NameInput}
            />
            <Form.Control.Feedback type="invalid">
              Name Required
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} sm="12">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              required
              value={email}
              onChange={EmailInput}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} sm="12">
            <Form.Control
              as="textarea"
              value={message}
              name="message"
              onChange={MessageInput}
              rows="3"
            />
          </Form.Group>
        </Form.Row>

        <Button
          type="submit"
          variant="link"
          className="submitBtn text-decoration-none"
        >
          Send <i className="fa fa-send"></i>
        </Button>
        {loading}
      </Form>
    </>
  );
}
