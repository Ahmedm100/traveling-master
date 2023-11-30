import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSignUp as authHandler } from "./Auth";
import "../Styles/loginStyles.css";
import Navbar from "../Navbar";
const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const emailReg = /^\S+@\S+\.\S+$/;

  const signUp = async (email, pass) => {
    if (!emailReg.test(email) || pass.trim() === "") {
      setError("Invalid email or password is required ");
      console.log("Invalid email or password");
      return;
    }

    try {
      await authHandler(email, pass);
      navigate("/");
      console.log("Registration successful");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError(
          "Email is already in use. Please try with a different email !"
        );
      } else {
        setError(error.message);
        console.error("Error during registration:", error);
      }
    }
  };
  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <>
    <Navbar />
    <div className="sign-page">
      <div className="sign">
        <div className="form">
          <div className="content">
            <form>
              <section>
                <div className="inputbox">
                  <h2>Register</h2>
                  <input
                    placeholder="Email"
                    type="email"
                    required="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <input
                    placeholder="Password"
                    required="Password"
                    type="password"
                    onChange={(e) => setPass(e.target.value)}
                  />

                  <button
                    className="signbutton"
                    type="button"
                    onClick={() => {
                      signUp(email, pass);
                    }}
                  >
                    Skapa nytt konto
                  </button>
                  <hr></hr>
                  <p
                    style={{
                      color: "#ffffff",
                      textAlign: "center",
                    }}
                  >
                    {error && <span style={{ color: "red" }}>{error}</span>}
                    <br></br>
                    Already have an account?
                    <span
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                      onClick={navigateToLogin}
                    >
                      {" "}
                      Login
                    </span>
                  </p>
                </div>
              </section>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Register;
