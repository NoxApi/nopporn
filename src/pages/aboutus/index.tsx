import s1 from "../../../public/s1.png"
import s2 from "../../../public/s2.png"
import s3 from "../../../public/s3.png"
import s4 from "../../../public/s4.png"
import a1 from "../../../public/gallery/a1.jpg"
import pic1 from "../../../public/aboutus/p1.png"
import pic2 from "../../../public/aboutus/p2.png"
import v1 from "../../../public/vector.svg"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
export default  function Contactpage(){
    const [isshow1,setisshow1] = useState(false)
    const [isshow2,setisshow2] = useState(false)

    return(
        <div className="w-[1920px] h-auto relative opensans flex flex-col items-center text-main 2xlm:h-auto">
            <div className="w-full bg-head h-[400px] mdm:h-[40vw] bg-cover mdm:bg-contain bg-center flex justify-center items-center">
                <p className="text-6xl smm:text-[10vw]">{"เกี่ยวกับเรา"}</p>
            </div>
            <div className="w-[1440px] h-auto bg-white flex flex-col items-center justify-between py-[80px] mdm:py-[10vw] 2xlm:h-auto">
                <div className="w-full flex mt-24 2xlm:mt-12 2xlm:flex-col 2xlm:items-center mdm:mt-[8vw]  ">
                     <div className="w-[680px] flex flex-col justify-center items-start px-[50px] mdm:w-[100vw] mdm:px-[5vw] 2xlm:px-5 ">
                        <p className="text-5xl 2xlm:mt-12 mdm:mt-[4vw] mdm:text-[7vw] mdm:leading-[6vw]">{"เกี่ยวกับเรา"}</p>
                        <p className="text-black text-2xl leading-[35px] w-[600px] text-left mt-6 mdm:text-[4vw] mdm:leading-[5vw] mdm:w-auto">{"เราคือ นพพรเนิร์สซิ่งโฮม(nopporn nursing home) เปิดดำเนินการอย่างเป็นทางการเมื่อวันที่ 14 กุมภาพันธุ์ 2561 ก่อตั้งโดยกลุ่มผู้ให้บริการด้านสุขภาพ ที่มีประสบการณ์นานกว่า 10 ปี พร้อมให้การดูแลบุคคลอันเป็นที่เคารพรักของท่านด้วยบริการระดับมืออาชีพ เน้นการใช้ทักษะการดูแลผู้สูงอายุเฉพาะบุคคล เปิดให้บริการ ณ บ้านพักที่ปรับปรุงใหม่ทั้งหลัง เน้นบรรยากาศเสมือนอยู่กับครอบครัว ตลอดจนดูแลด้านโภชนาการ ด้านสุขลักษณะ ความสะอาด ความปลอดภัย และความเอาใจใส่ มีเจ้าหน้าที่ดูแลตลอด 24 ชั่วโมง"}</p>
                    </div>
                    <div className="w-[640px] mdm:w-[100vw] mdm:flex justify-center  2xlm:mt-12 ">
                        <Image src={pic1} alt="" className="mdm:w-[90vw]"/>
                    </div>
                </div>
                <div className="w-full flex mt-36 2xlm:mt-24 2xlm:flex-col 2xlm:items-center mdm:mt-[8vw] ">
                    <div className="w-[640px] mdm:w-[100vw] mdm:flex justify-center 2xlm:hidden">
                        <Image src={pic2} alt="" className="mdm:w-[90vw] 2xlm:hidden"/>
                    </div>
                    <div className="w-[680px]  flex flex-col justify-center items-start px-[50px] 2xlm:px-5 mdm:w-[100vw] mdm:px-[5vw]">
                        <p className="text-5xl 2xlm:mt-12 mdm:mt-[4vw] mdm:text-[7vw] mdm:leading-[6vw]">{"วิสัยทัศน์"}</p>
                        <p className="text-black text-2xl leading-[35px] w-[600px] text-left mt-6 mdm:text-[4vw] mdm:leading-[5vw] mdm:w-auto">{"นพพรเนิร์สซิ่งโฮม(nopporn nursing home) มีความมุ่งมั่นเป็นอย่างยิ่ง ที่จะเปลี่ยนแปลงทัศนคติของสังคมที่มีต่อบ้านพักผู้สูงอายุ ด้วยทักษะการให้บริการระดับมืออาชีพ และ การเอาใจใส่ดุจญาติมิตร เพื่อให้ผู้ที่มาใช้บริการโดยเฉพาะผู้สูงอายุ ได้รับการดูแลที่อบอุ่นเสมือนอยู่กับครอบครัว"}</p>  
                    </div>
                    <div className="w-[640px] mdm:w-[100vw] mdm:flex justify-center 2xl:hidden 2xlm:mt-12">
                        <Image src={pic2} alt="" className="mdm:w-[90vw] 2xl:hidden"/>
                    </div>
                    
                </div>
                
                
            </div>
            <div className="w-full bg-div4 bg-cover h-auto flex justify-center  items-center 2xlm:h-auto smm:w-[100vw] bg-[center_top_600px] smm:bg-[center_top_0vw] mt-12 smm:h-[45vw] lgm:mt-8 smm:mt-[10vw]"> 
                
                <div className="bg-black h-full w-[1920px] px-[50px] smm:px-[5vw] bg-opacity-40 flex justify-center  items-center">
                    <div className="w-[1440px] flex items-center px-[30px] 2xlm:flex-col">
                        <div className=" flex flex-col h-full justify-between py-[70px]  lgm:py-[40px] smm:py-[4vw]">
                                <p className="text-6xl font-semibold addshadow 2xlm:text-center lgm:text-5xl smm:text-[7vw] smm:leading-[6vw]">{"กิจกรรมมากมาย ไม่ต้องกลัวเหงา"}</p>
                                <p className="text-white text-[36px] addshadow mt-6 lgm:text-2xl smm:text-[3.7vw] smm:leading-[4vw] smm:mt-[4vw]">{"สันทนาการมากมายที่เหมาะสมกับคนที่ท่านห่วงใย"}</p>
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