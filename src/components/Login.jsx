import React from 'react';
// import GoogleLogin from 'react-google-login';
import { useNavigate, useLocation } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import picarena from '../assets/picarena.jpg';
import Firebase from '../Firebase';
import { initializeApp } from "firebase/app";
import { navigate } from "@reach/router"

import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { client } from '../client';
import Feed from './Feed';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgYTWY4owYe4ehk5E9u6ML-iwQUoHFmbk",
    authDomain: "my-application-4c14c.firebaseapp.com",
    projectId: "my-application-4c14c",
    storageBucket: "my-application-4c14c.appspot.com",
    messagingSenderId: "80074207922",
    appId: "1:80074207922:web:c11da5f34c2db785628fab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const signInWithGoogle = async () => {
    try {
        const response = await signInWithPopup(auth, provider);

        localStorage.setItem('user', JSON.stringify(response.user));

        console.log(response.user);
        const name = response.user.displayName;
        const id = response.user.providerData[0].uid;
        const imageUrl = response.user.photoURL;


        // console.log(id);
        const doc = {
            _id: id,
            _type: 'user',
            userName: name,
            image: imageUrl,
        }
        console.log(doc);
        client.createIfNotExists(doc).then(() => {
            navigate('/', { replace: true });
        });

    }




    catch (error) {
        console.error(error);
    }


}




const Login = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const submitButtonHandler = async () => {
        await signInWithGoogle();
        // navigate("/");

    }

    return (
        <div className="flex justify-start items-center flex-col h-screen">
            <div className=" relative w-full h-full">
                <video
                    src={shareVideo}
                    type="video/mp4"
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className="w-full h-full object-cover"
                />

                <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    ">
                    <div className="p-5">
                        <img src={picarena} width="130px" className='rounded-full' />
                    </div>

                    <div className="shadow-2xl">
                        {/* <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                            render={(renderProps) => ( */}
                        <button
                            type="button"
                            className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                            onClick={submitButtonHandler}
                        // {renderProps.onClick}
                        // disabled={renderProps.disabled}
                        >
                            <FcGoogle className="mr-4" /> Sign in with google
                        </button>
                        {/* //  )} */}

                        {/* ///> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

















/*
 */