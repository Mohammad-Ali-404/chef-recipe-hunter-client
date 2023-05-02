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
        recipes

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
            <div className="card w-96 bg-neutral text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">{recipes[1].recipe_name}</h2>
                    <p>{recipes[1].ingredients.map((item, index) => <li key={index}>{item}</li>)}</p>
                    <p className=''>{recipes[1].cooking_method}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-active">Buy Now</button>
                    </div>
                </div>
            </div>
            </div>
            <div>
            
            </div>
        </div>
    );
};

export default ChefRecpiesDetails;