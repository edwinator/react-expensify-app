import {firebase, googleAuthProvider, facebookAuthProvider} from "../firebase/firebase";

export const login = uid => ({
  type: "LOGIN",
  uid,
});

export const startLoginGoogle = () => () => firebase.auth().signInWithPopup(googleAuthProvider);

export const startLoginFB = () => () => firebase.auth().signInWithPopup(facebookAuthProvider);

export const logout = () => ({
  type: "LOGOUT",
});

export const startLogout = () => () => firebase.auth().signOut();
