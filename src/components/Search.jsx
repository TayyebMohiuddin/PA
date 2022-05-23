// import React, { useState, useEffect } from 'react';
// import MasonryLayout from './MasonryLayout';
// import { client } from '../client';
// import { feedQuery, searchQuery } from '../utils/data';
// import Spinner from './Spinner';



// const Search = ({ searchTerm }) => {
//     const [pins, setPins] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (searchTerm) {
//             setLoading(true);
//             const query = searchQuery(searchTerm.toLowerCase());

//             client.fetch(feedQuery)
//                 .then((data) => {
//                     setPins(data.pins);
//                     setLoading(false);
//                 })
//         }
//         else {
//             client.fetch(feedQuery)
//                 .then((data) => {
//                     setPins(data.pins);
//                     setLoading(false);
//                 })
//         }
//     }, [searchTerm]);

//     return (
//         <div>
//             {loading && <Spinner message="Searching for pins..." />}
//             {pins?.length !== 0 && <MasonryLayout pins={pins} />}
//             {pins?.length === 0 && searchTerm !== '' && !loading && (
//                 <div className='mt-10 text-center text-xl'>No Pins Found!</div>
//             )}
//         </div>
//     );
// }

// export default Search;


import React, { useEffect, useState } from 'react';

import MasonryLayout from './MasonryLayout';
import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import Spinner from './Spinner';

const Search = ({ searchTerm }) => {
    const [pins, setPins] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (searchTerm !== '') {
            setLoading(true);
            const query = searchQuery(searchTerm);
            client.fetch(query).then((data) => {
                setPins(data);
                setLoading(false);
            });
        } else {
            client.fetch(feedQuery).then((data) => {
                setPins(data);
                setLoading(false);
            });
        }
    }, [searchTerm]);

    return (
        <div>

            {loading && <Spinner message="Searching pins" />}
            {pins?.length !== 0 && <MasonryLayout pins={pins} />}
            {pins?.length === 0 && searchTerm !== '' && !loading && (
                <div className="mt-10 text-center text-xl ">No Pins Found!</div>
            )}
        </div>
    );
};

export default Search;