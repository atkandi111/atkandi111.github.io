"use client"

import React from 'react'

type ArticleProp = {
    imageSrc: string
    category: string
    title: string
    date: string
}

const Tags = [
    "BREAKING", 
    "UAAP SEASON 85",
    "UAAP SEASON 78", 
    "BLUE EAGLES",
    "LADY EAGLES", 
    "CONCON",
    "BASEBALL"
]

const BreakingArticles: ArticleProp[] = [
    { 
        imageSrc: "https://theguidon.com/1112/main/wp-content/uploads/2023/06/062623-Blue-Rose-2023-CHANG-18-scaled-800x534.jpeg",
        category: "NEWS",
        title: "Return of Blue Rose toasts to Graduating Class of 2023",
        date: "JUNE 27, 2023"
    },
    { 
        imageSrc: "https://theguidon.com/1112/main/wp-content/uploads/2023/06/061023-NEWS-TEDxAteneo-Vicente-6-800x533.jpeg",
        category: "NEWS",
        title: "Onsite TEDxAteneo returns, breaks paradigms in its eighth iteration",
        date: "JUNE 11, 2023"
    },
    { 
        imageSrc: "https://theguidon.com/1112/main/wp-content/themes/main2223/assets/images/logo_gdn_16x9.png",
        category: "NEWS",
        title: "2023 Sanggunian elections results released; voter turnout stood at 14%",
        date: "APRIL 22, 2023"
    },
    { 
        imageSrc: "https://theguidon.com/1112/main/wp-content/uploads/2023/03/032723-AEWU-Walk-In-Sy-15-scaled-800x533.jpg",
        category: "NEWS",
        title: "AEWU legally set to strike, faculty and students submit open letters in solidarity",
        date: "MARCH 28, 2023"
    }
]

const UaapArticles = [
    { 
        imageSrc: "https://theguidon.com/1112/main/wp-content/uploads/2023/05/349223769_1495047941264986_9217017832096919688_n-800x534.jpg",
        category: "SPORTS",
        title: "CADs stage thrilling UAAP comeback with remarkable fifth place leap",
        date: "MAY 28, 2023"
    },
    { 
        imageSrc: "https://theguidon.com/1112/main/wp-content/uploads/2023/05/051823-UAAP-M-Football-vs-FEU-Singh-3-2-800x533.jpg",
        category: "SPORTS",
        title: "FEU defeats Ateneo for UAAP Men’s Football crown",
        date: "MAY 18, 2023"
    },
    { 
        imageSrc: "https://theguidon.com/1112/main/wp-content/uploads/2023/05/051123-UAAP-M-Football-vs-UST-Singh-14-800x533.jpg",
        category: "SPORTS",
        title: "AMFT returns to the UAAP Finals after fulfilling semis victory over UST",
        date: "MAY 11, 2023"
    },
    { 
        imageSrc: "https://theguidon.com/1112/main/wp-content/uploads/2023/05/UAAP85-3X3-WBB-SANDRA-VILLACRUZ-7090-800x534.jpg",
        category: "SPORTS",
        title: "Blue Eagles finish at third place in UAAP Season 85 Women’s 3×3",
        date: "MAY 4, 2023"
    }
]

const SecondaryArticles: React.FC = () => {
    return (
        <div className="bg-white *:px-[135px] *:pt-[30px]">
            <div className="bg-[#f7f7f7] pb-[70px] font-[chivo] space-y-[10px]">
                <h1 className="text-blue-main text-[24px] 
                pt-[15px] font-semibold"> Most read topics </h1>
                
                <h1 className="text-[16px]">
                Browse through the tags below 
                for the most read topics </h1>
                
                <div className="flex space-x-[24px] pt-[10px]">
                    { Tags.map((tag) => (
                        <button className="px-[16px] py-[12px] text-[14px] 
                        font-semibold text-blue-secondary bg-white 
                        hover:text-white hover:bg-blue-secondary"> {tag} </button>
                    ))}
                </div>
            </div>
            <div>
                <h1 className="font-[chivo] text-[24px] 
                font-[300]"> Breaking </h1>
                
                <div className="grid gap-[50px] mt-[10px]
                grid-cols-[3.5fr_2fr_2fr_2fr]">
                    { BreakingArticles.map((article) => (
                        <a href="">
                            <img className="h-[192px] w-full
                            object-cover" src={article.imageSrc} />

                            <h1 className="font-[chivo] 
                            text-[#1c4480] text-[12px] 
                            font-semibold mt-[20px]"> {article.category} </h1>

                            <h1 className="font-[source-serif-4] 
                            text-[20px] font-normal leading-[25px] 
                            mt-[4px]"> {article.title} </h1>
                            
                            <h1 className="font-[chivo] 
                            text-[12px] mt-[10px] 
                            text-gray-500"> {article.date} </h1>
                        </a>
                    ))}
                </div>
            </div>
            <hr className="mb-[36px] 
            border-b border-0 
            border-gray-300 mx-[135px]" />

            <div>
                <h1 className="font-[chivo] text-[24px] font-[300]"> UAAP Season 85 </h1>
                <div className="grid gap-[50px] mt-[10px] 
                grid-cols-[3.5fr_2fr_2fr_2fr]">
                    { UaapArticles.map((article) => (
                        <a href="">
                            <img className="h-[192px] w-full 
                            object-cover" src={article.imageSrc} />

                            <h1 className="text-[#1c4480] 
                            text-[12px] font-semibold font-[chivo] 
                            mt-[20px]"> {article.category} </h1>

                            <h1 className="font-[source-serif-4]
                            text-[20px] font-normal leading-[25px] 
                            mt-[4px]"> {article.title} </h1>

                            <h1 className="font-[chivo] 
                            text-[12px] mt-[10px] 
                            text-gray-500"> {article.date} </h1>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SecondaryArticles