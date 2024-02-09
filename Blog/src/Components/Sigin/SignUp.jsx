import { Button, Label, TextInput } from "flowbite-react";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Fragment>
      <div className="min-h-screen mt-20">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row  md:items-center gap-5">
          {/* left side  */}
          <div className=" flex-1 ">
            <Link to={"/"} className="    font-bold dark:text-white  text-4xl ">
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500  via-purple.500 to-pink-500 rounded-lg text-white ">
                Babu's
              </span>
              Blog
            </Link>
            <p className="text-sm mt-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              praesentium aut voluptas nostrum provident voluptatibus modi ipsa
              hic harum laudantium?
            </p>
          </div>
          {/* right  */}
          <div className="flex-1">
            <form className="flex flex-col gap-4">
              <div>
                <Label value="Your name" />
                <TextInput placeholder="Username" type="text" id="usernam" />
              </div>
              <div>
                <Label value="Your email" />
                <TextInput placeholder="Email" type="text" id="Email" />
              </div>
              <div>
                <Label value="Your Password" />
                <TextInput placeholder="Password" type="Password" id="Password" />
              </div>
              <Button gradientDuoTone="purpleToPink" type="submit">
                Sign Up
              </Button>
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>I have an account?</span>
              <Link to={'/sign-in'} className="text-blue-500" >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;
