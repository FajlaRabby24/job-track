import React, { use, useRef } from "react";
import { toast } from "react-toastify";
import useScroolToTop from "../hooks/useScroolToTop";
import useTitle from "../hooks/useTitle";
import { AuthContext } from "../store/contexts/contexts";

const ResetPassword = () => {
  useScroolToTop();
  useTitle("JobTrack | Reset password");
  const { resetPasswordEmail, handleResetPasswordEmail } = use(AuthContext);
  const emailRef = useRef(null);

  const handleResetPassword = (e) => {
    e.preventDefault();
    handleResetPasswordEmail(emailRef.current.value).then(() => {
      toast.success("we have send a reset password email. Check it!");
      setTimeout(
        () => window.open(`https://mail.google.com/mail/u/0/#inbox`, "_blank"),
        1000
      );
    });
  };

  return (
    <div className="pt-16 px-4">
      <div className="card bg-white w-full  max-w-md shrink-0 pt-6 mx-auto shadow-2xl">
        <h1 className="title text-3xl text-center">Reset Password</h1>
        <div className="card-body">
          <form onSubmit={handleResetPassword} className="fieldset">
            {/* email start  */}
            <label className="label font-semibol text-lg">Email</label>
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
                defaultValue={resetPasswordEmail}
                required
              />
            </label>
            <p className="validator-hint hidden">Enter valid email address</p>
            {/* email end */}

            <button
              type="submit"
              className="btn  bg-gradient-to-br from-primary to-secondary border-0 text-white mt-3"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
