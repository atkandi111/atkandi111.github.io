"use client"

import React from 'react'

type ArticleProp = {
    imageSrc?: string
    title: string
    date: string
}

type CategoryProp = {
    category: string
    color: string
    articleList: ArticleProp[]
}

const CategoryArticles: CategoryProp[] = [
    {
        category: "NEWS", 
        color: "#1c4480",
        articleList: [
            {
                imageSrc: "https://theguidon.com/1112/main/wp-content/uploads/2024/08/THUMBNAIL-080524-OrSem-Day-1-Santos-3-400x267.jpg",
                title: "Freshmen and transferees encouraged to pursue ambitions at Ateneo in OrSem: Mithi",
                date: "AUGUST 12, 2024"
            },
            {
                title: "ADMU enters a 2-year partnership with Shell Energy Philippines and SolX Technologies, transitions to being powered by renewable energy",
                date: "JULY 26, 2024"
            },
            {
                title: "AEWU to prioritize overtime pays and employee benefits for 2024–2029 CBA negotiations",
                date: "JULY 1, 2024"
            },
            {
                title: "Class of 2024 reminded to commit to genuine service in Higher Education Commencements rites",
                date: "JUNE 25, 2024"
            }
        ]
    },
    {
        category: "OPINION",
        color: "#4c4c4e",
        articleList: [
            {
                imageSrc: "https://theguidon.com/1112/main/wp-content/uploads/2023/05/00-Chalk-Marks-1-400x247.png",
                title: "Paano masusukat ang pagiging Atenista?",
                date: "JUNE 23, 2024"
            },
            {
                title: "A losing game",
                date: "MAY 24, 2024"
            },
            {
                title: "To be trapped in a box",
                date: "MAY 24, 2024"
            },
            {
                title: "Nevertheless, I hold out hope",
                date: "MAY 22, 2024"
            }
        ]
    },
    {
        category: "SPORTS",
        color: "#1c4480",
        articleList: [
            {
                imageSrc: "https://theguidon.com/1112/main/wp-content/uploads/2024/09/130824-AugSept-Sports-JOF-Web-High-Fidelity-Pimentel-400x300.png",
                title: "Reminiscing the Philippine Centennial Team’s history-setting run in Paris",
                date: "SEPTEMBER 2, 2024"
            },
            {
                title: "Ateneo Cheer Rally 2024 fires up Blue Eagle community for upcoming UAAP Season 87 opener",
                date: "AUGUST 31, 2024"
            },
            {
                title: "ICYMI: Ateneo falls to 1-4 in V-League tournament after deflating five-set loss to NU",
                date: "AUGUST 26, 2024"
            },
            {
                title: "ICYMI: Ateneo falls to Tuloy FC in thrilling encounter",
                date: "AUGUST 20, 2024"
            }
        ]
    },
    {
        category: "BEYOND LOYOLA",
        color: "#d4b835",
        articleList: [
            {
                imageSrc: "https://theguidon.com/1112/main/wp-content/uploads/2024/07/Sourced-ADMUxSolX-Signing-Ateneo-De-Manila-University-2.jpg",
                title: "Blue-washing? A look into the Ateneo energy supply partnership",
                date: "JULY 26, 2024"
            },
            {
                title: "Women at work",
                date: "MAY 9, 2024"
            },
            {
                title: "Counterproductive security",
                date: "MAY 9, 2024"
            },
            {
                title: "Position of the opposition",
                date: "MAY 9, 2024"
            }
        ]
    },
    {
        category: "FEATURES",
        color: "#009c65",
        articleList: [
            {
                imageSrc: "https://theguidon.com/1112/main/wp-content/uploads/2024/05/040624-Features-The-anik-anik-girlie-Santos-27-1-400x267.jpg",
                title: "Ang dami mong kung ano-ano: An inquiry into the anik-anik girlie",
                date: "MAY 28, 2024"
            },
            {
                title: "Kuwento ng mga barbero",
                date: "MAY 20, 2024"
            },
            {
                title: "Mapping the Ateneo’s security guards",
                date: "MAY 9, 2024"
            },
            {
                title: "Position of the opposition",
                date: "MAY 9, 2024"
            }
        ]
    },
    {
        category: "INQUIRY",
        color: "#8f181b",
        articleList: [
            {
                imageSrc: "https://theguidon.com/1112/main/wp-content/uploads/2024/09/Copy-of-140824-Implications-of-Katipunan-Urban-Planning-on-Flooding-Abad-1-2-400x267.jpg",
                title: "Rising waters and towers: Reassessing Katipunan flooding and urban planning",
                date: "SEPTEMBER 5, 2024"
            },
            {
                title: "The depreciation and intellectualization of the Filipino language",
                date: "AUGUST 27, 2024"
            },
            {
                title: "ADMU enters a 2-year partnership with Shell Energy Philippines and SolX Technologies, transitions to being powered by renewable energy",
                date: "JULY 26, 2024"
            },
            {
                title: "Ateneo Biodiversity Check: How green is the Blue and White?",
                date: "MAY 22, 2024"
            }
        ]
    },
    {
        category: "RESEARCH",
        color: "#5c0f11",
        articleList: [
            {
                imageSrc: "https://theguidon.com/1112/main/wp-content/uploads/2024/01/101918-PIPAC-Camacho-11-scaled-400x267.jpg",
                title: "PIPAC: Transforming Philippine industry through science",
                date: "JANUARY 23, 2024"
            },
            {
                title: "Beating the holiday blues",
                date: "JANUARY 2, 2024"
            },
            {
                title: "SOSE hosts ICAM year-long engineering program",
                date: "OCTOBER 19, 2023"
            },
            {
                title: "Ateneo unveiled: A glimpse into campus biodiversity",
                date: "OCTOBER 10, 2023"
            }
        ]
    },
    {
        category: "VANTAGE",
        color: "#5e61ba",
        articleList: [
            {
                imageSrc: "https://vantage.theguidon.com/wp-content/uploads/2024/09/090524-Mula-sa-Katipunan-tungo-sa-Buwan-Ochoa-1.jpg",
                title: "Mula sa Katipunan, tungo sa buwan: Stories of love and defiance from the alumni cast of Mula sa Buwan",
                date: "AUGUST 5, 2024"
            },
            {
                title: "Love as revolution: Barefoot Theatre Collaborative’s Mula Sa Buwan",
                date: "JULY 27, 2024"
            },
            {
                title: "Vantage Magazine's 2024 Oscars Picks and Predictions",
                date: "FEBRUARY 10, 2024"
            },
            {
                title: "Greek myths, Greek gods, and a good time: blueREP’s Orphie & the Book of Heroes",
                date: "JANUARY 29, 2024"
            }
        ]
    },
    {
        category: "VIDEOS",
        color: "#dc676a",
        articleList: []
    },
    {
        category: "PHOTOS",
        color: "#e4bb4e",
        articleList: []
    },
    {
        category: "BROADCAST NEWS",
        color: "#915f0f",
        articleList: []
    },
    {
        category: "GRAPHIC DESIGN",
        color: "#6a91cd",
        articleList: []
    },
    {
        category: "INTERACTIVE ARTICLES",
        color: "#5ebc91",
        articleList: []
    }
]

const TertiaryArticles: React.FC = () => {
    return (
        <div className="bg-white *:px-[135px] py-[56px]">
            <h1 className="mb-[16px] font-[chivo] text-[24px] font-[300]"> Multimedia </h1>
            <hr className="mb-[36px] border-b border-0 border-gray-300 mx-[135px]" />
            <div className="h-[32px]"></div>

            <h1 className="mt-[56px] mb-[16px] font-[chivo] text-[24px] font-[300]"> Categories </h1>
            <hr className="mb-[36px] border-b border-0 border-gray-300 mx-[135px]" />
            <div className="grid grid-cols-3 gap-x-[48px] gap-[50px]">
                {CategoryArticles.map((item) => (
                    <div className="space-y-[16px]">
                        <div className="flex items-center font-[chivo]">
                            <h1 style={{ backgroundColor: item.color }} 
                            className="px-[8px] py-[3px] font-semibold 
                            text-white text-[16px]"> {item.category} </h1>

                            <button className="text-gray-500/50 text-end text-[12px]
                            underline decoration-blue-secondary flex-grow"> 
                                SEE ALL 
                            </button>
                        </div>
                        {item.articleList.length > 0 &&
                            <a href="" className="flex"> 
                                <img className="h-[128px] mr-[16px] 
                                aspect-square object-cover" 
                                src={item.articleList[0].imageSrc} />

                                <div>
                                    <h1 className="font-[source-serif-4] 
                                    text-[20px] font-[500] leading-[21px]"> 
                                    {item.articleList[0].title} </h1>

                                    <h1 className="font-[chivo] text-[12px] 
                                    mt-[4px] text-gray-500"> 
                                    {item.articleList[0].date} </h1>
                                </div>
                            </a>
                        }
                        {item.articleList.slice(1).map((article) => (
                            <><hr className="border-gray-300" />
                            <a href="" className="flex"> 
                                <div>
                                    <h1 className="font-[source-serif-4] 
                                    text-[20px] font-[500] 
                                    leading-[21px]"> {article.title} </h1>
                                    
                                    <h1 className="font-[chivo] 
                                    text-[12px] mt-[4px] 
                                    text-gray-500"> {article.date} </h1>
                                </div>
                            </a></>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TertiaryArticles;