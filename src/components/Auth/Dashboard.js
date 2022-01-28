import React, { useEffect, useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "./AuthContext"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

export default function Dashboard() {
  const [error, setError] = useState("")
  const [pHistory, setPHistory] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  useEffect(async function(){
      if (currentUser.multiFactor.user.email){
        await axios.get(`https://sushi-back-end.herokuapp.com/api/user/${currentUser.multiFactor.user.email}`)
                        .then( async (res)=> {
                            const id = res.data[0].id
                            console.log(id)
                            await axios.post("https://sushi-back-end.herokuapp.com/api/purchaseHistory",{userId:id})
                            .then((res)=> console.log(res))
                            .catch((err)=> console.log(err))
                        })
                        .then((err)=> console.log(err))
      }
  },[])

  return (
    
      <>
        {currentUser && <div>
          <Card>
            <Card.Body>
              <div className="form">
                <h2 className="text-center mb-4">Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <div><strong>Email:</strong> {currentUser.email}</div>
                <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                  Update Profile
                </Link>
              </div>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </div>}
      </>
  )
}
