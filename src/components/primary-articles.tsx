"use client"

import React from 'react'
import { ExternalLink } from 'lucide-react'

type ArticleProp = {
    imageSrc: string
    category: string
    title: string
    content: string
    date: string
}

const ArticleList: ArticleProp[] = [
    {
        imageSrc: "https://theguidon.com/1112/main/wp-content/uploads/2024/09/130824-AugSept-Sports-JOF-Web-High-Fidelity-Pimentel-800x600.png",
        category: "SPORTS",
        title: "Reminiscing the Philippine Centennial Team's history-setting run in Paris",
        content: "THREE WEEKS have now passed since the Olympic flame in Paris, the exotic French capital, was extinguished, signifying the end...",
        date: "SEPTEMBER 2, 2024"
    },
    {
        imageSrc: "https://theguidon.com/1112/main/wp-content/uploads/2024/08/10-083024-Cheer-Rally-Tan-17-800x533.jpg",
        category: "SPORTS",
        title: "Ateneo Cheer Rally 2024 fires up Blue Eagle community for upcoming UAAP Season 87 opener",
        content: "AN INSPIRING show of school spirit electrified the Ateneo community who once again gathered at the College Covered Courts to...",
        date: "AUGUST 31, 2024"
    },
    {
        imageSrc: "https://theguidon.com/1112/main/wp-content/uploads/2024/08/081624-Inquiry-Filipino-as-a-medium-of-learning-800x533.jpg",
        category: "INQUIRY",
        title: "The depreciation and intellectualization of the Filipino language",
        content: "FILIPINO IS ironically a subject often sidelined in the Philippines, as evidenced by the use of English as the official...",
        date: "AUGUST 27, 2024"
    },
    {
        imageSrc: "https://theguidon.com/1112/main/wp-content/uploads/2024/08/082624-VLeague-M-Volleyball-vs-NU-Breaking-Santos-1-800x533.jpg",
        category: "SPORTS",
        title: "ICYMI: Ateneo falls to 1-4 in V-League tournament after deflating five-set loss to NU",
        content: "DESPITE A show of athletic prowess on the V-League taraflex, the Ateneo Blue Eagles ran out of gas in a...",
        date: "AUGUST 26, 2024"
    },
    {
        imageSrc: "https://theguidon.com/1112/main/wp-content/uploads/2024/08/AWFT-PRESEASON-800x533.jpeg",
        category: "SPORTS",
        title: "ICYMI: Ateneo falls to Tuloy FC in thrilling encounter",
        content: "AFTER AN entertaining game filled with high-octane scoring, the Ateneo Women's Football Team (AWFT) bowed out of the United Women's...",
        date: "AUGUST 20, 2024"
    }
]

const PrimaryArticles: React.FC = () => {
    return (
        <div className="bg-white px-[135px]">  
            <div className="py-[50px] gap-x-[48px] gap-y-[24px] 
            grid grid-cols-[3.5fr_2fr_2fr_2fr] auto-rows-min"
            >
                    <a href="" className="col-span-2 row-span-2">
                        <img className="h-[400px] w-full object-cover" 
                        src={ArticleList[0].imageSrc} />

                        <h1 className="text-[#1c4480] 
                        text-[12px] font-semibold font-[chivo] 
                        mt-[20px]"> {ArticleList[0].category} </h1>

                        <h1 className="font-[source-serif-4] 
                        text-[27px] font-thin leading-[27px] 
                        mt-[7px]"> {ArticleList[0].title} </h1>

                        <h1 className="font-[source-serif-4] 
                        text-[17px] font-thin leading-[20px] 
                        mt-[7px]"> {ArticleList[0].content} </h1>
                        
                        <h1 className="font-[chivo] text-[12px] 
                        mt-[10px] text-gray-500"> {ArticleList[0].date} </h1>
                    </a>
                {ArticleList.slice(1).map((article) => (
                    <a href="">
                        <img className="h-[180px] w-full object-cover" 
                        src={article.imageSrc} />
                        
                        <h1 className="text-[#1c4480] text-[12px] 
                        font-semibold font-[chivo] mt-[20px]"> 
                        {article.category} </h1>

                        <h1 className="font-[source-serif-4] 
                        text-[22px] font-medium leading-[25px] 
                        mt-[4px]"> {article.title} </h1>

                        <h1 className="font-[source-serif-4] 
                        text-[17px] font-thin leading-[20px] 
                        mt-[7px]"> {article.content} </h1>

                        <h1 className="font-[chivo] text-[12px] 
                        mt-[10px] text-gray-500"> {article.date} </h1>
                    </a>
                ))}
            </div>
            <div className="border-t border-gray-500/50 
            font-[chivo] pt-[21px] pb-[31px] space-y-[30px]"
            >
                <h1 className="text-[23px] tracking-[0.75px] 
                font-[300]"> Most recent issues </h1>

                <div className="flex justify-end">
                    <button className="bg-blue-main 
                    rounded-xl flex items-center 
                    px-[24px] py-[16px] space-x-[10px]"
                    > 
                        <h1 className="text-white text-[14px] font-semibold"> 
                        View the rest of the issues </h1> 
                        
                        <ExternalLink width="20px" height="20px" color="white" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PrimaryArticles;