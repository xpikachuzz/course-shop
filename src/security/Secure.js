/*App.js*/

import { useState, useEffect } from "react";
import {
  googleLogout,
  useGoogleLogin,
} from "@react-oauth/google";
import axios from "axios";
import "./Secure.css";
import { useDispatch } from "react-redux";
import { email as setEmail } from '../store/loginSlice'

function Secure() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null)
  const dispatch = useDispatch()
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => { setUser(codeResponse); },
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }


  }, [user]);

  useEffect(() => {
    dispatch(setEmail(profile ? profile.email : false))
  }, [profile])

  // log out function to log the user out of google and set the profile array to null
  const logOut = (e) => {
    googleLogout();
    setProfile(null);
    dispatch(setEmail(false))
  };



  return (
    <div className="section-login mb-4">
      {profile ? (
        <div>
          <p><b>LOGGED IN:</b></p>
          <img src={profile.picture} alt="user_image" />
          <p><b>Name:</b> {profile.name}</p>
          <p><b>Email Address:</b> {profile.email}</p>
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button className="signin" onClick={(e) => { login() }} >Sign in with Google</button>
      )}
    </div>
  );
}

export default Secure;
