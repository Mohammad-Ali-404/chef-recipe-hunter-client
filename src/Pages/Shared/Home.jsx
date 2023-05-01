/* eslint-disable no-unused-vars */
import React from 'react';
import banner1 from '../../../src/image/banner1.jpg'
import banner2 from '../../../src/image/banner2.jpg'
import banner3 from '../../../src/image/banner3.jpg'
import banner4 from '../../../src/image/banner4.jpg'
import ChefCategory from './chefCategory';
const Home = () => {
    return (
        <div className="mt-8">
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner1} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-5xl font-bold">Food Recipe Blog!</h1>
                    <p className="py-6">Cooking, cookery, or culinary arts is the art, science and craft of using heat to improve the palatability, digestibility, nutrition, or safety of food.</p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            <div>
                 <ChefCategory></ChefCategory>
            </div>
        </div>
    );
};

export default Home;