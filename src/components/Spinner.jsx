import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
const Spinner = ({ message }) => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <ClipLoader
                type="Circles"
                color="#000BFF"
                height={50}
                width={200}
                className="m-5"
            />
            <p className='text-lg text-center px-2'>{message}</p>
        </div>
    );
}

export default Spinner;
