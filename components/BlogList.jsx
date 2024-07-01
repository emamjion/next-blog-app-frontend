import { blog_data } from "@/Assets/assets";
import { useState } from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
    const [menu, setMenu] = useState("All");
    
    return (
        <div>
            <div className="flex justify-center gap-6 my-10">
                <button onClick={() => setMenu('All')} className={` ${menu === 'All' ? 'bg-[#2980b9] text-white py-1 px-4 rounded-sm' : ''}`}>All</button>
                <button onClick={() => setMenu('Technology')} className={` ${menu === 'Technology' ? 'bg-[#2980b9] text-white py-1 px-4 rounded-sm' : ''} `}>Technology</button>
                <button onClick={() => setMenu('Startup')} className={` ${menu === 'Startup' ? 'bg-[#2980b9] text-white py-1 px-4 rounded-sm' : ''} `}>Startup</button>
                <button onClick={() => setMenu('Travel')} className={` ${menu === 'Travel' ? 'bg-[#2980b9] text-white py-1 px-4 rounded-sm' : ''} `}>Travel</button>
                <button onClick={() => setMenu('Lifestyle')} className={` ${menu === 'Lifestyle' ? 'bg-[#2980b9] text-white py-1 px-4 rounded-sm' : ''} `}>Lifestyle</button>
                <button onClick={() => setMenu('Entrepreneurship')} className={` ${menu === 'Entrepreneurship' ? 'bg-[#2980b9] text-white py-1 px-4 rounded-sm' : ''} `}>Entrepreneurship</button>
            </div>
            <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
                {
                    blog_data.filter((item) => menu === 'All' ? true : item.category === menu ).map((item, index) => {
                        return <BlogItem key={index} item={item} />
                    })
                }
            </div>
        </div>
    );
};

export default BlogList;