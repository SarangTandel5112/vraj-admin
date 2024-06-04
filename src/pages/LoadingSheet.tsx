import React from "react";
import Navbar from "../components/navbar";

function LoadingSheet() {
    return (
        <div className="h-full flex">
            <Navbar />
            <section className="flex flex-col grow">
                <header className="p-8 pb-4">
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>

                <div className="flex flex-col grow w-full p-8 pt-4">
                    <div className="pb-3">
                        <h3 className="text-3xl font-bold">Loading Sheets</h3>
                        <div>
                            <button className="bg-[#04C139] text-white px-6 py-1">
                                ADD
                            </button>
                            <button className="bg-[#549DCD] text-white px-6 py-1">
                                VIEW
                            </button>
                        </div>
                    </div>
                    <div className="pb-4">
                        <span className="font-bold">Welcome, User</span>
                    </div>
                    {/* Start: Body */}
                    <div className="grow pt-2">
                        <div className="flex gap-10">
                            <div className="w-1/3 pt-2">
                                <div className="relative bg-[#fff] rounded-xl">
                                    <div
                                        className="w-[64px] h-[64px] absolute left-[16px] -translate-y-1/2 rounded-xl"
                                        style={{
                                            background:
                                                "linear-gradient(225.58deg, #549DCD 7.84%, #2A4F67 85.19%)",
                                        }}
                                    >
                                        bgic
                                    </div>
                                    Card123
                                </div>
                            </div>
                            <div className="w-1/3 pt-2">
                                <div className="relative bg-[#fff] rounded-xl">
                                    <div className="w-[64px] h-[64px] absolute -translate-y-1/2">
                                        bgic
                                    </div>
                                    Card123
                                </div>
                            </div>
                            <div className="w-1/3 pt-2">
                                <div className="relative bg-[#fff] rounded-xl">
                                    <div className="w-[64px] h-[64px] absolute -translate-y-1/2">
                                        bgic
                                    </div>
                                    Card123
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Start: Body */}
                </div>
            </section>
        </div>
    );
}

export default LoadingSheet;
