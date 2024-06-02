// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const urlDB = getFirestore(app, "urls");
const urls = []
const querySnapshot = await getDocs(collection(urlDB, "urls"));
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
  urls.push(doc.data().url)
});
generateGallery(urls)

function generateGallery(imageUrls) {
  const galleryContainer = document.getElementById('galleryContainer');
  let currentRow;

  imageUrls.forEach((url, index) => {
    // Create a new row for every two images
      if (index % 2 === 0) {
          currentRow = document.createElement('div');
          currentRow.classList.add('gallery-row');
          galleryContainer.appendChild(currentRow);
      }

    // Create image elements
      const imgContainer = document.createElement('div');
      imgContainer.classList.add('image-container');
      const img = document.createElement('img');
      img.src = url;
      img.alt = `Image ${index + 1}`;
      img.style.width = '25vw';
      img.style.height = 'auto'

      // Append image to its container
      imgContainer.appendChild(img);

      // Add image container to the current row
      currentRow.appendChild(imgContainer);
  });
}