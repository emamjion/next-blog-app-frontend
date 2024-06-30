import { assets } from "@/Assets/assets";
import Image from "next/image";

const Header = () => {
    return (
        <div className="px-5 py-5 md:px-12 lg:px-28">
            <div className="flex items-center justify-between">
                <Image
                    src={assets.logo}
                    className="w-[130px] sm:w-auto"
                    alt="Logo"
                    width={180}
                />
                <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 bg-[#2980b9] text-[#ecf0f1] rounded-md cursor-pointer hover:text-[#2980b9] hover:border hover:border-[#2980b9] hover:bg-transparent duration-500">Get Started</button>
            </div>
            <div className="text-center my-8">
                <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
                <p className="mt-10 max-w-[740px] m-auto text-sm sm:text-base">
                    Welcome to my blog, where creativity meets inspiration! Explore thought-provoking articles, stunning visuals, and engaging stories on lifestyle, travel, tech, and entrepreneurship
                </p>
                <form className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-[#2980b9] rounded-md">
                    <input 
                        type="email" 
                        placeholder="Write  your email" 
                        className="pl-4 outline-none rounded-md" 
                    />
                    <button className="bg-[#2980b9] border-l border-[#2980b9] rounded-r-sm hover:bg-transparent hover:text-[#2980b9] duration-500 text-white font-medium py-4 px-4 sm:px-8" type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Header;