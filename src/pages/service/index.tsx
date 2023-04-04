import s1 from "../../../public/service1.png"
import s2 from "../../../public/service2.png"
import s3 from "../../../public/service3.png"
import s4 from "../../../public/service4.png"
import a10 from "../../../public/gallery/a10.jpg"
import a1 from "../../../public/home/a1.png"
import a2 from "../../../public/home/a2.png"
import a3 from "../../../public/home/a3.png"
import p1 from "../../../public/p1.png"
import p2 from "../../../public/p2.png"
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
                <p className="text-6xl smm:text-[10vw]">{"บริการของเรา"}</p>
            </div>
            <div className="w-[1440px] h-auto bg-white flex flex-col items-center justify-between py-[80px] smm:py-[10vw] 2xlm:h-auto">
                <div className="w-full h-auto flex justify-evenly px-[40px] 2xlm:flex-col 2xlm:items-center 2xlm:h-auto">
                    <div className="flex justify-between w-[650px] 2xlm:mt-2 mdm:flex-col mdm:items-center">
                        <div className="flex flex-col items-center  w-[300px] smm:w-[100vw]  ">
                            <Image src={s1} alt="" className="w-[200px]  smm:w-[30vw]"/>
                            <p className="text-3xl smm:text-[4vw] font-semibold">{"ดูแลเอาใจใส่"}</p>
                            <p className="text-2xl font-light smm:text-[3vw] smm:leading-[4vw]">{"ดูแลเอาใจใส่ดุจญาติมิตร"}</p>
                            <p className="text-2xl w-[440px] smm:w-full smm:text-[3vw] smm:leading-[4vw] smm:text-center">{"ประสบการณ์การดูแลผู้สูงอายุ มากกว่า 10 ปี"}</p>
                        </div>
                        <div className="flex flex-col items-center w-[300px] smm:w-[100vw]" >
                            <Image src={s2} alt="" className="w-[200px]  smm:w-[30vw]"/>
                            <p className=" smm:text-[4vw] font-semibold">{"สะอาด"}</p>
                            <p className="text-2xl font-light smm:text-[3vw] smm:leading-[4vw]">{"ที่พักสะอาด"}</p>
                            <p className="text-2xl smm:text-[3vw] smm:leading-[4vw]">{"ซัก รีดเครืองนุ่มห่ม"}</p>
                        </div>
                    </div>
                    <div className="flex justify-between w-[650px] 2xlm:mt-4 mdm:flex-col mdm:items-center">
                        <div className="flex flex-col items-center w-[300px] smm:w-[100vw]">
                            <Image src={s3} alt="" className="w-[200px]  smm:w-[30vw]"/>
                            <p className=" smm:text-[4vw] font-semibold">{"รถพยาบาล"}</p>
                            <p className="text-2xl font-light smm:text-[3vw] smm:leading-[4vw]">{"บริการพาไปพบแพทย์"}</p>
                            <p className="text-2xl smm:text-[3vw] smm:leading-[4vw]">{"นวดบำบัด และ ทำกายภาพ"}</p>
                        </div>
                        <div className="flex flex-col items-center w-[300px] smm:w-[100vw]">
                            <Image src={s4} alt="" className="w-[200px]  smm:w-[30vw]"/>
                            <p className=" smm:text-[4vw] font-semibold ">{"บริการ 24 ชม."}</p>
                            <p className="text-2xl font-light smm:text-[3vw] smm:leading-[4vw]">{"มีเจ้าหน้าที่ตลอด 24 ชั่วโมง"}</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="w-[1440px] h-auto bg-white flex flex-col items-center justify-between py-[80px] 2xlm:h-auto ">
                <p className="text-[64px] mdm:text-6xl smm:text-[9vw] 2xl:text-left w-full pl-4 text-center 2xlm:ml-0">{"แพ็คเกจ & โปรโมชั่น"}</p>
                <div className="flex w-[1440px] 2xlm:w-[1024px] lgm:flex-col justify-between items-center mt-12 smm:mt-[10vw] px-[20px] 2xlm:px-[60px] ">
                    <div className="articalbox  smm:rounded-[5vw] overflow-hidden  smm:w-[80vw] smm:h-[95vw] ">
                        <Image src={p1} alt="" className="smm:w-full"/>
                        <div className="flex flex-col justify-between py-[20px] px-[30px] smm:px-[5vw] h-[268px] smm:h-[45vw] smm:py-0">
                            <div >
                                <p className="text-2xl smm:text-[4vw] smm:leading-[10vw] ">{"โปรโมชั่น"}</p>
                                <p className="text-black mt-2 smm:mt-[3vw] smm:text-[3vw] smm:leading-[4vw]">{"โปรโมชั่นพิเศษสำหรับห้องเดี่ยว จ่าย 2 เดือน ลดทันที 1,000.- ปกติ 25,000.-/เดือน พร้อมบริการต่างๆมากมาย "}</p>
                            </div>
                            <div className="place-self-end justify-self-end mt-4 smm:mt-0 smm:mb-[2vw]">
                                <Link href={"/"}>
                                    <button className=" ">
                                        <p className="text-xl text-right smm:text-[4vw] smm:leading-[4vw]">{"คลิกเพื่ออ่านเพิ่มเติม"}</p>
                                    </button>
                                </Link>
                            </div>
                        </div>                       
                    </div>
                    <div className="articalbox  smm:rounded-[5vw] overflow-hidden  smm:w-[80vw] smm:h-[95vw] lgm:mt-8 smm:mt-[8vw]">
                        <Image src={p2} alt="" className="smm:w-full" />
                        <div className="flex flex-col justify-between py-[20px] px-[30px] smm:px-[5vw] h-[268px] smm:h-[45vw] smm:py-0  ">
                            <div className="">
                                <p className="text-2xl smm:text-[4vw] smm:leading-[10vw]">{"แพ็คเกจรายวัน"}</p>
                                <p className="text-black mt-2 smm:mt-[3vw]  smm:text-[3vw] smm:leading-[4vw]">{"แพ็คเกจรายเดือน เริ่มต้นเพียง 25,000 บาท/เดือน เราดูแลผู้สูงอายุ ผู้ป่วย ด้วยบุคลากรเฉพาะทางด้านสุขภาพ พร้อมคำแนะนำจากบุคลากรมืออาชีพ"}</p>
                            </div>
                            <div className="place-self-end justify-self-end mt-4 smm:mt-0 smm:mb-[2vw]">
                                <Link href={"/"}>
                                    <button className=" ">
                                        <p className="text-xl text-right smm:text-[4vw] smm:leading-[4vw]">{"คลิกเพื่ออ่านเพิ่มเติม"}</p>
                                    </button>
                                </Link>
                            </div>
                        </div>              
                    </div>
                    <div className="articalbox  smm:rounded-[5vw] overflow-hidden  smm:w-[80vw] smm:h-[95vw] 2xlm:hidden lgm:block lgm:mt-8 smm:mt-[8vw]">
                        <Image src={p2} alt="" className="smm:w-full"/>
                        <div className="flex flex-col justify-between py-[20px] px-[30px] smm:px-[5vw] h-[268px] smm:h-[45vw] smm:py-0 ">
                            <div>
                                <p className="text-2xl smm:text-[4vw] smm:leading-[10vw]">{"แพ็คเกจรายเดือน"}</p>
                                <p className="text-black mt-2 smm:mt-[3vw] smm:text-[3vw] smm:leading-[4vw]">{"กิจกรรทางกาย หมายถึง การเคลื่อนไหวร่างกายใด ๆ ที่มีการใช้กล้ามเนื้อ แบ่งเป็น 3 ระดับตามการเคลื่อนไหว 1) กิจกรรมทางกายระดับเบา 2) กิจกรรมทางกายระดับปานกลาง 3) กิจกรรมทางกายระดับหนัก"}</p>
                            </div>
                            <div className="place-self-end justify-self-end mt-4 smm:mt-0 smm:mb-[2vw]">
                                <Link href={"/"}>
                                    <button className=" ">
                                        <p className="text-xl text-right smm:text-[4vw] smm:leading-[4vw]">{"คลิกเพื่ออ่านเพิ่มเติม"}</p>
                                    </button>
                                </Link>
                            </div>
                        </div>                                     
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