// import React, { useContext, useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { AuthContext } from "./FirebaseProvider";

// const Register = () => {
//   const { createUser,updateUserProfile } = useContext(AuthContext);
//   const navigate = useNavigate()
//   const location = useLocation()
//   const [emptyError,setEmptyError] = useState('')
//   const [showPassword,setShowPassword] = useState(false)

//   const from = location?.state || '/'


//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();


//   const onSubmit = data => {
//     const { email, password ,name,photo} = data;

    
//     if (password.length < 6) {
//       setEmptyError('Password must be at least 6 characters long');
//       return; // Exit the function if password is too short
//   }

//   if (!/[A-Z]/.test(password)) {
//     setEmptyError('Password must contain an uppercase letter');
//     return;
//   }

//   if (!/[a-z]/.test(password)) {
//     setEmptyError('Password must contain an uppercase letter');
//     return;
//   }


//   setEmptyError('')





//     createUser(email, password)
//     .then((result) => {
//       updateUserProfile(name,photo)
//       .then(()=>{
//         if (result.user) {
//           navigate(from)
//           toast.success("Login successful!");
//         }
//       })
        
//       })
//       // .catch((error) => {
//       //   // Handle error if login fails
//       //   console.error("Social login error:", error);
//       //   toast.error("Login failed. Please try again.");
//       // });

//       .catch(error =>setEmptyError(error.message.split("/")[1]))
// };





//   return (
//     <div>
//       <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//             <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="name"
//                   className="input input-bordered"
                  
//                   {...register("name", { required: true })}
//                 />
//                  {errors.name && <span className="text-red-900">This field is required</span>}
//               </div>

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
//                 {errors.email && <span className="text-red-900">This field is required</span>}
//               </div>

//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Photo URL</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="photo"
//                   placeholder="photo url"
//                   className="input input-bordered"
//                   {...register("photo", { required: true })}
//                 />
//                 {errors.photo && <span className="text-red-900">This field is required</span>}
//               </div>



//               {/* <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="password"
//                   className="input input-bordered"
//                   {...register("password", { required: true })}
//                 />
//                 {errors.password && <span className="text-red-900">This field is required</span>}
//               </div> */}

// <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>


//           <div className='relative'>
//           <input {...register("password", { required: true })} 
//           type={showPassword ? "text" : "password"} 
//           placeholder="password" 
//           className="input input-bordered"  />
//           <span className='absolute top-1/3  text-xl m-1' onClick={() => setShowPassword(!showPassword)}>{
//             showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
//           }</span>
//           </div>



//            {/* errors will return when field validation fails  */}
//       {errors.password && <span className='text-red-900 font-bold'>This field is required</span>}
//       {emptyError && <span className='text-red-900 font-bold'>{emptyError}</span>}
//         </div>




//               <div className="form-control mt-6">
//                 <button className="btn btn-primary">Login</button>
//               </div>
//             </form>

//             <Link to={'/login'}>
//               <h1 className="text-center font-bold my-5">Have a Account...Click Here</h1>
//               </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
