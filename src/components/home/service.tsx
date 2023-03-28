import s1 from "../../../public/service1.png"
import s2 from "../../../public/service2.png"
import s3 from "../../../public/service3.png"
import s4 from "../../../public/service4.png"
import Image from "next/image"
export const ServiceH =()=>{

    return(
        <div className="w-[1920px] h-[875px] relative opensans flex flex-col items-center text-main">
            <div className="w-[1440px] h-[619px] bg-white flex flex-col items-center justify-between py-[90px]">
                <p className="text-[64px] ">{"บริการของเรา"}</p>
                <div className="w-full h-auto flex justify-between">
                    <div className="flex flex-col items-center">
                        <Image src={s1} alt="" className="w-[200px]"/>
                        <p className="text-3xl font-semibold">{"ดูแลเอาใจใส่"}</p>
                        <p className="text-2xl font-light">{"ดูแลเอาใจใส่ดุจญาติมิตร"}</p>
                        <p className="text-2xl">{"ประสบการณ์การดูแลผู้สูงอายุ มากกว่า 10 ปี"}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src={s2} alt="" className="w-[200px]"/>
                        <p className="text-3xl font-semibold">{"สะอาด"}</p>
                        <p className="text-2xl font-light">{"ที่พักสะอาด"}</p>
                        <p className="text-2xl">{"ซัก รีดเครืองนุ่มห่ม"}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src={s3} alt="" className="w-[200px]"/>
                        <p className="text-3xl font-semibold">{"รถพยาบาล"}</p>
                        <p className="text-2xl font-light">{"บริการพาไปพบแพทย์"}</p>
                        <p className="text-2xl">{"นวดบำบัด และ ทำกายภาพ"}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src={s4} alt="" className="w-[200px]"/>
                        <p className="text-3xl font-semibold">{"บริการ 24 ชม."}</p>
                        <p className="text-2xl font-light">{"มีเจ้าหน้าที่ตลอด 24 ชั่วโมง"}</p>
                    </div>
                </div>
                
            </div>
            <div className="w-full bg-div1 bg-cover h-[256px] flex justify-center px-[50px] items-center"> 
                <div className="w-[1440px] flex items-center">
                    <div className=" flex flex-col h-full justify-between py-[70px] bg">
                            <p className="text-6xl font-semibold addshadow">{"บริการระดับมืออาชีพ"}</p>
                            <p className="text-white text-[36px] addshadow mt-6">{"บริการดูแลผู้สูงอายุ ดูแลดุจญาติมิตร ด้วยบุคลากรเฉพาะทาง"}</p>
                    </div>
                    <button className="mainbutton ml-[300px]">
                        <p className="mx-[40px]">{"ติดต่อเรา"}</p>
                    </button>   
                    
                </div>
            </div>  
        </div>
    )
}