import { FiThumbsUp } from 'react-icons/fi';
import { FaComment, FaShare, FaGlobeAsia, FaHeart, FaPaperPlane } from 'react-icons/fa';


export default function Post() {
    return (
        <section className="post bg-white py-2 my-2 border rounded">
            <div className="post-header p-2 flex items-start">
                <a href="#" className="w-12 h-12 mr-2">
                    <img src="https://homevest.com/wp-content/uploads/2019/05/female1-512.png" alt="image" />
                </a>

                <a href="#" >
                    <h3 className="flex items-center" >
                        <span className="text-gray-700 font-bold hover:text-blue-500 hover:underline ">Harriet Best</span>
                        <span className="w-1 h-1  mx-1.5 bg-gray-600 rounded-full self-center"></span>
                        <span className="text-gray-500 font-light">Following</span>
                    </h3>

                    <p className="text-sm text-gray-500">
                    Founder and Writer at Harriet Photography
                    </p>

                    <p className="time text-sm text-gray-500 flex items-center">
                        <span>1d</span>
                        <span className="w-1 h-1  mx-1.5 bg-gray-600 rounded-full self-center"></span>
                        <FaGlobeAsia />
                    </p>
                </a>
                <button className="dots w-7 h-7 flex justify-center items-center rounded-full hover:bg-gray-200">
                    <span className="w-1 h-1 mr-0.5 bg-gray-600 rounded-full"></span>
                    <span className="w-1 h-1 mr-0.5 bg-gray-600 rounded-full"></span>
                    <span className="w-1 h-1 mr-0.5 bg-gray-600 rounded-full"></span>
                </button>

            </div>
            <div className="px-2">
                <p className="py-2">
                    Checkout my new photos from Melbourne City
                </p>
                <a href="#" className="text-blue-600 hover:underline">https://harrietfh.me</a>
            </div>
            <img src="https://images.unsplash.com/photo-1494236472818-d35e50e604cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="Melbourne" className="w-full h-50 my-2" />
            <div className="mx-3 px-2 h-8 m-auto border-b border-gray-300">
                <a href="#" className="h-full flex items-center">
                    <FiThumbsUp className="text-blue-600" />
                    &nbsp;
                    <FaHeart className="text-red-600" />
                    <span className="count text-xs mb-0.5 ml-2 hover:text-blue-500 hover:underline">105</span>
                </a>
            </div>

            <div className="mt-1 mx-3 flex items-center">
                <button className="flex  outline-none rounded py-2 px-2  text-gray-600 hover:bg-gray-200 leading-4">
                    <FiThumbsUp />
                    &nbsp;
                    <span className="mt-0.25">Like </span> 
                </button>
                <button className="flex  outline-none rounded py-2 px-2  text-gray-600 hover:bg-gray-200 leading-4">
                    <FaComment /> 
                    &nbsp;
                    <span className="mt-0.25">Comment</span>  
                </button>
                <button className="flex  outline-none rounded py-2 px-2  text-gray-600 hover:bg-gray-200 leading-4">
                    <FaShare />
                    &nbsp;
                    <span className="mt-0.25">Share</span>  
                </button>
                <button className="flex  outline-none rounded py-2 px-2  text-gray-600 hover:bg-gray-200 leading-4">
                    <FaPaperPlane />
                    &nbsp;
                    <span className="mt-0.25">Send</span>  
                </button>
            </div>
        </section>
    );
}