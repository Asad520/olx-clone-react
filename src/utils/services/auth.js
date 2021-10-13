import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';

const socialMediaAuth = async (provider) => {
  const auth = getAuth();
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      return { user, token };
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      return { errorCode, errorMessage, email, credential };
    });
};

const signOutUser = async () => {
  const auth = getAuth();
  return signOut(auth)
    .then((res) => {
      // Sign-out successful.
      console.log('Logout successful');
      return true;
    })
    .catch((error) => {
      // An error happened.
      console.log('Error login out current user: ', error);
      return false;
    });
};

export { socialMediaAuth, signOutUser };
