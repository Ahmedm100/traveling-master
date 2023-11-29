import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: "panda-travel-8e84d",
  storageBucket: "panda-travel-8e84d.appspot.com",
  messagingSenderId: "600768126161",
  appId: "1:600768126161:web:343cc4641394b3d974b9f0",
  measurementId: "G-TWSYS2MLQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

