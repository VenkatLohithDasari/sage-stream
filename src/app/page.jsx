import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";
import SearchBar from "@/components/SearchBar";
import Accordion from "@/components/Accordion";

import websiteLogo from "../../public/assets/images/sage stream logo.png";
import welcomeImage from "../../public/assets/images/Artboard 1-FadeOutBottom.png";

const Menu = () => {
    return (
        <nav className="flex justify-center space-x-7">
            <Link
                href="/home"
                className="text-gray-200 hover:text-indigo-500 transition-colors duration-300"
            >
                Home
            </Link>
            <Link
                href="/trending"
                className="text-gray-200 hover:text-indigo-500 transition-colors duration-300"
            >
                Trending
            </Link>
            <Link
                href="/newest"
                className="text-gray-200 hover:text-indigo-500 transition-colors duration-300"
            >
                New Release
            </Link>
            <Link
                href="/updated"
                className="text-gray-200 hover:text-indigo-500 transition-colors duration-300"
            >
                Recent Update
            </Link>
        </nav>
    );
};

const ImageWithButton = () => {
    return (
        <div className="relative">
            <Image
                src={welcomeImage}
                alt="Image"
                width={832}
            />
            <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-neutral-800 px-4 py-2 rounded-full flex items-center h-14 font-medium text-lg">
                <Link href="/home">Go to homepage</Link>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10 ml-2"
                >
                    <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </div>
    );
};

export default function Home() {
    return (
        <>
            <div className="bg-[url('/assets/images/bg-index2.png')] bg-no-repeat bg-center bg-cover">
                <Container>
                    <div className="flex flex-col items-center">
                        <div className="mt-8 mb-6">
                            <Image
                                src={websiteLogo}
                                width={4096 / 10}
                                placeholder="empty"
                                quality={100}
                                alt="SageStream Logo"
                            />
                        </div>
                        <div className="mb-8">
                            <Menu />
                        </div>
                        <div className="mb-8 w-96">
                            <SearchBar />
                        </div>
                        <div>
                            <ImageWithButton />
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <section>
                    <div className="max-w-4xl px-6 py-10 mx-auto">
                        <div className="mt-12 space-y-8">
                            <Accordion title="What is SageStream?">
                                SageStream is an anime streaming site where you can watch anime online in HD quality for free with English subtitles or dubbing. You can also download any anime you want without registration or payment required. Everything is free!
                            </Accordion>
                            <Accordion title="Is SageStream safe">
                                Yes. We started this site to improve UX and are committed to keeping our users safe. We encourage all our users to notify us if anything looks suspicious. Please understand that we do have to run advertisements to maintain the site.
                            </Accordion>
                            <Accordion title="What make SageStream the best site to watch anime free online">
                                <p>
                                    - Content library: We were only a few hundred of old animes behind kisanime when it was around. We have been adding new and old animes every hour to our library. You can find almost everything here. After the closing of kissanime, we become the largest anime library on the web.
                                </p>
                                <p>
                                    - Streaming experience: We have top of the line streaming servers. You can simply choose one that is fast for you.

                                </p>
                                <p>
                                    - Quality/Resolution: All our video files are encoded in highest possible resolution. We also have quality setting function that allows every user to enjoy streaming regardless of their internet speed.
                                </p>
                                <p>
                                    - Updates: Our content is updated hourly, most of the works done automatically so you will get update as fast as possible.
                                </p>
                                <p>
                                    - User interface: We focus on the simple and easy to use, so you will feel the life is easier here. We also have almost every feature that other anime streaming sites have, but not the opposite.
                                </p>
                                <p>
                                    - Device compatibility: SageStream works fine on both desktop and mobile devices, even with old browsers, so you can enjoy your anime anywhere you want.
                                </p>
                                <p>
                                    So, if you want a good and safe place to watch anime online for free, give SageStream a try, and if you like what we provided, please help us by sharing SageStream to your friends and do not forget to bookmark our site.
                                </p>
                                <p>
                                    Thanks!
                                </p>
                            </Accordion>
                        </div>
                    </div>
                </section>

            </Container>
        </>
    );
}
