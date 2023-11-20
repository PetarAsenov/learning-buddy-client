import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    console.log("hi");
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 2 }} className="mt-5">
        <Form.Group as={Col} md={{ span: 8, offset: 4 }} className="mt-5 mb-5 text-center">
          <h1>Login</h1>
        </Form.Group>

        <Form.Group as={Row} controlId="formBasicEmail">
          <Form.Label column sm="4">Email</Form.Label>
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
          </Form.Label >
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
        <Form.Group as={Col} md={{ span: 8, offset: 4 }} className="mt-5 text-center">
          <Button
            variant="primary"
            type="submit"
            onClick={submitForm}
            style={{ width: 100 }}
          >
            Log in
          </Button>
        </Form.Group>
        <Form.Group as={Col} md={{ span: 8, offset: 4 }} >
        <Link to="/signup" style={{ textAlign: "center" }}>
          Don't have an account yet? Click here to sign up.
        </Link>
        </Form.Group>
      </Form>
    </Container>
  );
}
