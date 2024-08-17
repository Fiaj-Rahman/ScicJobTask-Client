// import React, { useContext, useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { AuthContext } from "./FirebaseProvider";
// import { FaGoogle } from "react-icons/fa";

// const Login = () => {
//   const { signInUser, googleLogin, githubLogin } = useContext(AuthContext);

//   const navigate = useNavigate();
//   const location = useLocation();
//   const [emptyError, setEmptyError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const from = location?.state || "/";

//   const handleSocialLogin = (socialProvider) => {
//     socialProvider()
//       .then((result) => {
//         if (result.user) {
//           navigate(from);
//           toast.success("Login successful!");
//         }
//       })
//       .catch((error) => {
//         // Handle error if login fails
//         console.error("Social login error:", error);
//         toast.error("Login failed. Please try again.");
//       });
//   };

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     const { email, password } = data;
//     signInUser(email, password)
//       .then((result) => {
//         if (result.user) {
//           navigate(from);
//           toast.success("Login successful!");
//         }
//       })
//       .catch((error) => setEmptyError(error.message.split("/")[1]));
//   };

//   return (
//     <div>
//       <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//             <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="email"
//                   className="input input-bordered"
//                   {...register("email", { required: true })}
//                 />
//                 {errors.email && (
//                   <span className="text-red-900">This field is required</span>
//                 )}
//               </div>

//               <div className="form-control">
//                 {/* <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="password"
//                   className="input input-bordered"
//                   {...register("password", { required: true })}
//                 />
//                 {errors.password && (
//                   <span className="text-red-900">This field is required</span>
//                 )} */}

//                 <div className="relative">
//                   <label className="label">
//                     <span className="label-text">Password</span>
//                   </label>
//                   <input
//                     {...register("password", { required: true })}
//                     type={showPassword ? "text" : "password"}
//                     placeholder="password"
//                     className="input input-bordered"
//                   />
//                   <span
//                     className="absolute top-2/3  text-xl m-1"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
//                   </span>
//                 </div>
//               </div>
//               {/* errors will return when field validation fails  */}
//               {errors.password && (
//                 <span className="text-red-900 font-bold">
//                   This field is required
//                 </span>
//               )}
//               {emptyError && (
//                 <span className="text-red-900 font-bold">
//                   <p>Email or Password doesn't match</p>
//                 </span>
//               )}

//               <div className="form-control mt-6">
//                 <button className="btn btn-primary">Login</button>
//               </div>
//             </form>

//             <div className="flex gap-3 mt-5 mb-5 px-7">
//               <div className="m-auto">
//                 <button
//                   onClick={() => handleSocialLogin(googleLogin)}
//                   className="btn text-2xl "
//                 >
//                   <FaGoogle />
//                 </button>
//               </div>

//             </div>

//             <Link to={"/register"}>
//               <h1 className="text-center font-bold my-5">
//                 Create a Account..Click Here
//               </h1>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
