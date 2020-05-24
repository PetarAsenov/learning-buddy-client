import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(name, email, password, role));

    setEmail("");
    setPassword("");
    setName("");
    setRole("");
  }

  function onCheck(event) {
    console.log('onCheck: ', event); // always called
  }
 
  const label = (
    <span>I have read and agree with the&nbsp;
      <Link to="/login">Terms and Conditions</Link>
    </span>
  )

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 2 }} className="mt-5">
        <Form.Group
          as={Col}
          md={{ span: 8, offset: 4 }}
          className="mt-5 mb-5 text-center"
        >
          <h1>Sign up</h1>
        </Form.Group>
        <Form.Group as={Row} controlId="formBasicName">
          <Form.Label column sm="4">
            Name
          </Form.Label>
          <Col sm="8">
            <Form.Control
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Jane Doe"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formBasicEmail">
          <Form.Label column sm="4">
            Email
          </Form.Label>
          <Col sm="8">
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="jane@doe.com"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formBasicPassword">
          <Form.Label column sm="4">
            Password
          </Form.Label>
          <Col sm="8">
            <Form.Control
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="exampleForm.SelectCustomSizeSm">
          <Form.Label column sm="4">
            Select your role
          </Form.Label>
          <Col sm="8">
            <Form.Control
              as="select"
              size="sm"
              value={role}
              onChange={(event) => setRole(event.target.value)}
            >
              <option disabled></option>
              <option>teacher</option>
              <option>student</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group
          as={Col}
          md={{ span: 8, offset: 4 }}
          controlId="formBasicCheckbox"
        >
          <Form.Check type="checkbox" label={label} />
        </Form.Group>
        <Form.Group
          as={Col}
          md={{ span: 8, offset: 4 }}
          className="mt-5 text-center"
        >
          <Button variant="primary" type="submit" onClick={submitForm}>
            Sign up
          </Button>
        </Form.Group>
        <Form.Group as={Col} md={{ span: 8, offset: 4 }}>
          <Link to="/login">Click here to log in</Link>
        </Form.Group>
      </Form>
    </Container>
  );
}
