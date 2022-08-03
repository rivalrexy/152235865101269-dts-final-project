import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY_FIREBASE,
  //apiKey: "AIzaSyDv7H7Q3CCo8FLTOmxFjaP8Dom9cX9bSNM",
  authDomain: "rival-dts-final-project.firebaseapp.com",
  projectId: "rival-dts-final-project",
  storageBucket: "rival-dts-final-project.appspot.com",
  messagingSenderId: "347274938461",
  appId: "1:347274938461:web:19d5081448113701e5e5b4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const registerFB = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    //console.log(getRegister.user);
  } catch (err) {
    //console.log(err);
    return Promise.reject(err);
  }
};
const loginFB = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    //console.log(getLogin);
  } catch (err) {
    //console.log(err.message);
    return Promise.reject(err);
  }
};

const loginGoogleFB = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (err) {
    console.log(err.message);
  }
};

const resetPasswordFB = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    console.log(err.message);
  }
};
const logoutFB = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    //return Promise.reject(err);
    //console.log(err);
  }
};

export { auth, loginGoogleFB, registerFB, loginFB, resetPasswordFB, logoutFB };
