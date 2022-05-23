// import React from "react";
// //import { useNavigate } from 'react-router';
// import { initializeApp } from "firebase/app";

// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { client } from "./client";
// import Home from "./container/Home";


// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAgYTWY4owYe4ehk5E9u6ML-iwQUoHFmbk",
//     authDomain: "my-application-4c14c.firebaseapp.com",
//     projectId: "my-application-4c14c",
//     storageBucket: "my-application-4c14c.appspot.com",
//     messagingSenderId: "80074207922",
//     appId: "1:80074207922:web:c11da5f34c2db785628fab"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// const Firebase = (() => {
//     // const navigate = useNavigate();
//     signInWithPopup(auth, provider).then((response) => {

//         localStorage.setItem('user', JSON.stringify(response.user));

//         // if (response?.user) return <Home />


//         const name = response.user.displayName;
//         const googleId = response.user.providerId;
//         const imageUrl = response.user.photoURL;
//         // const { name, googleId, imageUrl } = response.user;

//         console.log(name);
//         const doc = {
//             _id: googleId,
//             _type: 'user',
//             userName: name,
//             image: imageUrl,
//         };
//         // client.createIfNotExists(doc).then(() => {
//         //     navigate('/', { replace: true });
//         // }
//         // );

//         console.log(response.user);

//     }).catch((error) => {
//         console.log(error);
//     }
//     )


// }
// )

// export default Firebase;