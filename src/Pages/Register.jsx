/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero bg-base-200">
                    <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Your Name" name='name' className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Enter your photo" name='photo' className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" required/>
                            <label className="label">
                                <p>Already have an account Please <Link to='/login'><button className="btn btn-link">Login</button></Link></p>
                            </label>
                        </div>
                        <div className="form-control">
                        <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default Register;