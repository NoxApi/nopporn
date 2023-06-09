import s1 from "../../../public/s1.png"
import s2 from "../../../public/s2.png"
import s3 from "../../../public/s3.png"
import s4 from "../../../public/s4.png"
import a1 from "../../../public/gallery/a3.png"
import a2 from "../../../public/gallery/a2.jpg"
import a3 from "../../../public/gallery/a1.png"
import a4 from "../../../public/gallery/a4.png"
import a5 from "../../../public/gallery/a5.png"
import a6 from "../../../public/gallery/a6.png"
import a7 from "../../../public/gallery/a7.png"
import a8 from "../../../public/gallery/a8.jpg"
import a9 from "../../../public/gallery/a9.jpg"
import a10 from "../../../public/gallery/a10.png"
import a11 from "../../../public/gallery/a11.png"
import a12 from "../../../public/gallery/a12.png"
import a13 from "../../../public/gallery/a13.png"
import a14 from "../../../public/gallery/a14.png"
import a15 from "../../../public/gallery/a15.png"
import a16 from "../../../public/gallery/a16.png"
import a17 from "../../../public/gallery/a17.png"
import a18 from "../../../public/gallery/a18.png"
import v1 from "../../../public/vector.svg"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
export default  function Contactpage(){
    const [isshow1,setisshow1] = useState(false)
    const [isshow2,setisshow2] = useState(false)

    return(
        <div className="w-[1920px] h-auto relative opensans flex flex-col items-center text-main 2xlm:h-auto">
            <div className="w-full bg-head h-[400px] mdm:h-[40vw] bg-cover mdm:bg-contain bg-center flex justify-center items-center">
                <p className="text-6xl smm:text-[10vw]">{"คลังภาพ"}</p>
            </div>
            <div className="w-full h-auto  flex flex-col  items-center justify-center lgm:mt-8 smm:mt-[5vw]">
                <div className="w-[1440px] flex justify-center  2xlm:w-[100vw] flex-col items-center  py-[80px] smm:py-[5vw] ">
                    <p className="text-5xl smm:text-[5vw] xl:self-start xl:ml-[70px]">{"สถานที่และห้องพัก"}</p>
                    <div className={`flex justify-center gap-4 mdm:gap-[4vw] mt-8 mdm:mt-[4vw] mdm:flex-col h-auto mdm:justify-start overflow-hidden `}>
                        <div className={`flex flex-col gap-4 mdm:gap-[4vw]  mdm:mt-[4vw] mdm:px-[10vw]   `}>
                            <Image src={a1} alt='' className="w-[420px] rounded-xl" />
                            <Image src={a2} alt='' className="w-[420px] rounded-xl" /> 
                            <Image src={a3} alt='' className="w-[420px] rounded-xl" />  
                        </div>
                        <div className={`flex flex-col gap-4 mdm:gap-[4vw]  mdm:px-[10vw] ${isshow1?("  "):(" mdm:hidden ")}`}>
                            <Image src={a4} alt='' className="w-[420px] rounded-xl" />
                            <Image src={a5} alt='' className="w-[420px] rounded-xl" /> 
                            <Image src={a6} alt='' className="w-[420px] rounded-xl" />  
                        </div>
                        <div className={`flex flex-col gap-4 mdm:gap-[4vw] mdm:px-[10vw] ${isshow1?("  "):(" mdm:hidden ")}`}>
                            <Image src={a7} alt='' className="w-[420px] rounded-xl" />
                            <Image src={a8} alt='' className="w-[420px] rounded-xl" /> 
                            <Image src={a9} alt='' className="w-[420px] rounded-xl" />  
                        </div>
                    </div>
                    <div onClick={()=>setisshow1(!isshow1)} className="flex md:hidden mdm:mt-4 smm:mt-[2vw]">
                        <p  className={` cursor-pointer text-3xl smm:text-[4vw]  `}>{"เพิ่มเติม"}</p>
                        <Image src={v1} alt="" className={` ml-[1vw] ${isshow1?(" rotate-180 "):(" ")} `} />
                    </div>
                    

                </div>
                <div className="w-[1440px] flex justify-center  2xlm:w-[100vw] flex-col items-center  py-[80px] smm:py-[5vw] mt-12 mdm:mt-[5vw] ">
                    <p className="text-5xl smm:text-[5vw] xl:self-start xl:ml-[70px]">{"บรรยากาศและกิจกรรม"}</p>
                    <div className={`flex justify-center gap-4 mdm:gap-[4vw] mt-8 mdm:mt-[4vw] mdm:flex-col h-auto mdm:justify-start overflow-hidden `}>
                        <div className={`flex flex-col gap-4 mdm:gap-[4vw]  mdm:mt-[4vw] mdm:px-[10vw]   `}>
                            <Image src={a10} alt='' className="w-[420px] rounded-xl" />
                            <Image src={a11} alt='' className="w-[420px] rounded-xl" /> 
                            <Image src={a12} alt='' className="w-[420px] rounded-xl" />  
                        </div>
                        <div className={`flex flex-col gap-4 mdm:gap-[4vw]  mdm:px-[10vw] ${isshow2?("  "):(" mdm:hidden ")}`}>
                            <Image src={a13} alt='' className="w-[420px] rounded-xl" />
                            <Image src={a14} alt='' className="w-[420px] rounded-xl" /> 
                            <Image src={a15} alt='' className="w-[420px] rounded-xl" />  
                        </div>
                        <div className={`flex flex-col gap-4 mdm:gap-[4vw] mdm:px-[10vw] ${isshow2?("  "):(" mdm:hidden ")}`}>
                            <Image src={a16} alt='' className="w-[420px] rounded-xl" />
                            <Image src={a17} alt='' className="w-[420px] rounded-xl" /> 
                            <Image src={a18} alt='' className="w-[420px] rounded-xl" />  
                        </div>
                    </div>
                    <div onClick={()=>setisshow2(!isshow2)} className="flex md:hidden mdm:mt-4 smm:mt-[2vw]">
                        <p  className={` cursor-pointer text-3xl smm:text-[4vw]  `}>{"เพิ่มเติม"}</p>
                        <Image src={v1} alt="" className={` ml-[1vw] ${isshow2?(" rotate-180 "):(" ")} `} />
                    </div>
                    

                </div>
            </div>
            <div className="w-full bg-div3 bg-cover h-auto flex justify-center  items-center 2xlm:h-auto smm:w-[100vw] bg-[center_top_600px] smm:bg-[center_top_0vw] mt-12 smm:h-[45vw] lgm:mt-8 smm:mt-[10vw]"> 
                
                <div className="bg-black h-full w-[1920px] px-[50px] smm:px-[5vw] bg-opacity-40 flex justify-center  items-center">
                    <div className="w-[1440px] flex items-center px-[30px] 2xlm:flex-col">
                        <div className=" flex flex-col h-full justify-between py-[70px]  lgm:py-[40px] smm:py-[4vw]">
                                <p className="text-6xl font-semibold addshadow 2xlm:text-center lgm:text-5xl smm:text-[7vw] smm:leading-[6vw]">{"บริการระดับมืออาชีพ"}</p>
                                <p className="text-white text-[36px] addshadow mt-6 lgm:text-2xl smm:text-[3.7vw] smm:leading-[4vw] smm:mt-[4vw]">{"บริการดูแลผู้สูงอายุ ดูแลดุจญาติมิตร ด้วยบุคลากรเฉพาะทาง"}</p>
                        </div>
                        <button className="mainbutton ml-[220px] 2xlm:ml-0 2xlm:mb-[70px] lgm:mb-[40px] smm:mb-[4vw] smm:w-[30vw] smm:text-[3vw] smm:leading-[3vw] smm:h-[10vw]">
                            <Link href={"/contact"}>
                                <p className="mx-[40px] smm:mx-0">{"ติดต่อเรา"}</p>
                            </Link>
                        </button>   
                    </div>
                </div>
            </div>  
        </div>
    )
}