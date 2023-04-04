import Image from "next/image"
import { useEffect, useState } from "react"
import s1 from "../../../public/s1.png"
import s2 from "../../../public/s2.png"
import classNames from 'classnames';
import s3 from "../../../public/s3.png"
import Link from "next/link";
export const Cover =()=>{
    const [cover,setcover] = useState(0)
    const auto = () =>{
    if(cover != 10){
        setcover(cover+1)
    } 
    else{
        setcover(0)
        }
    }
    useEffect(() => {
        console.log("useEffect run")
        const id = setInterval(auto, 3000);
        return () => clearInterval(id);
    }, [cover])

    return(
        <div className={`w-[1920px] h-[1024px] relative opensans text-[#0C294B] flex flex-col items-center overflow-hidden xlm:h-auto  mdm:w-[100vw] `}>
            <div className="absolute left-0 top-0 bg-cover10 -z-40 "></div>
            <div className="absolute left-0 top-0 bg-cover1 -z-40 "></div>
            <div className="absolute left-0 top-0 bg-cover2 -z-40 "></div>
            <div className="absolute left-0 top-0 bg-cover3 -z-40 "></div>
            <div className="absolute left-0 top-0 bg-cover4 -z-40 "></div>
            <div className="absolute left-0 top-0 bg-cover5 -z-40 "></div>
            <div className="absolute left-0 top-0 bg-cover6 -z-40 "></div>
            <div className="absolute left-0 top-0 bg-cover7 -z-40 "></div>
            <div className="absolute left-0 top-0 bg-cover8 -z-40 "></div>
            <div className="absolute left-0 top-0 bg-cover9 -z-40 "></div>
            <div className="absolute left-0 top-0 bg-cover0 -z-40 "></div>
            <div className={"w-[1920px]  h-[896px] xlm:h-[1108px] flex mdm:h-[170vw] mdm:w-[100vw] xlm:bg-cover xlm:bg-center  xl:bg-none  bg-cover"+cover}>
                <div className="w-[800px] ml-[240px] h-full flex justify-center items-center pl-[50px] xlm:pl-0 xlm:w-full xlm:ml-0 xlm:bg-[#00BBEA] xlm:bg-opacity-30">
                    <div className="w-[550px] h-auto xlm:flex xlm:flex-col xlm:items-center">
                        <p className="text-2xl text-left outlineadd xlm:text-6xl mdm:text-[7vw]">{"อารมณ์ดี สุขภาพดี"}</p>
                        <div className="flex mt-8 xlm:w-[100vw] xlm:justify-center mdm:mt-[3vw]">
                            <p className="text-7xl text-left outlineadd xlm:text-9xl mdm:text-[15vw] mdm:mr-[2vw]">{"ที่"}</p>
                            <p className="text-7xl text-left outlineadd xlm:text-9xl text-[#00BBEA] mdm:text-[15vw] ">{"บ้านนพพร"}</p>
                        </div>
                        <p className="text-4xl text-left mt-8 mdm:mt-[4vw] outlineadd xlm:text-6xl mdm:text-[8vw]">{"ให้เราช่วยดูแล "}</p>
                        <p className="text-4xl text-left mt-8 mdm:mt-[4vw] outlineadd xlm:text-6xl mdm:text-[8vw]">{"คนที่ท่านรัก"}</p>
                        <button className="mainbutton xl:hidden mt-52 mdm:mt-[80vw] smm:w-[40vw] smm:text-[4vw] smm:leading-[3vw] smm:h-[14vw] ">{"สอบถามเพิ่มเติม"}</button>
                        <div className="flex xl:hidden mt-[3vw]">
                            <div className={`w-[2vw] h-[2vw] rounded-full transition-all duration-200  ${(cover==0)?("bg-main"):("bg-secondary")} `}></div>
                            <div className={`w-[2vw] h-[2vw] rounded-full transition-all duration-200 ml-[1vw] ${(cover==1)?("bg-main"):("bg-secondary")} `}></div>
                            <div className={`w-[2vw] h-[2vw] rounded-full transition-all duration-200 ml-[1vw] ${(cover==2)?("bg-main"):("bg-secondary")} `}></div>
                            <div className={`w-[2vw] h-[2vw] rounded-full transition-all duration-200 ml-[1vw] ${(cover==3)?("bg-main"):("bg-secondary")} `}></div>
                            <div className={`w-[2vw] h-[2vw] rounded-full transition-all duration-200 ml-[1vw] ${(cover==4)?("bg-main"):("bg-secondary")} `}></div>
                            <div className={`w-[2vw] h-[2vw] rounded-full transition-all duration-200 ml-[1vw] ${(cover==5)?("bg-main"):("bg-secondary")} `}></div>
                            <div className={`w-[2vw] h-[2vw] rounded-full transition-all duration-200 ml-[1vw] ${(cover==6)?("bg-main"):("bg-secondary")} `}></div>
                            <div className={`w-[2vw] h-[2vw] rounded-full transition-all duration-200 ml-[1vw] ${(cover==7)?("bg-main"):("bg-secondary")} `}></div>
                            <div className={`w-[2vw] h-[2vw] rounded-full transition-all duration-200 ml-[1vw] ${(cover==8)?("bg-main"):("bg-secondary")} `}></div>
                            <div className={`w-[2vw] h-[2vw] rounded-full transition-all duration-200 ml-[1vw] ${(cover==9)?("bg-main"):("bg-secondary")} `}></div>
                            <div className={`w-[2vw] h-[2vw] rounded-full transition-all duration-200 ml-[1vw] ${(cover==10)?("bg-main"):("bg-secondary")} `}></div>
                        </div>
                    </div>
                </div>
                    
                <div className="w-[900px] h-full flex justify-center items-center  relative xlm:hidden" >
                    <div className="w-[1020px] h-[1020px] bg-[#00BBEA] bg-opacity-20 absolute rounded-full top-[-200px] left-[-150px] flex justify-center items-center">
                        <div className="w-full absolute ">
                            <div className="w-[510px]   z-30 h-[30px] left-0">
                                <div className={`  w-[30px] h-[30px] rounded-full ml-4 transition-all duration-200 ${(cover==0)?("bg-main"):("bg-secondary")}`}></div>
                            </div>
                        </div>
                        <div className="w-full absolute  rotate-[-5deg]">
                            <div className="w-[510px] z-30 h-[30px] left-0">
                                <div className={`  w-[30px] h-[30px] rounded-full ml-4 transition-all duration-200 ${(cover==1)?("bg-main"):("bg-secondary")}`}></div>
                            </div>
                        </div>
                        <div className="w-full absolute  rotate-[-10deg]">
                            <div className="w-[510px] z-30 h-[30px] left-0">
                                <div className={`  w-[30px] h-[30px] rounded-full ml-4 transition-all duration-200 ${(cover==2)?("bg-main"):("bg-secondary")}`}></div>
                            </div>
                        </div>
                        <div className="w-full absolute  rotate-[-15deg]">
                            <div className="w-[510px] z-30 h-[30px] left-0">
                                <div className={`  w-[30px] h-[30px] rounded-full ml-4 transition-all duration-200 ${(cover==3)?("bg-main"):("bg-secondary")}`}></div>
                            </div>
                        </div>
                        <div className="w-full absolute  rotate-[-20deg]">
                            <div className="w-[510px] z-30 h-[30px] left-0">
                                <div className={`  w-[30px] h-[30px] rounded-full ml-4 transition-all duration-200 ${(cover==4)?("bg-main"):("bg-secondary")}`}></div>
                            </div>
                        </div>
                        <div className="w-full absolute  rotate-[-25deg]">
                            <div className="w-[510px] z-30 h-[30px] left-0">
                                <div className={`  w-[30px] h-[30px] rounded-full ml-4 transition-all duration-200 ${(cover==5)?("bg-main"):("bg-secondary")}`}></div>
                            </div>
                        </div>
                        <div className="w-full absolute  rotate-[-30deg]">
                            <div className="w-[510px] z-30 h-[30px] left-0">
                                <div className={`  w-[30px] h-[30px] rounded-full ml-4 transition-all duration-200 ${(cover==6)?("bg-main"):("bg-secondary")}`}></div>
                            </div>
                        </div>
                        <div className="w-full absolute  rotate-[-35deg]">
                            <div className="w-[510px] z-30 h-[30px] left-0">
                                <div className={`  w-[30px] h-[30px] rounded-full ml-4 transition-all duration-200 ${(cover==7)?("bg-main"):("bg-secondary")}`}></div>
                            </div>
                        </div>
                        <div className="w-full absolute  rotate-[-40deg]">
                            <div className="w-[510px] z-30 h-[30px] left-0">
                                <div className={`  w-[30px] h-[30px] rounded-full ml-4 transition-all duration-200 ${(cover==8)?("bg-main"):("bg-secondary")}`}></div>
                            </div>
                        </div>
                        <div className="w-full absolute  rotate-[-45deg]">
                            <div className="w-[510px] z-30 h-[30px] left-0">
                                <div className={`  w-[30px] h-[30px] rounded-full ml-4 transition-all duration-200 ${(cover==9)?("bg-main"):("bg-secondary")}`}></div>
                            </div>
                        </div>
                        <div className="w-full absolute  rotate-[-50deg]">
                            <div className="w-[510px] z-30 h-[30px] left-0">
                                <div className={`  w-[30px] h-[30px] rounded-full ml-4 transition-all duration-200 ${(cover==10)?("bg-main"):("bg-secondary")}`}></div>
                            </div>
                        </div>
                        <div className={"w-[896px] h-[896px] rounded-full bg-cover bg-center bg-cover"+cover}></div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-main h-[128px] flex justify-center lgm:h-auto lgm:py-8 smm:py-[5vw] ">
                <div className="flex justify-between px-[50px] smm:px-[1vw] items-center w-[1440px] 2xlm:w-[1024px] lgm:flex-col">
                    <div className="socialpc h-[80px] pl-[10px] w-[420px] flex items-center 2xlm:w-[300px] lgm:w-[420px] smm:w-[80vw] smm:h-[12vw]">
                        <Image src={s1} alt="" className="w-[50px] smm:w-[8vw] mr-[20px] smm:mr-[3vw] "/>
                        <div className="h-[50px] smm:h-[8vw]  flex flex-col justify-between ">
                            <p className="text-xl text-main smm:text-[3vw] smm:leading-[3vw] smm:mt-0">{"โทร"}</p>
                            <p className="text-xl text-main mt-[-3px] smm:text-[3vw] smm:leading-[3vw] smm:mt-0">{"081-581-9850"}</p>
                        </div>
                    </div>
                    <div className="socialpc h-[80px] pl-[10px] w-[420px] flex items-center 2xlm:w-[300px] lgm:w-[420px] lgm:mt-4 smm:w-[80vw] smm:h-[12vw]">
                        <Image src={s2} alt="" className="w-[50px] smm:w-[8vw] mr-[20px] smm:mr-[3vw] "/>
                        <div className="h-[50px] smm:h-[8vw]  flex flex-col justify-between ">
                            <p className="text-xl text-[#1FC32E] smm:text-[3vw] smm:leading-[3vw] smm:mt-0">{"ไลน์"}</p>
                            <p className="text-xl text-[#1FC32E] mt-[-3px] smm:text-[3vw] smm:leading-[3vw] smm:mt-0">{"wi0411"}</p>
                        </div>
                    </div>
                    <div className="socialpc h-[80px] pl-[10px] w-[420px] flex items-center 2xlm:w-[300px] lgm:w-[420px] lgm:mt-4 smm:w-[80vw] smm:h-[12vw]">
                        <Image src={s3} alt="" className="w-[50px] smm:w-[8vw] mr-[20px] smm:mr-[3vw]"/>
                        <div className="h-[50px] smm:h-[8vw]  flex flex-col justify-between ">
                            <p className="text-xl text-[#1773EA] smm:text-[3vw] smm:leading-[3vw] smm:mt-0">{"เฟสบุ๊ค"}</p>
                            <p className="text-xl 2xlm:text-sm text-[#1773EA] mt-[-3px] 2xlm:mt-1 smm:mt-0 smm:text-[3vw] smm:leading-[3vw]">{"รับดูแลผู้สูงอายุ นพพรเนิร์สซิ่งโฮม"}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="mainbutton absolute bottom-[200px] left-[50%] translate-x-[-50%] xlm:hidden">
                <Link href={"/contact"}>{"สอบถามเพิ่มเติม"}
                </Link>
            </button>
        </div>
    )
}

