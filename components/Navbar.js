import { useSession } from 'next-auth/react';

export default function Navbar() {
    const { data: session } = useSession();
    return (
        <header className="bg-white w-full fixed top-0 left-0 right-0 z-50">
        <div className="w-11/12 bg-white  h-full m-auto flex justify-between items-center  ">
            <div className=" flex items-center">
                <a href="/" className="logo text-4xl mr-1.5">
                    <i className="fab fa-linkedin text-blue-500"></i>
                </a>
                <div className="search bg-gray-200 mt-1 px-1 rounded flex">
                    <i className="fas fa-search p-1 flex justify-center items-center"></i>
                    <input type="text" placeholder="Search" className="bg-transparent p-1 outline-none " />
                </div>
            </div>
            <div className=" h-full flex justify-center items-center ">
                <ul className=" h-full flex justify-center items-center">
                    <li className="h-full border-b-2 border-black">
                        <a href="#" className="h-full flex flex-col justify-between items-center text-center text-black p-1 px-2 ">
                            <i className="fas fa-home text-xl relative"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="h-full">
                        <a href="#" className="h-full flex flex-col justify-between items-center text-center text-gray-600 hover:text-black p-1 px-2">
                            <i className="fas fa-user-friends text-xl relative"></i>
                            <span>My Network</span>
                        </a>
                    </li>
                    <li className="h-full">
                        <a href="#" className="h-full flex flex-col justify-between items-center text-center text-gray-600 hover:text-black p-1 px-2">
                            <i className="fas fa-briefcase text-xl relative"></i>
                            <span>Jobs</span>
                        </a>
                    </li>
                    <li className="h-full">
                        <a href="#" className="h-full flex flex-col justify-between items-center text-center text-gray-600 hover:text-black p-1  px-2">
                            <span>Messaging</span>
                        </a>
                    </li>
                    <li className="h-full">
                        <a href="#" className="h-full flex flex-col justify-between items-center text-center text-gray-600 hover:text-black p-1  px-2">
                            <span>Notifications</span>
                        </a>
                    </li>
                    <li className="h-full">
                        <a href="#" className="h-full flex flex-col justify-between items-center text-center text-gray-600 hover:text-black p-1  px-2">
                            <img src={session?.user?.image} alt="Me" className="w-7 h-7 rounded-full" />
                            <span>Me<i className="fas fa-caret-down"></i></span>
                        </a>
                    </li>
                    <li className="h-full  border-l-2 border-gray-300">
                        <a href="#" className="h-full flex flex-col justify-between items-center text-center text-gray-600 hover:text-black p-1  px-2">
                            <i className="fas fa-th text-xl relative"></i>
                            <span><i className="fas fa-caret-down"></i></span>
                        </a>
                    </li>
                    <li className="h-full  border-l-2 border-gray-300">
                        <a href="#" className="h-full flex flex-col justify-between items-center text-center text-gray-600 hover:text-black p-1  px-2">
                            <i className="fas fa-th text-xl relative"></i>
                            <span><i className="fas fa-caret-down"></i></span>
                        </a>
                    </li>
                </ul>
                <a href="#" className="w-32 h-full p-1 flex justify-center items-center text-yellow-900 text-center hover:underline">
                Try Premium Free for 1 Month
                </a>
            </div>

        </div>
    </header>
    );
}