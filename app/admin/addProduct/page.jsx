"use client";

import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
    
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        title: '',
        description: '',
        category: 'Startup',
        author: 'John Duo',
        authorImg: '/author_img.png'
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data, [name] : value}));
    };

    const onSubmitHandler = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('author', data.author);
        formData.append('authorImg', data.authorImg);
        formData.append('image', image);
        const response = await axios.post('/api/blog', formData);
        if(response.data.success){
            toast.success(response.data.msg);
        }
        else{
            toast.error('Error');
        }
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
                <p className="text-xl font-medium">Upload Thumbnail</p>
                <label htmlFor="image">
                    <Image
                        src={!image ? assets.upload_area : URL.createObjectURL(image)}
                        width={140}
                        height={70}
                        alt=""
                        className="mt-4"
                    />
                </label>
                <input 
                    type="file" 
                    name="" 
                    id="image"
                    hidden
                    required
                    onChange={(e) => setImage(e.target.files[0])}
                />
                <p className="text-xl mt-4 font-medium">Blog Title</p>
                <input 
                    type="text" 
                    name="title" 
                    onChange={onChangeHandler}
                    value={data.title}
                    placeholder="Add blog title"
                    required
                    className="w-full sm:w-[500px] mt-4 px-4 py-3 border border-[#cac9c9] rounded-md"
                />
                <p className="text-xl mt-4 font-medium">Blog Description</p>
                <textarea 
                    placeholder="Add blog description"
                    required
                    name="description"
                    onChange={onChangeHandler}
                    value={data.description}
                    rows={6}
                    className="w-full sm:w-[500px] mt-4 px-4 py-3 border border-[#cac9c9] rounded-md resize-none focus:ring-1 focus:ring-[#2c3e50]"
                />
                <p className="text-xl mt-4 font-medium">Blog Category</p>
                <select name="category" onChange={onChangeHandler} value={data.category} className="w-60 px-4 py-3 mt-4 border border-[#cac9c9] rounded-md">
                    <option value="Startup">Startup</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Travel">Travel</option>
                    <option value="Technology">Technology</option>
                    <option value="Entrepreneurship">Entrepreneurship</option>
                </select>
                <br />
                <input 
                    type="submit" 
                    value="Add"
                    className="mt-8 w-40 h-12 bg-[#2980b9] text-white cursor-pointer hover:bg-[#1e5c86] rounded-md duration-500"
                />
            </form>
        </div>
    );
};

export default AddProduct;