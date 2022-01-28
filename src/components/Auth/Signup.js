import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "./AuthContext"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()
  const [length, setLength] = useState(0)

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    } else if (passwordRef.current.value.length<6){
      return setError("Password must be length 6")
    }

    try {
      const email = emailRef.current.value
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      setError("Hey")

      await axios.post("https://sushi-back-end.herokuapp.com/api/user", {email:email})
        .then(function (response) {
            console.log(response)
      })
      .catch(function (err) {
                  console.log(err);
      });
    } catch (err){
      console.log(err)
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {(error !== "Hey"&&error )&& <Alert variant="danger">{error}</Alert>}
          {error === "Hey" && <Alert variant='success'>Successful Sign up</Alert>}
          <Form className='form' onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password" style={{paddingTop:20}}>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm" style={{paddingTop:20}}>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <div style={{paddingTop:30}}>
              <Button disabled={loading} className="w-100" type="submit">
                Sign Up
              </Button>
            </div>
            
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}
