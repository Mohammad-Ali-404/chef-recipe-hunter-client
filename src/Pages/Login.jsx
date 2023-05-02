/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
            <div className="hero bg-base-200">
                    <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" name='email' className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" name='password' className="input input-bordered" required/>
                        <label className="label">
                            <p>New To Le Alimento Please <Link to='/register'><button className="btn btn-link">Register</button></Link></p>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                        <h3 className='mx-auto'>Register with another account</h3>
                        <div>
                        <button className="btn btn-outline btn-info btn-block ">Login With Google</button>
                        <h3 className='text-center text-2xl font-semibold'>Or</h3>
                        <button className="btn btn-outline btn-accent  btn-block">Login With Github</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default Login;