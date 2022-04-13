import firebase from "./firebase"

import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB5UV4aOG6069Up4FoEXfM08vUeEd2okw8",
	authDomain: "hobby-portfolio.firebaseapp.com",
	projectId: "hobby-portfolio",
	storageBucket: "hobby-portfolio.appspot.com",
	messagingSenderId: "535872294570",
	appId: "1:535872294570:web:ed0b7f88a92233f5f28ad3",
	measurementId: "G-RZ9XZ6N7L7",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

firebase.initializeApp(firebaseConfig)

export default firebase
