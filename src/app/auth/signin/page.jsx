"use client";

import { useState, useEffect } from 'react'
import Image from 'next/image';
import websiteLogo from "../../../../public/assets/images/sage stream logo.png";
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { getCsrfToken } from "next-auth/react"

const Page = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [csrfToken, setCsrfToken] = useState('')

    useEffect(() => {
        async function myFunction() {
            let csrfToken = await getCsrfToken()
            setCsrfToken(csrfToken)
        }
        myFunction();
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true)
            const formData = {
                csrfToken,
                email,
                password
            }
            const response = await axios.post('/api/auth/callback/credentials', formData);

            if (response.status === 200) {
                window.location.href = "/home"
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="flex w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg dark:bg-neutral-800 lg:max-w-4xl">
                    <div
                        className="hidden bg-cover lg:block lg:w-1/2"
                        style={{
                            backgroundImage:
                                `url("/assets/images/hello-1.gif")`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                        <div className="flex justify-center mx-auto">
                            <Image
                                className="w-auto h-7 sm:h-8"
                                src={websiteLogo}
                                alt="website logo"
                            />
                        </div>
                        <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                            Welcome back!
                        </p>
                        <form onSubmit={!loading ? handleSubmit : (e) => { e.preventDefault() }}>
                            <input name="csrfToken" type="hidden" defaultValue={csrfToken} required />
                            <div className="mt-4">
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                                    htmlFor="LoggingEmailAddress"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="LoggingEmailAddress"
                                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-neutral-900 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 focus:ring-opacity-40 dark:focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-300 disabled:opacity-75"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder='Your Email Address'
                                    disabled={loading}
                                />
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                                        htmlFor="loggingPassword"
                                    >
                                        Password
                                    </label>
                                    <a
                                        href="#"
                                        className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                                    >
                                        Forget Password?
                                    </a>
                                </div>
                                <input
                                    id="loggingPassword"
                                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-neutral-900 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 focus:ring-opacity-40 dark:focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-300 disabled:opacity-75"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder='Your Password'
                                    disabled={loading}
                                />
                            </div>
                            <div className="mt-6">
                                <button type="submit" className="w-full font-medium capitalize daisy-btn daisy-btn-primary transition-colors duration-300 transform">
                                    {loading ? <span className="daisy-loading daisy-loading-dots daisy-loading-md"></span> : "Sign In"}
                                </button>
                            </div>
                        </form>
                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
                            <Link
                                href="/auth/signup"
                                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                            >
                                or sign up
                            </Link>
                            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page