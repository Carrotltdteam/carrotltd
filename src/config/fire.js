// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD25aFFK69IG19TM_h0wadGbyiJXwy1tPM",
	authDomain: "carrotltd-da799.firebaseapp.com",
	databaseURL: "https://carrotltd-da799-default-rtdb.firebaseio.com",
	projectId: "carrotltd-da799",
	storageBucket: "carrotltd-da799.appspot.com",
	messagingSenderId: "316720372576",
	appId: "1:316720372576:web:dcfded2aaebb297ce39c05",
	measurementId: "G-CD5N32JYHR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
