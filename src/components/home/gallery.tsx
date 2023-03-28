import s1 from "../../../public/service1.png"
import s2 from "../../../public/service2.png"
import s3 from "../../../public/service3.png"
import s4 from "../../../public/service4.png"
import pic1 from "../../../public/home/pic1.png"
import Image from "next/image"
export const GalleryH =()=>{

    return(
        <div className="w-[1920px] h-[1763px] relative opensans flex flex-col items-center text-main">
            <div className="w-[1440px] h-[1507px] bg-white flex flex-col items-center justify-between py-[40px]">
                <p className="text-[64px] ">{"คลังภาพ"}</p>
                <div className="w-full flex mt-6">
                    <div className="w-[680px] flex flex-col justify-center items-end px-[50px]">
                        <p className="text-5xl">{"บรรยากาศ"}</p>
                        <p className="text-black text-3xl w-[600px] text-right mt-6">{"บ้านพักตั้งอยู่ใจกลางเมือง เดินทางสะดวก บรรยากาศปลอดโปร่งร่มรื่น พร้อมเจ้าหน้าที่ดูแลตลอด 24 ชั่วโมง มีโรงพยาบาลใกล้เคียงถึง 4 แห่ง ในกรณีฉุกเฉินสามารถส่งตัวเข้าโรงพยาบาลได้ทันท่วงที ถูกสุขอนามัย เครื่องปรับอากาศ บริการ wifi พร้อมกล้องวงจรปิดรักษาความปลอดภัย ที่จอดรถ"}</p>
                        <button className="mainbutton ml-[150px] mt-4">
                            <p className="mx-[40px] ">{"ดูเพิ่มเติม"}</p>
                        </button>   
                    </div>
                    <div className="w-[680px]">
                        <Image src={pic1} alt=""/>
                    </div>
                </div>
                <div className="w-full flex mt-12">
                <div className="w-[680px]">
                        <Image src={pic1} alt=""/>
                    </div>
                    <div className="w-[680px] flex flex-col justify-center items-start px-[50px]">
                        <p className="text-5xl">{"บรรยากาศ"}</p>
                        <p className="text-black text-3xl w-[600px] text-left mt-6">{"บ้านพักตั้งอยู่ใจกลางเมือง เดินทางสะดวก บรรยากาศปลอดโปร่งร่มรื่น พร้อมเจ้าหน้าที่ดูแลตลอด 24 ชั่วโมง มีโรงพยาบาลใกล้เคียงถึง 4 แห่ง ในกรณีฉุกเฉินสามารถส่งตัวเข้าโรงพยาบาลได้ทันท่วงที ถูกสุขอนามัย เครื่องปรับอากาศ บริการ wifi พร้อมกล้องวงจรปิดรักษาความปลอดภัย ที่จอดรถ"}</p>
                        <button className="mainbutton ml-[150px] mt-4">
                            <p className="mx-[40px] ">{"ดูเพิ่มเติม"}</p>
                        </button>   
                    </div>
                    
                </div>
                
                
            </div>
            <div className="w-full bg-div2 bg-cover h-[256px] flex justify-center px-[50px] items-center"> 
                <div className="w-[1440px] flex items-center justify-between px-[50px]">
                    
                    <button className="mainbutton ml-[150px]">
                        <p className="mx-[40px]">{"ติดต่อเรา"}</p>
                    </button>   
                    <div className=" flex flex-col  justify-between ">
                        <div className="flex w-full justify-end">
                            <p className="text-6xl font-semibold addshadow text-right">{"ลดทันที"}</p>
                            <p className="text-6xl font-semibold addshadow text-right text-[#F70A08] ml-4">{"1,000.-"}</p>
                        </div>
                            <p className="text-white text-[36px] addshadow text-right mt-6">{"สำหรับห้องเดี่ยวที่ นพพรเนิร์สซิ่งโฮม อุปกรณ์ครบครัน"}</p>
                    </div>
                </div>
            </div>  
        </div>
    )
}