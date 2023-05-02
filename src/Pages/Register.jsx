/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
    const {createUser, updateProfile} = useContext(AuthContext)

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password)
        createUser(email, password)
            .then(result =>{
                const createdUser = result.user;
                console.log(createdUser)
            })
            .catch(error => {
                console.log(error)
            })
       }
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister}>
                <div  className="card-body">
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
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
                    <label className="label">
                    <p>Already have an account Please <Link to='/login'><button className="btn btn-link">Login</button></Link></p>
                    </label>
                </div>
                <div className="form-control">
                  <button className="btn btn-primary" type='submit'>Register</button>
                </div>
            </div>
                </form>

            </div>
            </div>
            </div>
    );
};

export default Register;