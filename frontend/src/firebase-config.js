import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqu_kkhljc2fYAejmeSTpnD2EAZT5ZWx8",
  authDomain: "digital-ocean-68ceb.firebaseapp.com",
  projectId: "digital-ocean-68ceb",
  storageBucket: "digital-ocean-68ceb.appspot.com",
  messagingSenderId: "642448489396",
  appId: "1:642448489396:web:415d688704fb1aa4b350e1",
  measurementId: "G-MW64EPGR2F",
};
const app = initializeApp(firebaseConfig);

const firebase_auth = getAuth(app);
export default firebase_auth;
