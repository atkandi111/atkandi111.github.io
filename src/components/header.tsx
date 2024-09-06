"use client"

import React, { useState } from 'react'
import Logo from '../assets/guidon_logo.svg'
import { Search, Info, ArrowRight } from 'lucide-react'

const NavItems = [
    "NEWS", "OPINION", "SPORTS", 
    "BEYOND LOYOLA", "FEATURES",
    "INQUIRY", "RESEARCH", 
    "VANTAGE MAGAZINE", "SCITECH", 
    "INTERACTIVES", "ARCHIVES", 
    "TAKE THE LEDE", "ABOUT"
]

const Header: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        setIsVisible(false);
    }
    return (
        <div className="flex flex-col sticky top-0">
            <div className="pt-[20px] pb-[24px] bg-blue-main flex justify-center">
                <img src={Logo} width="174px" height="24px"/>
            </div>

            <div className="shadow-[rgba(0,0,0,0.1)_5px_0px_25px_5px] 
            pt-[14px] pb-[12px] px-[40px] z-0 flex flex-wrap justify-center 
            bg-white text-[12px] tracking-[1px] font-semibold">
                { NavItems.map((NavItem) => (
                    <a href="" className="shrink-0 
                    my-[4px] mr-[36px] text-[#575757] 
                    font-[chivo]">{NavItem}</a>
                ))}
                <Search width="21px" height="21px" />
            </div>

            {isVisible && (
                <div className="h-[100px] flex z-0 bg-white 
                shadow-[rgba(0,0,0,0.1)_25px_0px_25px_5px] 
                px-[175px] py-[15px]">
                    <div className="flex">
                        <Info width="18px" height="18px" color="#6b6b6b" />
                        <div className="ml-[10px]">
                            <h1 className="font-[source-serif-4] font-medium text-[18px] leading-[18px]">
                                We're updating our look—share your thoughts!
                            </h1>
                            <h1 className="text-gray-500 text-[14px]">
                                Help us shape our website! 
                                Take a quick survey for a 
                                chance to win Ateneo merch 
                                or 1000 PHP in cash.
                            </h1>
                            <button className="flex items-center text-[#2865c0]">
                                <h1 className="font-[chivo] font-semibold 
                                tracking-[0.5px]">VISIT SURVEY</h1>
                                <ArrowRight width="20px" height="12px" strokeWidth={3} />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-grow items-center justify-end">
                        <button onClick={handleClick} 
                        className="font-[chivo] font-semibold 
                        tracking-[0.5px] text-gray-400 
                        hover:cursor-pointer">DISMISS</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header;

