import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner'
import { feedQuery, searchQuery } from '../utils/data';

const Feed = () => {
    const [loading, setloading] = useState(false);
    const [pins, setpins] = useState(null);

    const { categoryId } = useParams();
    useEffect(() => {
        //set it to true
        setloading(true);
        if (categoryId) {
            const query = searchQuery(categoryId);
            client.fetch(query)
                .then((data) => {
                    setpins(data);
                    setloading(false);
                })
        }
        else {
            client.fetch(feedQuery)
                .then((data) => {
                    setpins(data);
                    setloading(false);
                });
        }
    }, [categoryId]);

    if (loading) return <Spinner message="We are adding new ideas to your feed!" />
    if (!pins?.length) return <h2>No Pins Available of this category!</h2>
    return (
        <div>
            {pins && <MasonryLayout pins={pins}></MasonryLayout>}
        </div>
    );
}

export default Feed;
