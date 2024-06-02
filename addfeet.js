

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {getStorage, ref, uploadBytes, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import { getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"
const firebaseConfig = {
  apiKey: "AIzaSyCAHgFtKUGSvwjgS8GQpp2GhF5BTausjAI",
  authDomain: "cffc-304d4.firebaseapp.com",
  projectId: "cffc-304d4",
  storageBucket: "cffc-304d4.appspot.com",
  messagingSenderId: "198287637216",
  appId: "1:198287637216:web:505ced317fd7f29260ae85"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const imageDB = getStorage(app);
const urlDB = getFirestore(app, "urls");

const saveImage = () => {
  
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];
  if (file) {
    const storageRef = ref(imageDB, file.name);
    
    uploadBytes(storageRef, file)
    .then((snapshot) => {
      console.log('Uploaded a file!', snapshot);
      return getDownloadURL(storageRef); // Return the promise chain
    })
    .then((imageURL) => {
      console.log("URL getting successful. URL:", imageURL);
      const docRef = addDoc(collection(urlDB, "urls"), { url: imageURL });
      console.log(docRef)
      return docRef
    })
    .then((docRef) => {
      console.log("URL written with ID: ", docRef.id);
      alert(`We got your foot pic! Thanks. It will never be erased from the internet.`);
      window.location.href = "index.html"; 
    })
    .catch((error) => {
      console.error('Error uploading or saving file:', error);
      alert('Error uploading file. Please try again.');
    });
  } else {
    alert("You forgot to upload an image.")
  }
}

document.getElementById("submit").onclick = saveImage;
