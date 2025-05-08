import React, { use, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import useScroolToTop from "../hooks/useScroolToTop";
import useTitle from "../hooks/useTitle";
import { AuthContext } from "../store/contexts/contexts";

const Login = () => {
  useScroolToTop();
  useTitle("JobTrack | Login");
  const navigate = useNavigate();
  const location = useLocation();
  const { loginUser, signInWithGoogle, setResetPasswordEmail } =
    use(AuthContext);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();

    loginUser(emailRef.current.value, passwordRef.current.value)
      .then((result) => {
        navigate(location.state || "/");
        toast.success("Login successfully!");
      })
      .catch((error) => {
        toast.error(`Something wrong! Please try again!`);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        navigate(location.state || "/");
        toast.success("Login successfully!");
      })
      .catch((error) => {
        toast.error(`Something wrong! Please try again!`);
      });
  };

  const resetPasswordEmail = () => {
    setResetPasswordEmail(emailRef.current.value);
  };

  return (
    <div className="px-4 md:px-0">
      <div className="card bg-white  w-full mt-16 max-w-md shrink-0 pt-6 mx-auto shadow-2xl">
        <h1 className="title text-3xl text-center">Login your account</h1>
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            {/* email start  */}
            <label className="label">Email</label>
            <label className="input validator w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                ref={emailRef}
                type="email"
                className="w-full"
                placeholder="mail@site.com"
                required
              />
            </label>
            <p className="validator-hint hidden">Enter valid email address</p>
            {/* email end */}
            {/* password  */}
            <label className="label">Password</label>
            <label className="input validator w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                ref={passwordRef}
                type="password"
                required
                placeholder="Password"
                minLength="6"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
              />
            </label>
            <p className="validator-hint hidden">
              Must be more than 6 characters, including
              <br />
              At least one number <br />
              At least one lowercase letter <br />
              At least one uppercase letter
            </p>
            {/* password end  */}
            <div>
              <Link
                onClick={resetPasswordEmail}
                to={"/reset-password"}
                className="link link-hover"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="btn  bg-gradient-to-br from-primary to-secondary border-0 text-white mt-4"
            >
              Login
            </button>
            <div>
              <p className="text-center">
                I don't have an account?{" "}
                <Link to={`/register`} className="text-blue-600 underline">
                  Register
                </Link>
              </p>
            </div>
          </form>
          <div className="divider">OR</div>
          {/* Google */}
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white text-black border-[#e5e5e5] shadow-none"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
