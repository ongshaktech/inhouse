import signup_side from "../../assets/images/signup_side.svg";
import shape from "../../assets/images/shape.svg";
import eye from "../../assets/images/eye.svg";
import eye_close from "../../assets/images/eye_close.svg";
import { FaRegUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../features/auth/authApi";

export default function Signin() {
  let [showPass, setShowPass] = useState(false);

  const [login, { data, isLoading, isSuccess, isError, error: responseError }] =
    useLoginMutation();

  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      // Error Goes here
    }

    if (isSuccess) {
      navigate("/");
    }
  }, [isError, isSuccess]);

  const handleSignin = () => {
    login(userDetail);
  };


  return (
    <>
    
      <div className="signin relative  bg-[#2B2B2B] h-screen w-full">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center  h-full relative z-10">
          <div className="w-full">
            <img src={signup_side} alt="" />
          </div>
          <div className="w-full  ">
            <div className="bg-white p-8 rounded-md">
              <div className="flex justify-center pb-4">
                <FaRegUserCircle className="w-10 h-10 " />
              </div>
              <h1 className="text-center font-bold text-xl">Sign In</h1>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="pResource" className="text-xl font-semibold">
                    User Email
                  </label>
                  <input
                    type="text"
                    id="pResource"
                    placeholder="Enter a valid user email"
                    className="border border-black focus:outline-none px-4 py-2 rounded-md"
                    value={userDetail?.email}
                    onChange={(e) =>
                      setUserDetail({ ...userDetail, email: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="pResource" className="text-xl font-semibold">
                    Password
                  </label>
                  <div className="relative w-full">
                    <input
                      type={showPass ? "text" : "password"}
                      id="pResource"
                      placeholder="Enter password"
                      className="border border-black focus:outline-none px-4 py-2 rounded-md w-full"
                      value={userDetail?.password}
                      onChange={(e) =>
                        setUserDetail({
                          ...userDetail,
                          password: e.target.value,
                        })
                      }
                    />
                    {!showPass ? (
                      <img
                        src={eye}
                        alt=""
                        className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
                        onClick={() => setShowPass(true)}
                      />
                    ) : (
                      <img
                        src={eye_close}
                        alt=""
                        className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
                        onClick={() => setShowPass(false)}
                      />
                    )}
                  </div>
                </div>
                <div className="text-center">
                  <button
                    className="bg-[#FFCD4B] px-6 py-2 rounded-md font-semibold"
                    onClick={handleSignin}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={shape}
          alt=""
          className="absolute bottom-0 left-0 right-0 w-full object-cover"
        />
      </div>
    </>
  );
}
