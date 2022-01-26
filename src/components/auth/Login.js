import { useRef, useState } from "react";
import {Link} from 'react-router-dom';
import { login, logout, useAuth } from "./firebase";

export default function App() {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <div>
    
      <div>Log In</div>

      <form>
        Email:<input ref={emailRef} placeholder="Email" />
        Password:<input ref={passwordRef} type="password" placeholder="Password" />
      </form>

      <button disabled={ loading || currentUser } onClick={handleLogin}>Log In</button>
      <button disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</button>

      <div>Currently logged in as: { currentUser?.email } </div>
      <div>New Customer? <Link to="/signup">Sign Up</Link> </div>

    </div>
  );
}