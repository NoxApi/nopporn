import s1 from "../../../public/service1.png"
import s2 from "../../../public/service2.png"
import s3 from "../../../public/service3.png"
import s4 from "../../../public/service4.png"
import pic1 from "../../../public/home/pic1.png"
import pic2 from "../../../public/home/pic2.png"
import Image from "next/image"
export const GalleryH =()=>{

    return(
        <div className="w-[1920px] h-auto relative opensans flex flex-col items-center text-main 2xlm:h-auto">
            <div className="w-[1440px] h-[1536px] bg-white flex flex-col items-center justify-between py-[80px] mdm:py-[10vw] 2xlm:h-auto">
                <p className="text-[64px] mdm:text-6xl smm:text-[9vw]">{"คลังภาพ"}</p>
                <div className="w-full flex mt-12 2xlm:flex-col 2xlm:items-center mdm:mt-[8vw] ">
                     <div className="w-[680px] flex flex-col justify-center items-start px-[50px] mdm:w-[100vw] mdm:px-[5vw] 2xlm:px-5 ">
                        <p className="text-5xl 2xlm:mt-12 mdm:mt-[4vw] mdm:text-[7vw] mdm:leading-[6vw]">{"บรรยากาศ"}</p>
                        <p className="text-black text-3xl leading-[40px] w-[600px] text-left mt-6 mdm:text-[5vw] mdm:leading-[7vw] mdm:w-auto">{"บ้านพักตั้งอยู่ใจกลางเมือง เดินทางสะดวก บรรยากาศปลอดโปร่งร่มรื่น พร้อมเจ้าหน้าที่ดูแลตลอด 24 ชั่วโมง มีโรงพยาบาลใกล้เคียงถึง 4 แห่ง ในกรณีฉุกเฉินสามารถส่งตัวเข้าโรงพยาบาลได้ทันท่วงที ถูกสุขอนามัย เครื่องปรับอากาศ บริการ wifi พร้อมกล้องวงจรปิดรักษาความปลอดภัย ที่จอดรถ"}</p>
                        <button className="mainbutton ml-[150px] mt-4 2xlm:mt-12 mdm:mt-[4vw] 2xlm:ml-0 2xlm:place-self-center 2xlm:w-[300px] 2xlm:h-[80px] mdm:w-[50vw] mdm:h-[12vw] 2xlm:hidden">
                            <p className="mx-[40px] mdm:text-[5vw] mdm:mx-0">{"ดูเพิ่มเติม"}</p>
                        </button>   
                    </div>
                    <div className="w-[640px] mdm:w-[100vw] mdm:flex justify-center  2xlm:mt-12 ">
                        <Image src={pic1} alt="" className="mdm:w-[90vw]"/>
                    </div>
                    <button className="mainbutton ml-[150px] mt-4 2xlm:mt-12 mdm:mt-[4vw] 2xlm:ml-0 2xlm:place-self-center 2xlm:w-[300px] 2xlm:h-[80px] mdm:w-[50vw] mdm:h-[12vw] 2xl:hidden">
                            <p className="mx-[40px] mdm:text-[5vw] mdm:mx-0">{"ดูเพิ่มเติม"}</p>
                    </button> 
                </div>
                <div className="w-full flex mt-12 2xlm:flex-col 2xlm:items-center mdm:mt-[8vw]">
                    <div className="w-[640px] mdm:w-[100vw] mdm:flex justify-center 2xlm:hidden">
                        <Image src={pic2} alt="" className="mdm:w-[90vw] 2xlm:hidden"/>
                    </div>
                    <div className="w-[680px]  flex flex-col justify-center items-start px-[50px] 2xlm:px-5 mdm:w-[100vw] mdm:px-[5vw]">
                        <p className="text-5xl 2xlm:mt-12 mdm:mt-[4vw] mdm:text-[7vw] mdm:leading-[6vw]">{"กิจกรรม"}</p>
                        <p className="text-black text-3xl leading-[40px] w-[600px] text-left mt-6 mdm:text-[5vw] mdm:leading-[7vw] mdm:w-auto">{"ออกกำลังกายอย่างเหมาะสม เพื่อนพูดคุยที่รู้ใจ เดินเล่นสร้างสุข สุขภาพแข็งแรง และกิจกรรมนันทการต่างๆตามเทศกาล และ วันสำคัญทางศาสนา ทำบุญ อิ่มใจ อิ่มบุญ เล่นเกม ปลูกต้นไม้ ทั้งหมดนี้ด้วยบุคลากรเฉพาะทาง มั่นใจได้เลยว่าคนที่ท่านรักและห่วงใยจะได้รับการดูแลที่เหมาะสม"}</p>
                        <button className="mainbutton ml-[150px] mt-4 2xlm:mt-12 mdm:mt-[4vw] 2xlm:ml-0 2xlm:place-self-center 2xlm:w-[300px] 2xlm:h-[80px] mdm:w-[50vw] mdm:h-[12vw] 2xlm:hidden">
                            <p className="mx-[40px] mdm:text-[5vw] mdm:mx-0">{"ดูเพิ่มเติม"}</p>
                        </button>   
                    </div>
                    <div className="w-[640px] mdm:w-[100vw] mdm:flex justify-center 2xl:hidden 2xlm:mt-12">
                        <Image src={pic2} alt="" className="mdm:w-[90vw] 2xl:hidden"/>
                    </div>
                    <button className="mainbutton ml-[150px] mt-4 2xlm:mt-12 mdm:mt-[4vw] 2xlm:ml-0 2xlm:place-self-center 2xlm:w-[300px] 2xlm:h-[80px] mdm:w-[50vw] mdm:h-[12vw] 2xl:hidden">
                            <p className="mx-[40px] mdm:text-[5vw] mdm:mx-0">{"ดูเพิ่มเติม"}</p>
                    </button> 
                    
                </div>
                
                
            </div>
            <div className="w-full bg-div2 bg-cover h-[256px] flex justify-center  items-center 2xlm:h-auto smm:w-[100vw] bg-[center_top_600px] smm:bg-[center_top_-89vw] smm:h-[45vw]"> 
                <div className="bg-black h-full w-[1920px] px-[50px] smm:px-[5vw] bg-opacity-40 flex justify-center  items-center">
                    <div className="w-[1440px] flex items-center justify-between px-[50px] 2xlm:flex-col ">
                        
                        <button className="mainbutton ml-[150px] 2xlm:ml-0 2xlm:mb-[70px] lgm:mb-[40px] smm:mb-[4vw] smm:w-[30vw] smm:text-[3vw] smm:leading-[3vw] smm:h-[10vw] 2xlm:hidden">
                            <p className="mx-[40px] smm:mx-0">{"ติดต่อเรา"}</p>
                        </button>   
                        <div className=" flex flex-col  2xlm:py-[70px] smm:py-[4vw] ">
                            <div className="flex w-full 2xlm:justify-center">
                                <p className="text-6xl font-semibold addshadow text-right smm:text-[7vw] smm:leading-[6vw]">{"ลดทันที"}</p>
                                <p className="text-6xl font-semibold addshadow text-right text-[#F70A08] ml-4 smm:text-[7vw] smm:leading-[6vw]">{"1,000.-"}</p>
                            </div>
                                <p className="text-white text-[36px] addshadow text-right mt-6 smm:text-[4vw] smm:leading-[4vw] smm:mt-[4vw]">{"สำหรับห้องเดี่ยวที่ นพพรเนิร์สซิ่งโฮม อุปกรณ์ครบครัน"}</p>
                        </div>
                        <button className="mainbutton ml-[150px] 2xlm:ml-0 2xlm:mb-[70px] lgm:mb-[40px] smm:mb-[4vw] smm:w-[30vw] smm:text-[3vw] smm:leading-[3vw] smm:h-[10vw] 2xl:hidden ">
                            <p className="mx-[40px] smm:mx-0">{"ติดต่อเรา"}</p>
                        </button>   
                    </div>
                </div>
            </div>  
        </div>
    )
}