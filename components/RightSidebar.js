export default function RightSidebar() {
    return (
        <div className="right-sidebar w-4/12 h-14 relative">
            <div className="border border-gray-300 rounded bg-white p-2">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl">Add to your feed</h2>
                    <button className="text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                            <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col">
                    <div className="rec-profile flex justify-between items-center my-1">
                        <div className="flex justify-between">
                            <a href="#" className="rounded-full w-12 h-12 mr-2">
                                <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png" alt="Avatar" className="rounded-full" />
                            </a>
                            <a href="#">
                                <h2>Jane Doe</h2>
                                <p className="text-gray-400 text-sm">Vice Chairman</p>
                                <p className="text-gray-400 text-sm">AVC Group</p>
                            </a>
                        </div>

                        <button className="border-2 border-blue-500 py-0 5 px-2 rounded-3xl text-blue-600 font-bold  hover:bg-blue-100"><i className="fas fa-plus"></i> Follow</button>
                    </div>

                    <div className="rec-profile flex justify-between items-center my-1">
                        <div className="flex justify-between">
                            <a href="#" className="rounded-full w-12 h-12 mr-2">
                                <img src="https://c0.klipartz.com/pngpicture/557/749/gratis-png-iconos-de-computadora-avatar-usuario-perfil-blog-personal-thumbnail.png" alt="Avatar" className="rounded-full" />
                            </a>
                            <a href="#">
                                <h2>John Doe</h2>
                                <p className="text-gray-400 text-sm">CTO</p>
                                <p className="text-gray-400 text-sm">AVC Group</p>
                            </a>
                        </div>

                        <button className="border-2 border-blue-500 py-0 5 px-2 rounded-3xl text-blue-600 font-bold  hover:bg-blue-100"><i className="fas fa-plus"></i> Follow</button>
                    </div>
                </div>

                <a href="#" className="inline-block mt-1 text-blue-600 hover:bg-blue-100">
                    View all recommendations
                </a>
            </div>

            <div className="border border-gray-300 rounded bg-white py-2 my-2">
                <div className=" flex justify-between items-center px-2 mb-2">
                    <h2 className="text-xl">Todays most viewed courses</h2>
                    <button className="text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                            <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col">
                    <a href="#" className="py-1 px-2 hover:bg-gray-300">
                        <h3 className="font-medium">1. The Six Morning Habits of High Perfor...</h3>
                        <p className="text-sm text-gray-500 pl-4">Pete Mockaitis | How to Be Awes...</p>
                    </a>

                    <a href="#" className="py-1 px-2 hover:bg-gray-300">
                        <h3 className="font-medium">2. Unconscious Bias</h3>
                        <p className="text-sm text-gray-500 pl-4">Stacey Gordon</p>
                    </a>

                    <a href="#" className="py-1 px-2 hover:bg-gray-300">
                        <h3 className="font-medium">3. Critical Thinking for Better Judgement...</h3>
                        <p className="text-sm text-gray-500 pl-4">Becki Saltzman</p>
                    </a>
                </div>

                <a href="#" className="inline-block ml-2 mt-1 text-blue-600 hover:bg-blue-100">
                    Show more on LinkedIn Learning
                </a>
            </div>

            <footer className=" p-2 text-sm text-center text-gray-700">
                <div className="flex flex-wrap justify-evenly items-center">
                    <a href="#" className="m-1 p-0.5 hover:underline hover:text-blue-500">About</a>
                    <a href="#" className="m-1 p-0.5 hover:underline hover:text-blue-500">Accessibility</a>
                    <a href="#" className="m-1 p-0.5 hover:underline hover:text-blue-500">Help Center</a>
                    <a href="#" className="m-1 p-0.5 hover:underline hover:text-blue-500">Privacy & Terms <i className="fas fa-angle-down"></i> </a>
                    <a href="#" className="m-1 p-0.5 hover:underline hover:text-blue-500">Ad Choices</a>
                    <a href="#" className="m-1 p-0.5 hover:underline hover:text-blue-500">Advertising</a>
                    <a href="#" className="m-1 p-0.5 hover:underline hover:text-blue-500">Business Services <i className="fas fa-angle-down"></i> </a>
                    <a href="#" className="m-1 p-0.5 hover:underline hover:text-blue-500">Get the LinkedIn app</a>
                    <a href="#" className="m-1 p-0.5 hover:underline hover:text-blue-500">More</a>
                </div>
                <p className="my-2"><span className="text-blue-500 font-bold">Linked</span><i className="fab fa-linkedin text-blue-600"></i> LinkedIn Corporation &copy; 2021</p>
            </footer>
        </div>
    )
}