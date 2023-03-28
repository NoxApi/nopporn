import Image from "next/image"
import s1 from "../../../public/s1.png"
export const Cover =()=>{

    return(
        <div className="w-[1920px] h-[1024px] relative opensans text-[#0C294B] flex flex-col items-center">
            <div className="w-[1440px] h-[896px] bg-black">
                <div className="w-[600px] h-full bg-red-700 flex justify-center items-center">
                    <div className="w-[500px] h-auto bg-slate-100 ">
                        <p className="text-2xl text-left">{"อารมณ์ดี สุขภาพดี"}</p>
                        <div className="flex mt-4">
                            <p className="text-6xl text-left ">{"ที่"}</p>
                            <p className="text-6xl text-left text-[#00BBEA]">{"บ้านนพพร"}</p>
                        </div>
                        <p className="text-4xl text-left mt-4">{"ให้เราช่วยดูแล"}</p>
                        <p className="text-4xl text-left mt-4">{"คนที่ท่านรัก"}</p>
                        
                    </div>
                </div>
            </div>
            <div className="w-full bg-main h-[128px] flex justify-center ">
                    <div className="flex justify-between px-[50px] items-center w-[1440px]">
                    <div className="socialpc w-[420px] flex items-center">
                        <Image src={s1} alt="" className="w-[50px] "/>
                        <div className="h-[50px]  flex flex-col justify-between ">
                            <p className="text-xl">{"โทร"}</p>
                            <p className="text-xl">{"081-581-9850"}</p>
                        </div>
                    </div>
                    <div className="socialpc w-[420px] flex items-center">
                        <Image src={s1} alt="" className="w-[50px] "/>
                        <div className="h-[50px]  flex flex-col justify-between ">
                            <p className="text-xl">{"โทร"}</p>
                            <p className="text-xl">{"081-581-9850"}</p>
                        </div>
                    </div>
                    <div className="socialpc w-[420px] flex items-center">
                        <Image src={s1} alt="" className="w-[50px] "/>
                        <div className="h-[50px]  flex flex-col justify-between ">
                            <p className="text-xl">{"โทร"}</p>
                            <p className="text-xl">{"081-581-9850"}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="mainbutton absolute bottom-[200px] left-[50%] translate-x-[-50%]">{"สอบถามเพิ่มเติม"}</button>
            
        </div>
    )
}