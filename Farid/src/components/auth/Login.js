import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/loginStyles.css";


const Login = ({ signIn }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/Register");
  };

  return (
    <div className="sign-page"> 
      <div className="sign">
        <div className="form">
          <div className="content">
            <form>
              <section>
                <div className="inputbox">
                  <h2>SIGN IN</h2>
                  <input
                    placeholder="Email"
                    required="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                  <input
                    placeholder="Password"
                    required="password"
                    type="password"
                    onChange={(e) => setPass(e.target.value)}
                  ></input>
                  <button
                    className="signbutton"
                    type="button"
                    onClick={() => signIn(email, pass)}
                  >
                    Logga In
                  </button>
                  <hr />
                  <button
                    className="signbutton"
                    type="button"
                    onClick={handleSignUpClick}
                  >
                    Skapa nytt konto
                  </button>
                </div>
              </section>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
