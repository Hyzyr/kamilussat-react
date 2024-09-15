import React, { useState } from 'react';
import Input from 'components/Input';
import { Link, Route, Routes } from 'react-router-dom';

const Auth = () => {
  return (
    <section className="login">
      <div className="autoContainer">
        <div className="login__inner">
          <div className="login__inner-row">
            <div className="login__inner-video">
              <div className="ratioImage">
                {/* <video autoPlay muted loop>
                  <source src={"video/diamond.mp4"} type="video/mp4" />
                </video> */}
                <img src="/video/poster.png" alt="poster" />
              </div>
            </div>
            <Routes>
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
};
const SignIn = () => {
  return (
    <div className={`login__form active`}>
      <h5>Sign in to Kamil Ussat</h5>
      <div className="login__form-box">
        <button className="button button--border">
          <span className="ico ico--image">
            <img src="/images/login/google.svg" alt="google" />
          </span>
          <span className="text">Sign in with Google</span>
        </button>
        <div className="login__form-devider">
          <span>or sign in with email</span>
        </div>
      </div>
      <Input label={'Username or Email'} id={'email'} />
      <Input label={'Password'} button={'Forgot?'} id={'passwd'} />
      <div className="login__form-box">
        <button className="button button--primary">
          <span>Sign In</span>
        </button>
        <div className="login__form-text">
          <p>Don't have an account? </p>
          <Link to="/auth/signup" className="button button--text">
            <span>Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
const SignUp = () => {
  return (
    <div className={`login__form active`}>
      <h5>Sign up to Kamil Ussat</h5>
      <div className="login__form-box">
        <button className="button button--border">
          <span className="ico ico--image">
            <img src="/images/login/google.svg" alt="google" />
          </span>
          <span className="text">Sign in with Google</span>
        </button>
        <div className="login__form-devider">
          <span>or sign up with email</span>
        </div>
      </div>
      <Input label={'Username or Email'} id={'email2'} />
      <Input label={'Password'} button={'Forgot?'} id={'passwd'} />
      <div className="login__form-box">
        <button className="button button--primary">
          <span>Sign Up</span>
        </button>
        <div className="login__form-text">
          <p>Have an account? </p>
          <Link to="/auth/signin" className="button button--text">
            <span>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Auth;
