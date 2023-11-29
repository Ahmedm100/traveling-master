import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import Login from "./Login";
import Home from "../../routes/Home";
import Register from "./Register";
import { useState} from "react";


export const handleSignUp = async (email, pass) => {
  try {
    await createUserWithEmailAndPassword(auth, email, pass);
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

export const logOut = async (navigate) => {
  console.log("signing out");
  try {
    await signOut(auth);
    navigate("/Login");
  } catch (err) {
    console.error(err);
  }
};

export const Auth = () => {
  console.log(auth?.currentUser?.email);
  const navigate = useNavigate();
  const currentUser = auth?.currentUser;

  const [isRegistering, setIsRegistering] = useState(false);
  
  const signIn = async (email, pass) => {
    console.log("Attempting to sign in...");
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      console.log("Sign in successful, navigating to /Home");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
     {!currentUser ? (
        isRegistering ? ( 
          <Register
          handleSignUp={(email, pass) => handleSignUp(email, pass)}
          switchToLogin={() => setIsRegistering(false)}
          />
        ) : (
          <Login
          signUp={handleSignUp}
          signIn={signIn}
          switchToRegister={() => setIsRegistering(true)}
          />
        )
      ) : (
        <Home logOut={logOut} />
      )}
    </div>
  );
};

export default Auth;
