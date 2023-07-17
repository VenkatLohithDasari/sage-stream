"use client";

import { useState } from 'react'
import Image from 'next/image';
import websiteLogo from "../../../../public/assets/images/sage stream logo.png";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Page = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({ passwordError: false, passwordErrorMessage: "", password: "" });
    const [username, setUsername] = useState("")
    const [loading, setLoading] = useState(false);

    const handlePassword = (e) => {
        let new_pass = e.target.value.trim();
        setPassword((prev) => ({ ...prev, password: new_pass }));

        // regular expressions to validate password
        var lowerCase = /[a-z]/g;
        var upperCase = /[A-Z]/g;
        var numbers = /[0-9]/g;
        if (!new_pass.match(lowerCase) && new_pass.length > 0) {
            setPassword((prev) => {
                return { ...prev, passwordError: true, passwordErrorMessage: "Password should contains lowercase letters!" }
            })
        } else if (!new_pass.match(upperCase) && new_pass.length > 0) {
            setPassword((prev) => {
                return { ...prev, passwordError: true, passwordErrorMessage: "Password should contains uppercase letters!" }
            })
        } else if (!new_pass.match(numbers) && new_pass.length > 0) {
            setPassword((prev) => {
                return { ...prev, passwordError: true, passwordErrorMessage: "Password should contains numbers!" }
            })
        } else if (new_pass.length < 10 && new_pass.length > 0) {
            setPassword((prev) => {
                return { ...prev, passwordError: true, passwordErrorMessage: "Password length should be more than 10." }
            })
        } else {
            setPassword((prev) => {
                return { ...prev, passwordError: false, passwordErrorMessage: "" }
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            let users = {
                username: username,
                email: email,
                password: password.password,
            }
            const response = await axios.post("/api/users/signup", users);

            if (response.status === 200) {
                router.push("/auth/signin");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="flex w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg dark:bg-neutral-800 lg:max-w-4xl">
                    <div
                        className="hidden bg-cover lg:block lg:w-1/2"
                        style={{
                            backgroundImage:
                                'url("https://ineedanime.com/wp-content/uploads/2021/09/Yui-Yuigahama-Wave-Teen-Romantic-SNAFU.gif")',
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
                            Join us today!
                        </p>
                        <form onSubmit={!loading ? handleSubmit : (e) => { e.preventDefault() }}>
                            <div className="mt-4">
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                                    htmlFor="LoggingEmailAddress"
                                >
                                    Username
                                </label>
                                <input
                                    id="LoggingEmailAddress"
                                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-neutral-900 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 focus:ring-opacity-40 dark:focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-300 disabled:opacity-75"
                                    type="name"
                                    required
                                    placeholder='Your Username'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    disabled={loading}
                                />
                            </div>
                            <div className="mt-4">
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                                    htmlFor="LoggingEmailAddress"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="LoggingEmailAddress"
                                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-neutral-900 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 focus:ring-opacity-40 dark:focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-300
                                    disabled:opacity-75
                                    "
                                    type="email"
                                    required
                                    placeholder='Your Email Address'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={loading}
                                />
                            </div>
                            <div className="mt-4">
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                                    htmlFor="loggingPassword"
                                >
                                    Password
                                </label>
                                <div className={`${password.passwordError ? 'daisy-tooltip daisy-tooltip-open daisy-tooltip-error w-full' : 'w-full'}`}
                                    data-tip={password.passwordErrorMessage}>
                                    <input
                                        id="loggingPassword"
                                        className={`block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-neutral-900 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 focus:ring-opacity-40 dark:focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-300 disabled:opacity-75`}
                                        type="password"
                                        required
                                        placeholder='Your Password'
                                        value={password.password}
                                        onChange={handlePassword}
                                        disabled={loading}
                                    />

                                </div>
                            </div>
                            <div className="mt-6">
                                <button type='submit' className="w-full font-medium capitalize daisy-btn daisy-btn-primary transition-colors duration-300 transform" disabled={password.passwordError}>
                                    {loading ? <span className="daisy-loading daisy-loading-dots daisy-loading-md"></span> : "Sign Up"}
                                </button>
                            </div>
                        </form>
                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
                            <Link
                                href="/auth/signin"
                                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                            >
                                or Sign In
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