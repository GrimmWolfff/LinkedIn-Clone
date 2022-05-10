import { BsCardImage, BsCalendarEventFill, BsYoutube } from 'react-icons/bs';
import { MdArticle } from 'react-icons/md';
import { useSession } from 'next-auth/react';

export default function Postform () {
    const { data: session } = useSession();
    return (
        <form className="bg-white p-2 border border-gray-300 rounded">
            <div className="flex h-12 mb-2 px-2 border border-gray-300 rounded-3xl hover:bg-gray-200">
                <div className="w-12 h-full flex justify-center items-center">
                    <img src={session.user.image} alt="Not found" className="rounded-full"/>
                </div>
                <input type="text" placeholder="Start a post" className="bg-transparent w-full h-full p-4 outline-none placeholder-gray-500" />
            </div>
            <div className="py-2 flex justify-between items-center">
                <button className="py-3 px-2 rounded flex items-center hover:bg-gray-200">
                    <BsCardImage className="text-blue-300"/> 
                    &nbsp;
                    <span className="font-bold text-gray-600">Photo</span>
                </button>
                <button className="py-3 px-2 rounded flex items-center hover:bg-gray-200">
                    <BsYoutube className="text-green-300"/>
                    &nbsp;
                    <span className="font-bold text-gray-600">Video</span>
                </button>
                <button className="py-3 px-2 rounded flex items-center hover:bg-gray-200">
                    <BsCalendarEventFill className="text-orange-300"/>
                    &nbsp;
                    <span className="font-bold text-gray-600">Event</span>
                </button>
                <button className="py-3 px-2 rounded flex items-center hover:bg-gray-200">
                    <MdArticle className="text-red-300"/>
                    &nbsp;
                    <span className="font-bold text-gray-600">Write article</span>
                </button>
            </div>
            <button className="outline-none w-full h-8 flex items-center text-xs">
                <div className="h-0.5 w-11/12 bg-gray-300"></div>
                <p className=" w-3/12 text-right font-light">
                    Sort by: 
                    <span className="font-bold">
                    Top <i className="fas fa-caret-down"></i>
                    </span>
                </p>
            </button>
        </form>
    )
}