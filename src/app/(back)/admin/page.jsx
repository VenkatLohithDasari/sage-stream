"use client";

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios';

import websiteLogo from "../../../../public/assets/images/sage stream logo.png"

const Page = () => {

    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true)
            let user = {
                email: email,
                password: password
            }
            const logoutAny = await axios.get("/api/users/logout");
            const response = await axios.post("/api/users/login", user);

            if (response.status === 200) {
                try {
                    const adminCheck = await axios.get("/api/users/me/admin");
                    if (adminCheck.status === 200) {
                        setLoading(false)
                        router.push("/admin/dashboard")
                    }
                } catch (error) {
                    setLoading(false)
                    router.push("/home")
                } finally {
                    setLoading(false)
                }
            }
        } catch (error) {

        }
    }

    return (
        <div className="bg-white dark:bg-neutral-900">
            <div className="flex justify-center h-screen">
                <div
                    className="hidden bg-cover lg:block lg:w-2/3"
                    style={{
                        backgroundImage:
                            "url(/assets/images/anime-crossover.jpg)"
                    }}
                >
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-80">
                        <div>
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">
                                Sage Stream
                            </h2>
                            <p className="max-w-xl mt-3 text-gray-300">
                                Sage Stream is an anime streaming site where you can watch anime online in HD quality for free with English subtitles or dubbing. You can also download any anime you want without registration or payment required. Everything is free!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">

                    <div className="flex-1">
                        <div className="text-center">
                            <div className="flex justify-center mx-auto">
                                <Image
                                    className="w-auto h-7 sm:h-8"
                                    src={websiteLogo}
                                    alt="websiteLogo"
                                />
                            </div>
                            <p className="mt-3 text-gray-500 dark:text-gray-300">
                                Sign in for access
                            </p>
                        </div>
                        <div className="mt-8">
                            <form onSubmit={!loading ? handleSubmit : (e) => { e.preventDefault() }}>
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
                                        {loading ? <span className="daisy-loading daisy-loading-dots daisy-loading-md"></span> : "Login"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Page