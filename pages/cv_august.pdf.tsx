import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        <header className="App-header flex h-screen">
            <div className="m-auto space-y-6">
            <div>Per Sunde fullstack developer</div>
            <div className="pr-2">
                <Link href="/assets/cv/cv.pdf">
                    <a className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-full padding">My CV</a>
                </Link>
            </div>
            </div>
        </header>
    )
}