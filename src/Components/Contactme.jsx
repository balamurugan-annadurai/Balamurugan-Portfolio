import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
import { toast, Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactLoading from 'react-loading';

const Contactme = () => {
    const [loading, setLoading] = useState(false);

    // Set up formik for form handling and validation
    const formik = useFormik({

        // Initial values
        initialValues: {
            email: '',
            name: '',
            message: ''
        },

        // Validations
        validationSchema: yup.object({
            email: yup.string()
                .email('Invalid email')
                .required('Email is required'),
            name: yup.string()
                .required("Name is required"),
            message: yup.string()
                .required("Message is required")
        }),

        onSubmit: (values) => {   // Function to handle form submission
            formik.resetForm();
            toast.success("Message send successful", {  // Notification
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Slide // Use Slide for right-side animation
            });
        }
    })

    return (
        <>
            <div className='contact-container mb-5' id='contact'>
                <div className="projects mt-5 mb-3">
                    <p className='text-center m-0'>Get In Touch</p>
                    <h2 className='text-center skills-title'>Contact Me</h2>
                </div>
                <div className='d-flex justify-content-center align-items-center bg-color'>
                    <div className="outer-container">
                        <p className='text1'>let's connect</p>
                        <form action="" onSubmit={formik.handleSubmit}>
                            <div className="input-container">
                                {
                                    formik.touched.name && formik.errors.name ?
                                        <div className='erro-msg'>{formik.errors.name}</div> : null
                                }
                                <i className='bx bx-user' ></i>
                                <input
                                    type="text"
                                    placeholder='Name'
                                    {...formik.getFieldProps("name")}
                                ></input>
                            </div>
                            <div className="input-container">
                                {
                                    formik.touched.email && formik.errors.email ?
                                        <div className='erro-msg'>{formik.errors.email}</div> : null
                                }
                                <i className='bx bx-envelope'></i>
                                <input
                                    type="email"
                                    placeholder='Email'
                                    {...formik.getFieldProps("email")}
                                ></input>
                            </div>
                            <div className="input-container">
                                {
                                    formik.touched.message && formik.errors.message ?
                                        <div className='erro-msg'>{formik.errors.message}</div> : null
                                }
                                <i className='bx bx-message-dots' ></i>
                                <textarea
                                    type="text"
                                    placeholder='Message'
                                    {...formik.getFieldProps("message")}
                                />
                            </div>
                            <button className='custom-btn' type="submit">Submit</button>
                        </form>

                    </div>

                    {/* Toast container for displaying notifications */}
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    {
                        loading &&
                        <div className="loading-container">
                            <ReactLoading type="spinningBubbles" color="#ed7632" />
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Contactme