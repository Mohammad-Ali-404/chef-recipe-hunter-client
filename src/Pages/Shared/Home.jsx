/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import banner1 from '../../../src/image/banner1.jpg'
import banner2 from '../../../src/image/banner2.jpg'
import banner3 from '../../../src/image/banner3.jpg'
import banner4 from '../../../src/image/banner4.jpg'
import ChefCategory from './chefCategory';
import Footer from './Footer';
import { AuthContext } from '../../providers/AuthProvider';
const Home = () => {
    return (
        <div className="mt-8">
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                        <div className="carousel-item">
                            <img src={banner1} className="rounded-box" />
                        </div> 
                        <div className="carousel-item">
                            <img src={banner2} className="rounded-box" />
                        </div> 
                        <div className="carousel-item">
                            <img src={banner3} className="rounded-box" />
                        </div> 
                        <div className="carousel-item">
                            <img src={banner4} className="rounded-box" />
                        </div> 
                        </div>
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
            <Footer></Footer>
        </div>
    );
};

export default Home;