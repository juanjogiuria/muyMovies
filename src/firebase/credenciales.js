
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCS1hzNv4oVSpB4idS4p8Ttz0qVKxcddxk",
  authDomain: "muymovie-1994.firebaseapp.com",
  projectId: "muymovie-1994",
  storageBucket: "muymovie-1994.appspot.com",
  messagingSenderId: "478677367486",
  appId: "1:478677367486:web:f4cf22ff521f067523bcef"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export default firebaseApp;

