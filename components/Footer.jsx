import { assets } from "@/Assets/assets";
import Image from "next/image";

const Footer = () => {
    return (
        <div className='py-5 flex items-center justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-[#ecf0f1]'>
            <Image
                src={assets.logo}
                width={120}
                alt=""
            />
            <p className="text-sm">All right reserved. Copyright @blogger</p>
            <div className="flex ">
                <Image
                    src={assets.facebook_icon}
                    alt=""
                    width={40}
                    className="cursor-pointer"
                />
                <Image
                    src={assets.twitter_icon}
                    alt=""
                    width={40}
                    className="cursor-pointer"
                />
                <Image
                    src={assets.googleplus_icon}
                    alt=""
                    width={40}
                    className="cursor-pointer"
                />
            </div>
        </div>
    );
};

export default Footer;