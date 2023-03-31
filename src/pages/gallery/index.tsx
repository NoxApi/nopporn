import s1 from "../../../public/s1.png"
import s2 from "../../../public/s2.png"
import s3 from "../../../public/s3.png"
import s4 from "../../../public/s4.png"
import a1 from "../../../public/gallery/a1.jpg"
import Image from "next/image"
import { useState } from "react"
export default  function Contactpage(){
    const [isshow1,setisshow1] = useState(false)
    const [isshow2,setisshow2] = useState(false)

    return(
        <div className="w-[1920px] h-auto relative opensans flex flex-col items-center text-main 2xlm:h-auto">
            <div className="w-full bg-head h-[400px] mdm:h-[40vw] bg-cover mdm:bg-contain bg-center flex justify-center items-center">
                <p className="text-6xl smm:text-[10vw]">{"คลังภาพ"}</p>
            </div>
            <div className="w-full h-auto  flex  items-center justify-center lgm:mt-8 smm:mt-[5vw]">
                <div className="w-[1440px] flex justify-center  2xlm:w-[100vw] flex-col items-center  py-[80px] smm:py-[5vw] ">
                    <p className="text-5xl smm:text-[4vw] xl:self-start xl:ml-[70px]">{"สถานที่และห้องพัก"}</p>
                    <div className={`flex justify-center gap-4 mt-8 mdm:mt-[4vw] mdm:flex-col ${isshow1?(" mdm:h-auto "):(" smm:h-[192vw] smm:max-h-[1000px] mdm:h-[1010px]  ")} mdm:justify-start overflow-hidden transition-all duration-500 `}>
                        <div className="flex flex-col gap-4  mdm:mt-[4vw] mdm:px-[10vw]   ">
                            <Image src={a1} alt='' className="w-[420px] rounded-xl" />
                            <Image src={a1} alt='' className="w-[420px] rounded-xl" /> 
                            <Image src={a1} alt='' className="w-[420px] rounded-xl" />  
                        </div>
                        <div className="flex flex-col gap-4  mdm:px-[10vw] ">
                            <Image src={a1} alt='' className="w-[420px] rounded-xl" />
                            <Image src={a1} alt='' className="w-[420px] rounded-xl" /> 
                            <Image src={a1} alt='' className="w-[420px] rounded-xl" />  
                        </div>
                        <div className="flex flex-col gap-4 mdm:px-[10vw] ">
                            <Image src={a1} alt='' className="w-[420px] rounded-xl" />
                            <Image src={a1} alt='' className="w-[420px] rounded-xl" /> 
                            <Image src={a1} alt='' className="w-[420px] rounded-xl" />  
                        </div>
                    </div>
                    <p onClick={()=>setisshow1(!isshow1)} className=" cursor-pointer text-3xl smm:text-[4vw] md:hidden mdm:mt-4">{"เพิ่มเติม"}</p>
                    

                </div>
            </div>
            <div className="w-full bg-div3 bg-cover h-auto flex justify-center  items-center 2xlm:h-auto smm:w-[100vw] bg-[center_top_600px] smm:bg-[center_top_0vw] smm:h-[45vw] lgm:mt-8 smm:mt-[10vw]"> 
                
                <div className="bg-black h-full w-[1920px] px-[50px] smm:px-[5vw] bg-opacity-40 flex justify-center  items-center">
                    <div className="w-[1440px] flex items-center px-[30px] 2xlm:flex-col">
                        <div className=" flex flex-col h-full justify-between py-[70px]  lgm:py-[40px] smm:py-[4vw]">
                                <p className="text-6xl font-semibold addshadow 2xlm:text-center lgm:text-5xl smm:text-[7vw] smm:leading-[6vw]">{"บริการระดับมืออาชีพ"}</p>
                                <p className="text-white text-[36px] addshadow mt-6 lgm:text-2xl smm:text-[3.7vw] smm:leading-[4vw] smm:mt-[4vw]">{"บริการดูแลผู้สูงอายุ ดูแลดุจญาติมิตร ด้วยบุคลากรเฉพาะทาง"}</p>
                        </div>
                        <button className="mainbutton ml-[220px] 2xlm:ml-0 2xlm:mb-[70px] lgm:mb-[40px] smm:mb-[4vw] smm:w-[30vw] smm:text-[3vw] smm:leading-[3vw] smm:h-[10vw]">
                            <p className="mx-[40px] smm:mx-0">{"ติดต่อเรา"}</p>
                        </button>   
                    </div>
                </div>
            </div>  
        </div>
    )
}