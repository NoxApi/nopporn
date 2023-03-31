import s1 from "../../../public/service1.png"
import s2 from "../../../public/service2.png"
import s3 from "../../../public/service3.png"
import s4 from "../../../public/service4.png"
import Image from "next/image"
import Link from "next/link"
export const ServiceH =()=>{

    return(
        <div className="w-[1920px] h-[875px] relative opensans flex flex-col items-center text-main 2xlm:h-auto">
            <div className="w-[1440px] h-[619px] bg-white flex flex-col items-center justify-between py-[80px] smm:py-[10vw] 2xlm:h-auto">
                <p className="text-[64px] mdm:text-6xl smm:text-[9vw] ">{"บริการของเรา"}</p>
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
            <div className="w-full bg-div1 bg-cover h-[256px] flex justify-center  items-center 2xlm:h-auto smm:w-[100vw] bg-center smm:h-[45vw]"> 
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