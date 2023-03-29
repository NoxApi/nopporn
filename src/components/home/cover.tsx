import Image from "next/image"
import { useState } from "react"
import s1 from "../../../public/s1.png"
import s2 from "../../../public/s2.png"
import s3 from "../../../public/s3.png"
export const Cover =()=>{
    const [cover,setcover] = useState(0)
    return(
        <div className="w-[1920px] h-[1024px] relative opensans text-[#0C294B] flex flex-col items-center overflow-hidden">
            <div className="w-[1920px]  h-[896px] flex ">
                <div className="w-[800px] ml-[240px] h-full flex justify-center items-center pl-[50px]">
                    <div className="w-[550px] h-auto ">
                        <p className="text-2xl text-left">{"อารมณ์ดี สุขภาพดี"}</p>
                        <div className="flex mt-8">
                            <p className="text-7xl text-left ">{"ที่"}</p>
                            <p className="text-7xl text-left text-[#00BBEA]">{"บ้านนพพร"}</p>
                        </div>
                        <p className="text-4xl text-left mt-8">{"ให้เราช่วยดูแล"}</p>
                        <p className="text-4xl text-left mt-8">{"คนที่ท่านรัก"}</p>
                        
                    </div>
                </div>
                <div className="w-[900px] h-full flex justify-center items-center  relative">
                    <div className="w-[1020px] h-[1020px] bg-[#00BBEA] bg-opacity-20 absolute rounded-full top-[-200px] left-[-150px] flex justify-center items-center">
                        <div className="w-full absolute ">
                            <div className="w-[510px]   z-30 h-[30px] left-0">
                                <div className={`  w-[30px] h-[30px] rounded-full ml-4 ${(cover==0)?("bg-main"):("bg-secondary")}`}></div>
                            </div>
                        </div>
                        <div className="w-full absolute  rotate-[-5deg]">
                            <div className="w-[510px] z-30 h-[30px] left-0">
                                <div className={`  w-[30px] h-[30px] rounded-full ml-4 ${(cover==1)?("bg-main"):("bg-secondary")}`}></div>
                            </div>
                        </div>
                        <div className="w-full absolute  rotate-[-10deg]">
                            <div className="w-[510px] z-30 h-[30px] left-0">
                                <div className={`  w-[30px] h-[30px] rounded-full ml-4 ${(cover==2)?("bg-main"):("bg-secondary")}`}></div>
                            </div>
                        </div>
                        <div className="w-full absolute  rotate-[-15deg]">
                            <div className="w-[510px] z-30 h-[30px] left-0">
                                <div className={`  w-[30px] h-[30px] rounded-full ml-4 ${(cover==3)?("bg-main"):("bg-secondary")}`}></div>
                            </div>
                        </div>
                        <div className="w-full absolute  rotate-[-20deg]">
                            <div className="w-[510px] z-30 h-[30px] left-0">
                                <div className={`  w-[30px] h-[30px] rounded-full ml-4 ${(cover==4)?("bg-main"):("bg-secondary")}`}></div>
                            </div>
                        </div>
                        <div className="w-full absolute  rotate-[-25deg]">
                            <div className="w-[510px] z-30 h-[30px] left-0">
                                <div className={`  w-[30px] h-[30px] rounded-full ml-4 ${(cover==5)?("bg-main"):("bg-secondary")}`}></div>
                            </div>
                        </div>
                        <div className="w-full absolute  rotate-[-30deg]">
                            <div className="w-[510px] z-30 h-[30px] left-0">
                                <div className={`  w-[30px] h-[30px] rounded-full ml-4 ${(cover==6)?("bg-main"):("bg-secondary")}`}></div>
                            </div>
                        </div>
                        <div className="w-full absolute  rotate-[-35deg]">
                            <div className="w-[510px] z-30 h-[30px] left-0">
                                <div className={`  w-[30px] h-[30px] rounded-full ml-4 ${(cover==7)?("bg-main"):("bg-secondary")}`}></div>
                            </div>
                        </div>
                        <div className="w-full absolute  rotate-[-40deg]">
                            <div className="w-[510px] z-30 h-[30px] left-0">
                                <div className={`  w-[30px] h-[30px] rounded-full ml-4 ${(cover==8)?("bg-main"):("bg-secondary")}`}></div>
                            </div>
                        </div>
                        <div className="w-full absolute  rotate-[-45deg]">
                            <div className="w-[510px] z-30 h-[30px] left-0">
                                <div className={`  w-[30px] h-[30px] rounded-full ml-4 ${(cover==9)?("bg-main"):("bg-secondary")}`}></div>
                            </div>
                        </div>
                        <div className="w-full absolute  rotate-[-50deg]">
                            <div className="w-[510px] z-30 h-[30px] left-0">
                                <div className={`  w-[30px] h-[30px] rounded-full ml-4 ${(cover==10)?("bg-main"):("bg-secondary")}`}></div>
                            </div>
                        </div>
                        <div className="w-[896px] h-[896px] rounded-full bg-cover1 bg-cover bg-center"></div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-main h-[128px] flex justify-center ">
                    <div className="flex justify-between px-[50px] items-center w-[1440px]">
                    <div className="socialpc w-[420px] flex items-center">
                        <Image src={s1} alt="" className="w-[50px] "/>
                        <div className="h-[50px]  flex flex-col justify-between ">
                            <p className="text-xl">{"โทร"}</p>
                            <p className="text-xl mt-[-3px]">{"081-581-9850"}</p>
                        </div>
                    </div>
                    <div className="socialpc w-[420px] flex items-center">
                        <Image src={s2} alt="" className="w-[50px] "/>
                        <div className="h-[50px]  flex flex-col justify-between ">
                            <p className="text-xl text-[#1FC32E]">{"ไลน์"}</p>
                            <p className="text-xl text-[#1FC32E] mt-[-3px]">{"wi0411"}</p>
                        </div>
                    </div>
                    <div className="socialpc w-[420px] flex items-center">
                        <Image src={s3} alt="" className="w-[50px] "/>
                        <div className="h-[30px]  flex flex-col justify-between ">
                            <p className="text-xl text-[#1773EA]">{"เฟสบุ๊ค"}</p>
                            <p className="text-xl text-[#1773EA] mt-[-3px]">{"รับดูแลผู้สูงอายุ นพพรเนิร์สซิ่งโฮม"}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="mainbutton absolute bottom-[200px] left-[50%] translate-x-[-50%]">{"สอบถามเพิ่มเติม"}</button>
            
        </div>
    )
}