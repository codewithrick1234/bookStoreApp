import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthProvider' // Import Auth Context

function Signup() {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const [authUser, setAuthUser] = useAuth(); // Get auth state

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        };
        await axios.post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                if (res.data) {
                    toast.success('Signup successfully!');

                    //  Update auth state
                    setAuthUser({
                        ...authUser,
                        user: res.data.user
                    });

                    //  Save to localStorage
                    localStorage.setItem("Users", JSON.stringify(res.data.user));

                    navigate(from, { replace: true });
                }
            })
            .catch((err) => {
                if (err.response) {
                    toast.error("Error: " + err.response.data.message);
                }
            });
    };

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='w-[600px]'>
                <div className='modal-box'>
                    <Link to="/" className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
                        X
                    </Link>

                    <h3 className='font-bold text-lg'>Signup!!</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name */}
                        <div className='mt-4 space-y-2'>
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder='Enter your name'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("fullname", { required: true })}
                            />
                            {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Email */}
                        <div className='mt-4 space-y-2'>
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Password */}
                        <div className='mt-4 space-y-2'>
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder='Enter your Password'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Buttons */}
                        <div className='flex justify-around mt-4'>
                            <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                                Signup
                            </button>
                            <span>
                                Have an account?{" "}
                                <button
                                    type="button"
                                    className='underline text-blue-500 cursor-pointer'
                                    onClick={() =>
                                        document.getElementById("my_modal_3").showModal()
                                    }
                                >
                                    Login
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;







// import React from 'react'
// import { Link, Navigate, replace, useLocation, useNavigate } from 'react-router-dom'
// import Login from './Login'
// import { useForm } from 'react-hook-form'
// import axios from 'axios'
// import toast from 'react-hot-toast'


// //3.45.00
// function Signup() {
//     const location= useLocation();
//     const Navigate= useNavigate();
//     const from= location.state?.from?.pathname || "/"
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm()

//     const onSubmit = async (data) => {
//         const userInfo = {
//             fullname: data.fullname,
//             email: data.email,
//             password: data.password
//         }
//         await axios.post("http://localhost:4001/user/signup", userInfo)
//             .then((res) => {
//                 console.log(res.data)
//                 if (res.data) {
//                     toast.success('Signup successfully!');
//                     Navigate(from, {replace: true})
//                 }
//                 localStorage.setItem("Users", JSON.stringify(res.data.user));
//             })
//             .catch((err) => {
//                 if (err.response) {
//                     console.log(err);
//                     toast.error("Error: " + err.response.data.message);
//                 }
//             });
//     };
//     return (
//         <div className='flex h-screen items-center justify-center'>
//             <div className='w-[600px]'>
//                 <div className='modal-box'>
//                     <Link to="/" className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
//                         X
//                     </Link>

//                     <h3 className='font-bold text-lg'>Signup!!</h3>

//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         {/* Name */}
//                         <div className='mt-4 space-y-2'>
//                             <label>Name</label>
//                             <input
//                                 type="text"
//                                 placeholder='Enter your name'
//                                 className='w-80 px-3 py-1 border rounded-md outline-none'
//                                 {...register("fullname", { required: true })}
//                             />
//                             <br />
//                             {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
//                         </div>

//                         {/* Email */}
//                         <div className='mt-4 space-y-2'>
//                             <label>Email</label>
//                             <input
//                                 type="email"
//                                 placeholder='Enter your email'
//                                 className='w-80 px-3 py-1 border rounded-md outline-none'
//                                 {...register("email", { required: true })}
//                             />
//                             <br />
//                             {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
//                         </div>

//                         {/* Password */}
//                         <div className='mt-4 space-y-2'>
//                             <label>Password</label>
//                             <input
//                                 type="password"
//                                 placeholder='Enter your Password'
//                                 className='w-80 px-3 py-1 border rounded-md outline-none'
//                                 {...register("password", { required: true })}
//                             />
//                             <br />
//                             {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
//                         </div>

//                         {/* Buttons */}
//                         <div className='flex justify-around mt-4'>
//                             <button
//                                 type="submit"
//                                 className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
//                             >
//                                 Signup
//                             </button>
//                             <span>
//                                 Have an account?{" "}
//                                 <button
//                                     type="button"
//                                     className='underline text-blue-500 cursor-pointer'
//                                     onClick={() =>
//                                         document.getElementById("my_modal_3").showModal()
//                                     }
//                                 >
//                                     Login
//                                 </button>
//                             </span>
//                         </div>
//                     </form>
//                 </div>
//             </div>

//             {/* Login Modal */}
//             <Login />
//         </div>
//     )
// }

// export default Signup

// //3.34.00

