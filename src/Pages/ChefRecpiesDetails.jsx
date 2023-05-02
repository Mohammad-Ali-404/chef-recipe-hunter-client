/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const ChefRecpiesDetails = () => {
    const chefrecpies = useLoaderData()

    console.log(chefrecpies)
    const {
        chef_id,
        chef_picture, 
        chef_name, 
        years_of_experience, 
        number_of_recipes, 
        likes,
        short_bio,


        } = chefrecpies;


    return (
        <div>
            <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={chef_picture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-3xl font-bold">{chef_name}</h1>
                    <p className="py-2 font-semibold">Bio: {short_bio}</p>
                    <p className="py-2">Recpies: {number_of_recipes}</p>
                    <p className="py-2">Experience: {years_of_experience}</p>
                    <p className='flex '><BsFillHandThumbsUpFill/>{likes}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ChefRecpiesDetails;