import a1 from "../../../public/home/a1.png"
import a2 from "../../../public/home/a2.png"
import a3 from "../../../public/home/a3.png"
import s2 from "../../../public/service2.png"
import s3 from "../../../public/service3.png"
import s4 from "../../../public/service4.png"
import Image from "next/image"
import Link from "next/link"
export const ArticleH =()=>{

    return(
        <div className="w-[1920px] h-[875px] relative opensans flex flex-col items-center text-main 2xlm:h-auto">
            <div className="w-[1440px] h-[619px] bg-white flex flex-col items-center justify-between py-[80px] 2xlm:h-auto ">
                <p className="text-[64px] mdm:text-6xl smm:text-[9vw]">{"บทความ"}</p>
                <div className="flex w-[1440px] 2xlm:w-[1024px] lgm:flex-col justify-between items-center mt-12 smm:mt-[10vw] px-[20px] 2xlm:px-[60px] ">
                    <div className="articalbox  smm:rounded-[5vw] overflow-hidden  smm:w-[80vw] smm:h-[95vw] ">
                        <Image src={a1} alt="" className="smm:w-full"/>
                        <div className="flex flex-col justify-between py-[20px] px-[30px] smm:px-[5vw] h-[268px] smm:h-[45vw] smm:py-0">
                            <div >
                                <p className="text-2xl smm:text-[4vw] smm:leading-[10vw] ">{"5 วิธีดูแล ผู้ป่วยติดเตียง"}</p>
                                <p className="text-black mt-2 smm:mt-[3vw] smm:text-[3vw] smm:leading-[4vw]">{"ท่านใด ที่มีผู้ป่วยติดเตียงอยู่ที่บ้าน คงมีความกังวลใจว่า จะดูแลผู้ป่วยติดเตียงอย่างไร ให้ถูกวิธี เนื่องจากผู้ป่วย ไม่สามารถขยับร่างกายใช้ชีวิตประจำวันเองได้ จำเป็นจะต้องมีคนดูแลตลอดเวลา ดังนั้นควรศึกษาวิธีการ และ ทำความเข้าใจถูกต้อง เพื่อฟื้นฟูร่างกายของผู้ป่วย อย่างมีประสิทธิภาพ"}</p>
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
                        <Image src={a2} alt="" className="smm:w-full" />
                        <div className="flex flex-col justify-between py-[20px] px-[30px] smm:px-[5vw] h-[268px] smm:h-[45vw] smm:py-0  ">
                            <div className="">
                                <p className="text-2xl smm:text-[4vw] smm:leading-[10vw]">{"โรคเบาหวาน กับ ภาวะแทรกซ้อน"}</p>
                                <p className="text-black mt-2 smm:mt-[3vw]  smm:text-[3vw] smm:leading-[4vw]">{"ภาวะแทรกซ้อน ของโรคเบาหวานนั้นแบ่งออกได้เป็น 2 กลุ่ม คือ แทรกซ้อนชนิดเฉียบพลัน และ ภาวะแทรกซ้อนชนิดเรื้อรัง"}</p>
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
                        <Image src={a3} alt="" className="smm:w-full"/>
                        <div className="flex flex-col justify-between py-[20px] px-[30px] smm:px-[5vw] h-[268px] smm:h-[45vw] smm:py-0 ">
                            <div>
                                <p className="text-2xl smm:text-[4vw] smm:leading-[10vw]">{"กิจกรรมทางกาย เพื่อสุขภาพที่ดีขึ้น"}</p>
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
        </div>
    )
}