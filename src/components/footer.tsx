"use client"

import React from 'react'
import Logo from '../assets/guidon_logo.svg'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const NavItems = [
    "NEWS", "OPINION", "SPORTS", 
    "BEYOND LOYOLA", "FEATURES",
    "INQUIRY", "RESEARCH", 
    "VANTAGE MAGAZINE", "SCITECH", 
    "INTERACTIVES", "ARCHIVES", 
    "TAKE THE LEDE", "ABOUT"
]

const Footer: React.FC = () => {
    return (
        <div>
            <div className="bg-[#f7f7f7] px-[135px] grid grid-cols-[2fr_1fr] gap-[64px]">
                <div className="space-y-[24px] py-[80px]">
                    <h1 className="text-[#1c489b] text-[36px] leading-[36px] tracking-[0.6px] font-[source-sans-4] font-semibold"> Tell us what you think! </h1>
                    <h1 className="text-[#2c2c2c] text-[18px] font-[source-sans-4]"> Have any questions, clarifications, or comments? Send us a message through the form below. </h1>
                    <div>
                        <h1 className="text-[11px] text-[#666666] mb-[5px] font-[chivo] font-semibold"> EMAIL ADDRESS </h1>
                        <input className="w-full text-[14px] font-[chivo] font-[300] px-[12px] py-[6px] border border-[#d8d8d8] rounded" />
                    </div>
                    <div>
                        <h1 className="text-[11px] text-[#666666] mb-[5px] font-[chivo] font-semibold"> MESSAGE </h1>
                        <textarea className="w-full h-[180px] text-[14px] font-[chivo] font-[300] px-[12px] py-[6px] border border-[#d8d8d8] rounded resize-none" />
                    </div>
                    <button className="bg-blue-main text-white text-[14px] font-[chivo] font-medium px-[40px] py-[8px] rounded-sm"> Send </button>
                </div>
                <div className="space-y-[24px] py-[80px]">
                    <h1 className="text-[#1c489b] text-[36px] leading-[36px] tracking-[0.6px] font-[source-sans-4] font-semibold"> Take the Lede </h1>
                    <h1 className="text-[#2c2c2c] text-[18px] leading-[20px] tracking-[0.6px] font-[source-sans-4]"> Fill out our form in the Contribute page and write for The GUIDON! Click the button below to view our Take the Lede Crowdsourcing Form. </h1>
                    <button className="bg-blue-main text-white text-[14px] font-[chivo] font-medium px-[40px] py-[8px] rounded-sm"> Contribute </button>
                </div>
            </div>
            <div className="px-[120px] pt-[48px] pb-[24px]">
                <div className="flex pb-[50px]">
                    <div className="space-y-[20px] max-w-[240px] mr-[80px]">
                        <img src={Logo} />
                        <h1 className="font-[chivo] font-[200] text-[12px] tracking-[0.1px] text-white"> The GUIDON is the official student publication of the Ateneo de Manila University. </h1>
                    </div>
                    <div className="grid grid-rows-6 grid-cols-[1fr_1fr] grid-flow-col gap-x-[24px] gap-y-[8px] mr-[100px]">
                        {NavItems.map((NavItem) => (
                            <a href="" className="
                            text-white text-[14px] font-semibold tracking-[1px]
                            font-[chivo]">{NavItem}</a>
                        ))}
                    </div>
                    <div className="flex flex-col flex-end flex-grow font-[chivo]">
                        <h1 className="max-w-[270px] mb-[16px] ml-auto font-[200] text-[12px] text-end tracking-[0.1px] text-white"> Like reading The GUIDON? Subscribe to our newsletter </h1>
                        <div className="flex h-[50px]">
                            <input placeholder="Email address" className="rounded-l-sm w-full px-[16px] text-[14px] border-l-[4px] border-l-[#92d8ff] border-r-[0.1px] border-r-blue-main" />
                            <button className="rounded-r-sm font-[chivo] font-semibold text-blue-main text-[18px] bg-white px-[16px]">Subscribe</button>
                        </div>
                    </div>
                </div>
                <hr className="border-b border-0 border-white" />
                <div className="flex pt-[24px] items-center">
                    <h1 className="font-[chivo] font-[200] text-[14px] tracking-[0.2px] text-white">
                        © 2022 The GUIDON All Rights Reserved<br />Designed and developed by Digital Development 2019-2020 and 2022-2023
                    </h1>
                    <div className="ml-auto flex items-center space-x-[10px]">
                        <button><Facebook color="none" fill="white" width="25px" height="25px" /></button>
                        <button><Twitter color="none" fill="white" width="25px" height="25px" /></button>
                        <button><Instagram color="white" width="25px" height="25px" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;