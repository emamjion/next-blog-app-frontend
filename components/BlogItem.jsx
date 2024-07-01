import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({item}) => {
    const { id, title, category, image, description} = item;
    return (
        <div className="max-w-[330px] sm:max-w-[300px] bg-[#ecf0f1] border border-[#bdc3c7] rounded-md hover:shadow-md duration-500">
            <Link href={`/blogs/${id}`}>
                <Image
                    src={image}
                    alt=""
                    width={400}
                    height={400}
                    className=" rounded-t-md"
                />
            </Link>
            <p className="ml-5 mt-5 px-1 inline-block bg-[#2980b9] text-white">{category}</p>
            <div className="p-5">
                <h5 className="mb-2 text-lg font-medium tracking-tight text-[#3498db]">{title}</h5>
                <p className="mb-3 text-sm tracking-tight text-[#2c3e50]">
                    {description}
                </p>
                {/* TODO: Button will put on bottom */}
                <div className="bottom-0">
                    <Link href={`/blogs/${id}`} className="inline-flex items-center py-2 font-semibold text-center cursor-pointer">
                        Read More
                        <Image src={assets.arrow} alt="" width={12} className="ml-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;