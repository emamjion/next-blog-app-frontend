import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="flex flex-col bg-[#2c3e50]">
            <Link href='/admin' className="px-2 sm:pl-14 py-3">
                <Image
                    src={assets.logo_light}
                    alt=""
                    width={120}
                />
            </Link>
            <div className="w-20 sm:w-72 h-[100vh] relative py-12">
                <div className="w-[60%] sm:w-[90%] absolute right-0 ">
                    <Link href='/admin/addProduct' className="flex items-center border gap-3 font-medium px-3 py-2 bg-[#f1efef] rounded-l-md">
                        <Image
                            src={assets.add_icon}
                            alt=""
                            width={28}
                        />
                        <p>Add Blogs</p>
                    </Link>
                    <Link href='/admin/blogList' className="flex items-center border gap-3 font-medium px-3 py-2 bg-[#f1efef] rounded-l-md mt-5">
                        <Image
                            src={assets.blog_icon}
                            alt=""
                            width={28}
                        />
                        <p>Blog List</p>
                    </Link>
                    <Link href='/admin/subscription' className="flex items-center border gap-3 font-medium px-3 py-2 bg-[#f1efef] rounded-l-md mt-5">
                        <Image
                            src={assets.email_icon}
                            alt=""
                            width={28}
                        />
                        <p>Subscription</p>
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default Sidebar;