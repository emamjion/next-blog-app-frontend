"use client";

import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SingleBlog = ({ params }) => {
    const [data, setData] = useState(null);
    const fetchBlogData = () => {
        for(let i = 0; i < blog_data.length; i++)
            {
                if (Number(params.id) === blog_data[i].id) {
                    setData(blog_data[i]);
                    console.log(blog_data[i]);
                    break;
                }
            }
    };

    useEffect(() => {
        fetchBlogData();
    }, [])
    
    return (
        data ? <>
            <div className="bg-[#ecf0f1] py-5 px-5 md:px-12 lg:px-28">
                <div className="flex items-center justify-between">
                    <Link href='/'>
                        <Image
                            src={assets.logo}
                            width={180}
                            alt=""
                            className="w-[130px] sm:w-auto"
                        />
                    </Link>
                    <button className="font-medium py-1 px-3 sm:py-3 sm:px-6 bg-[#2980b9] text-[#ecf0f1] rounded-md cursor-pointer hover:text-[#2980b9] hover:border hover:border-[#2980b9] hover:bg-transparent duration-500">Get Started</button>
                </div>
                <div className="text-center my-24">
                    <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto ">{data.title}</h1>
                    <Image
                        src={data.author_img}
                        height={60}
                        width={60}
                        alt=""
                        className="mx-auto mt-6 border border-white rounded-full"
                    />
                    <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>
                </div>
            </div>
            <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
                <Image
                    src={data.image}
                    width={1280}
                    height={720}
                    alt=""
                    className="object-cover border-4 border-white"
                />
                <h1 className="my-8 text-[26px] font-semibold">Introduction: </h1>
                <p>{data.description}</p>
                <h3 className="my-5 text-[18px] font-semibold">Step 1: Self-Reflection and Goal</h3>
                <p className="my-3">
                    Creating a successful startup requires more than just a great idea; it necessitates a clear, actionable roadmap to guide your venture from ideation to execution. This process involves defining your vision, setting achievable milestones, and systematically addressing potential challenges. By outlining a strategic plan, you can effectively allocate resources, manage risks, and measure progress. This guide aims to provide you with the essential steps and practical insights needed to transform your concept into a thriving business. Whether you are a first-time entrepreneur or looking to refine your approach, these strategies will help ensure your startups success and sustainability in a competitive market.
                </p>
                <h3 className="my-5 text-[18px] font-semibold">Step 2: Learn how to outline a clear, actionable roadmap for your startup, ensuring success from ideation to execution.</h3>
                <p className="my-3">
                    Starting a successful startup involves more than just a brilliant idea; it requires a well-structured and actionable roadmap to navigate the journey from concept to execution. This roadmap serves as your strategic guide, helping you set clear objectives, allocate resources effectively, and tackle challenges head-on. With a solid plan in place, you can transform your innovative idea into a thriving business venture.
                </p>
                <p className="my-3">
                    In the first phase, ideation, you will refine your concept, identify your target market, and validate your business idea through research and feedback. This foundation is crucial for building a startup that meets real needs and stands out in the marketplace. As you move into the planning and execution stages, you will develop a business model, create a marketing strategy, and set up operational processes. This structured approach ensures you stay focused, make informed decisions, and adapt to changing circumstances, ultimately driving your startup towards long-term success.
                </p>
                <p className="my-3">
                    The final phase involves scaling and sustaining your business. Here, you will focus on growth strategies, customer retention, and continuous innovation. By setting measurable goals and regularly reviewing your progress, you can ensure that your startup not only survives but thrives in a competitive landscape. This guide will provide you with the tools and insights needed to outline a clear, actionable roadmap, turning your startup dream into a reality.
                </p>
                <h3 className="my-5 text-[18px] font-semibold">Step 3: Discover how to create a strategic roadmap for your startup, guiding you from initial idea to successful execution and growth.</h3>
                <p className="my-3">
                    Creating a strategic roadmap is crucial for transforming your startup idea into a successful venture. This roadmap involves defining clear goals, identifying key milestones, and effectively allocating resources. By establishing a structured plan, you ensure focus and informed decision-making, maintaining direction throughout your startup journey. A well-crafted roadmap enables you to navigate challenges, measure progress, and adapt to changes, ensuring your startups growth and sustainability in a competitive market. With clear objectives and a solid plan, you can confidently steer your venture from initial idea to successful execution, driving long-term growth and positioning your startup for success.
                </p>
                <h3 className="my-5 text-[18px] font-semibold">Summary:</h3>
                <p className="my-3">
                    A strategic roadmap serves as a comprehensive guide for your startup, detailing every step from ideation to execution. Initially, you refine your concept, conduct market research, and validate your business idea to ensure it meets real needs. This foundation is vital for distinguishing your startup in the marketplace. As you progress, developing a business model, creating a marketing strategy, and setting up operational processes become crucial. These steps ensure you stay focused and make informed decisions. The final phase involves scaling your business, focusing on growth strategies, customer retention, and continuous innovation. Regularly reviewing progress and setting measurable goals ensure your startup thrives. This guide provides the necessary tools and insights to transform your startup dream into a reality, navigating the competitive landscape with confidence and clarity.
                </p>
                <div className="my-24">
                    <p className="text-black font-semibold my-4">Share this blog on social media</p>
                    <div className="flex items-center gap-3">
                        <Image
                            src={assets.facebook_icon}
                            alt=""
                            width={50}
                            className="cursor-pointer"
                        />
                        <Image
                            src={assets.googleplus_icon}
                            alt=""
                            width={50}
                            className="cursor-pointer"
                        />
                        <Image
                            src={assets.twitter_icon}
                            alt=""
                            width={50}
                            className="cursor-pointer"
                        />
                    </div>
                </div>
            </div>
            
            {/* Footer */}
            <Footer/>
        </>
        :
        <></>
    );
};

export default SingleBlog;