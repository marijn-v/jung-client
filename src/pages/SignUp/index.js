import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "@mui/material/Button";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isProfessional, setIsProfessional] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  // console.log("check", isProfessional);

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(name, email, password, isProfessional));

    setEmail("");
    setPassword("");
    setName("");
    setIsProfessional(false);
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">SIGN UP</h1>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={isProfessional}
              id="flexCheckDefault"
              onChange={() => setIsProfessional(!isProfessional)}
            ></input>
            <label className="form-check-label" for="flexCheckDefault">
              Are you an artist and/or promoter? Please check the box.
            </label>
          </div>
        </Form.Group>
        <Form.Group className="mt-5">
          <Button
            component={Link}
            to="/signup"
            variant="contained"
            sx={{
              bgcolor: "#ff3d00",
              ":hover": { bgcolor: "#ff3d00", color: "white" },
              borderRadius: 0,
            }}
            disableripple
            type="submit"
            onClick={submitForm}
          >
            Sign up
          </Button>
        </Form.Group>
        <Button
          component={Link}
          to="/login"
          sx={{
            color: "#ff3d00",
            ":hover": { color: "#ff3d00", bgcolor: "transparent" },
            textDecoration: "none",
          }}
          disableripple
        >
          log in
        </Button>
      </Form>
    </Container>
  );
}
