import { useState } from "react";
import ".././App.css";
import { Camera } from "lucide-react";
import { useFormik } from "formik";
import { loginSchema, signUpSchema } from "../utils/Validator";

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [file, setFile] = useState(null);

  const handlefile = (e) => {
    setFile(e.target.files[0]);
  };

  const formikSignUp = useFormik({
    initialValues: {
      name: "",
      bio: "",
      username: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("profile", file);
      const data = { ...values, formData };
      alert(JSON.stringify(data, null, 2));
    },
  });

  const formikLogin = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="flex justify-center overflow-y-hidden items-center min-h-screen p-2">
      <div className="card">
        {isLoggedIn ? (
          <>
            <h1 className="text-3xl md:text-5xl md:mb-14 mb-7">Login</h1>
            <form
              action=""
              className="gap-y-10 flex flex-col"
              onSubmit={formikLogin.handleSubmit}
            >
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className="text-input"
                  name="username"
                  onChange={formikLogin.handleChange}
                  value={formikLogin.username}
                />
                {formikLogin.touched.username && formikLogin.errors.username ? (
                  <div className="text-sm p-2 text-red-500 font-bold">
                    {formikLogin.errors.username}
                  </div>
                ) : null}
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="text-input"
                  name="password"
                  onChange={formikLogin.handleChange}
                  value={formikLogin.password}
                />
                {formikLogin.touched.password && formikLogin.errors.password ? (
                  <div className="text-sm p-2 text-red-500 font-bold">
                    {formikLogin.errors.password}
                  </div>
                ) : null}
              </div>
              <div>
                <button
                  type="submit"
                  className="p-5 bg-black w-full text-center text-white rounded-full mt-5"
                >
                  Login
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h1 className="text-3xl md:text-5xl md:mb-14 mb-7">Sign up</h1>
            <form
              action=""
              className="gap-y-7 flex flex-col"
              onSubmit={formikSignUp.handleSubmit}
            >
              <div className="flex justify-center items-center">
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  onChange={handlefile}
                />
                <label htmlFor="fileInput" className="relative">
                  <img
                    src={file ? URL.createObjectURL(file) : "/avatar.jpg"}
                    alt="Avatar icon"
                    className="w-[250px] h-[250px] cursor-pointer rounded-full object-cover object-center"
                  ></img>
                  <Camera className="absolute bottom-8 right-12 text-white bg-black w-9 h-9 p-2 rounded-full hover:bg-slate-600" />
                </label>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="text-input"
                  name="name"
                  value={formikSignUp.name}
                  onChange={formikSignUp.handleChange}
                />
                {formikSignUp.touched.name && formikSignUp.errors.name ? (
                  <div className="text-sm p-2 text-red-500 font-bold">
                    {formikSignUp.errors.name}
                  </div>
                ) : null}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Bio"
                  className="text-input"
                  name="bio"
                  value={formikSignUp.bio}
                  onChange={formikSignUp.handleChange}
                />
                {formikSignUp.touched.bio && formikSignUp.errors.bio ? (
                  <div className="text-sm p-2 text-red-500 font-bold">
                    {formikSignUp.errors.bio}
                  </div>
                ) : null}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className="text-input"
                  name="username"
                  value={formikSignUp.username}
                  onChange={formikSignUp.handleChange}
                />
              </div>
              {formikSignUp.touched.username && formikSignUp.errors.username ? (
                <div className="text-sm p-2 text-red-500 font-bold">
                  {formikSignUp.errors.username}
                </div>
              ) : null}
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="text-input"
                  name="password"
                  value={formikSignUp.password}
                  onChange={formikSignUp.handleChange}
                />
                {formikSignUp.touched.password &&
                formikSignUp.errors.password ? (
                  <div className="text-sm p-2 text-red-500 font-bold">
                    {formikSignUp.errors.password}
                  </div>
                ) : null}
              </div>
              <div>
                <button
                  type="submit"
                  className="p-5 bg-black w-full text-center text-white rounded-full mt-5"
                >
                  Sign up
                </button>
              </div>
            </form>
          </>
        )}
        <div className="mt-8 max-w-full">
          {isLoggedIn ? (
            <span className="text-sm md:text-xl text-black">
              Do not Have an Account ?{" "}
              <button
                className="font-bold text-blue-500"
                onClick={() => setIsLoggedIn(false)}
              >
                Register
              </button>
            </span>
          ) : (
            <span className="text-sm md:text-xl text-black">
              Already have an Account ?{" "}
              <button
                className="font-bold text-blue-500"
                onClick={() => setIsLoggedIn(true)}
              >
                Login
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
