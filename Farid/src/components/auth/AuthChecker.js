import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const AuthChecker = ({ children }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log("User is signed in");
      } else {
        // User is signed out
        console.log("User is signed out");
      }
    });

    return () => unsubscribe();
  }, []);

  return <>{children}</>;
};

export default AuthChecker;
