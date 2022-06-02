import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAO_wvYTarDWGjk-Uy8oIMYcbA7_lkT8Tk",
  authDomain: "ecomerce-piccino.firebaseapp.com",
  projectId: "ecomerce-piccino",
  storageBucket: "ecomerce-piccino.appspot.com",
  messagingSenderId: "282405355545",
  appId: "1:282405355545:web:bd6dff973a185a228cea88"
};


const app = initializeApp(firebaseConfig);

export default function getFirestoreApp (){
    return app
}