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
        <div className="w-[1920px] h-[875px] relative opensans flex flex-col items-center text-main">
            <div className="w-[1440px] h-[619px] bg-white flex flex-col items-center justify-between py-[80px]">
                <p className="text-[64px] ">{"บทความ"}</p>
                <div className="flex w-[1440px] justify-between items-center mt-12">
                    <div className="articalbox overflow-hidden">
                        <Image src={a1} alt=""/>
                        <div className="flex flex-col justify-between py-[20px] px-[30px] h-[268px]">
                            <div>
                                <p className="text-2xl">{"5 วิธีดูแล ผู้ป่วยติดเตียง"}</p>
                                <p className="text-black mt-2">{"ท่านใด ที่มีผู้ป่วยติดเตียงอยู่ที่บ้าน คงมีความกังวลใจว่า จะดูแลผู้ป่วยติดเตียงอย่างไร ให้ถูกวิธี เนื่องจากผู้ป่วย ไม่สามารถขยับร่างกายใช้ชีวิตประจำวันเองได้ จำเป็นจะต้องมีคนดูแลตลอดเวลา ดังนั้นควรศึกษาวิธีการ และ ทำความเข้าใจถูกต้อง เพื่อฟื้นฟูร่างกายของผู้ป่วย อย่างมีประสิทธิภาพ"}</p>
                            </div>
                            <div className="place-self-end justify-self-end mt-4">
                                <Link href={"/"}>
                                    <button className=" ">
                                        <p className="text-xl text-right">{"คลิกเพื่ออ่านเพิ่มเติม"}</p>
                                    </button>
                                </Link>
                            </div>
                        </div>                       
                    </div>
                    <div className="articalbox overflow-hidden">
                        <Image src={a2} alt=""/>
                        <div className="flex flex-col justify-between py-[20px] px-[30px] h-[268px]">
                            <div>
                                <p className="text-2xl">{"โรคเบาหวาน กับ ภาวะแทรกซ้อน"}</p>
                                <p className="text-black mt-2">{"ภาวะแทรกซ้อน ของโรคเบาหวานนั้นแบ่งออกได้เป็น 2 กลุ่ม คือ แทรกซ้อนชนิดเฉียบพลัน และ ภาวะแทรกซ้อนชนิดเรื้อรัง"}</p>
                            </div>
                            <div className="place-self-end justify-self-end mt-4">
                                <Link href={"/"}>
                                    <button className=" ">
                                        <p className="text-xl text-right">{"คลิกเพื่ออ่านเพิ่มเติม"}</p>
                                    </button>
                                </Link>
                            </div>
                        </div>              
                    </div>
                    <div className="articalbox overflow-hidden">
                        <Image src={a3} alt=""/>
                        <div className="flex flex-col justify-between py-[20px] px-[30px] h-[268px]">
                            <div>
                                <p className="text-2xl">{"กิจกรรมทางกาย เพื่อสุขภาพที่ดีขึ้น"}</p>
                                <p className="text-black mt-2">{"กิจกรรทางกาย หมายถึง การเคลื่อนไหวร่างกายใด ๆ ที่มีการใช้กล้ามเนื้อ แบ่งเป็น 3 ระดับตามการเคลื่อนไหว 1) กิจกรรมทางกายระดับเบา 2) กิจกรรมทางกายระดับปานกลาง 3) กิจกรรมทางกายระดับหนัก"}</p>
                            </div>
                            <div className="place-self-end justify-self-end mt-4">
                                <Link href={"/"}>
                                    <button className=" ">
                                        <p className="text-xl text-right">{"คลิกเพื่ออ่านเพิ่มเติม"}</p>
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