import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import { UserContext } from "../context/UserContext";
import { BASE_URL } from "../api";

export default function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);
  
  useEffect(() => {
    fetch(`${BASE_URL}/profile`, {
      mode: "no-cors",
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  function logout() {
    fetch(`${BASE_URL}/logout`, {
      // mode: "no-cors",
      //
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">MyBlog</Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <Link onClick={logout}>Logout ({username})</Link>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
