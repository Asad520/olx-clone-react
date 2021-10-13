// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBZA9oT1gebvIf6Gk6Ih-SFgP0ceb-SJ0o',
  authDomain: 'olx-clone-react-cdf31.firebaseapp.com',
  projectId: 'olx-clone-react-cdf31',
  storageBucket: 'olx-clone-react-cdf31.appspot.com',
  messagingSenderId: '567707335389',
  appId: '1:567707335389:web:77936e5188ebc6108c7934',
  measurementId: 'G-80P4QBJVBK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = () => getAnalytics(app);

export default analytics;
