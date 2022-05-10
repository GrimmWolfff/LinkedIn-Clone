import React from 'react'
import { useSession } from 'next-auth/react';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';

export default function LeftSidebar() {
    const { data: session } = useSession();
    return (
        <div className="left-sidebar w-3/12">
                <div className="border border-gray-300 rounded bg-white">
                    <div className="h-16 rounded-t bg-gradient-to-r from-green-400 to-blue-500"></div>
                    <div className="text-center mb-4">
                        <a href="#">
                            <div className="bg-white w-20 h-18 m-auto rounded-full p-0.5 transform -translate-y-8">
                                <img src={session?.user?.image} alt="Not found" className="w-20 h-20" />
                            </div>
                            <h2 className="text-xl hover:underline">
                                {session?.user.name}
                            </h2>
                        </a>
                        <p className="text-gray-400 mt-1">
                            Full-stack developer
                        </p>
                    </div>

                    <div className="border-t border-b border-gray-400 text-sm">
                        <a href="#" className="text-gray-600 flex justify-between items-center my-1 p-1 hover:bg-gray-300">
                            <p>
                            Connections <br />
                                <span className="text-black">Grow your network</span>
                            </p>
                                <span className="text-blue-600">598</span>
                        </a>
                        <a href="#" className="text-gray-600 flex justify-between items-center my-1 p-1 hover:bg-gray-300">
                            <span>Who viewed your profile</span>
                            <span className="text-blue-600">109</span>
                        </a>
                        <a href="#" className="block text-gray-600  my-1 p-1 hover:bg-gray-300 hover:underline">
                            <span>Access exclusive tools & insights</span> <br />
                            <span className="text-bold text-black hover:text-blue-700 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" className="mercado-match mr-1" width="24" height="24" focusable="false">
                                    <path d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z" fill="#f8c77e"></path>
                                    <path d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z" fill="#e7a33e"></path>
                                </svg>
                                Try Premium Free for 1 Month 
                            </span>
                        </a>
                    </div>
                    <a href="#" className="h-8 py-6 px-2 rounded-b flex items-center hover:bg-gray-300">
                        <BsFillBookmarkPlusFill />
                        My items 
                    </a>
                </div>
            <div className="recents sticky top-20 my-2 pt-2 border border-gray-300 rounded bg-white">
                <p className="text-black text-sm pl-2">Recent</p>
                <a href="#" className=" flex items-center text-gray-600 py-0.5 px-2 hover:text-black hover:bg-gray-300">
                    <span className="mr-4 text-xl font-bold">#</span>
                    <span className=" text-sm">jobpostings</span>
                </a>
                <a href="#" className=" flex items-center text-gray-600 py-0.5 px-2 hover:text-black hover:bg-gray-300">
                    <span className="mr-4 text-xl font-bold">#</span>
                    <span className=" text-sm">marketing</span>
                </a>
                <a href="#" className=" flex items-center text-gray-600 py-0.5 px-2 hover:text-black hover:bg-gray-300">
                    <span className="mr-4 text-xl font-bold">#</span>
                    <span className=" text-sm">careers</span>
                </a>
                <a href="#" className="text-blue-500 text-sm flex justify-between items-center py-0 5 px-2 hover:underline hover:text-blue-700">
                Groups
                </a>
                <a href="#" className="text-blue-500 text-sm flex justify-between items-center py-0 5 px-2  hover:text-blue-700">
                    <span className="hover:underline">Events</span>
                    <span className="text-2xl text-gray-500 rounded-full inline-block w-6 h-6 flex justify-center items-center pb-1.5 hover:no-underline hover:bg-gray-300">+</span>
                </a>

                <a href="#" className="text-blue-500 text-sm flex justify-between items-center py-0 5 px-2 hover:underline hover:text-blue-700">
                Followed Hashtags
                </a>

                <a href="#" className=" flex items-center text-gray-600 py-0.5 px-2 hover:text-black hover:bg-gray-300">
                    <span className="mr-4 text-xl font-bold">#</span>
                    <span className=" text-sm">careers</span>
                </a>

                <a href="#" className=" flex items-center text-gray-600 py-0.5 px-2 hover:text-black hover:bg-gray-300">
                    <span className="mr-4 text-xl font-bold">#</span>
                    <span className=" text-sm">careers</span>
                </a>

                <a href="#" className=" flex items-center text-gray-600 py-0.5 px-2 hover:text-black hover:bg-gray-300">
                    <span className="mr-4 text-xl font-bold">#</span>
                    <span className=" text-sm">careers</span>
                </a>

                <a href="#" className="block border-t border-gray-300 text-gray-600 py-2 px-2 text-sm text-center rounded-b hover:text-black hover:bg-gray-300">
                Discover more
                </a>

            </div>
        </div>
    );
}
