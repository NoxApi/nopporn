import logo from "../../../public/home/logo.png"
import s1 from "../../../public/s1.png"
import s2 from "../../../public/s2.png"
import s3 from "../../../public/s3.png"
import s4 from "../../../public/service4.png"
import loc from "../../../public/location.png"
import gmap from "../../../public/gmap.png"
import Image from "next/image"
import Link from "next/link"
export const Footer =()=>{

    return(
        <div className="w-[1920px] h-[444px] relative opensans flex flex-col items-center text-main border-t-4 border-main">
            <div className="w-[1440px] h-[385px] bg-white flex items-center justify-between px-[80px]">
                <Image src={logo} alt="" className="-mt-12"/>
                <div className="flex flex-col">
                    <Link href={"/"}>
                        <button>
                            <p className="text-xl link">{"หน้าแรก"}</p>
                        </button>
                    </Link>
                    <Link href={"/service"}>
                        <button className="mt-8">
                            <p className="text-xl link">{"บริการ"}</p>
                        </button>
                    </Link>
                    <Link href={"/gallery"}>
                        <button className="mt-8">
                            <p className="text-xl link">{"คลังภาพ"}</p>
                        </button>
                    </Link>
                    <Link href={"/aboutus"}>
                        <button className="mt-8">
                            <p className="text-xl link">{"เกี่ยวกับเรา"}</p>
                        </button>
                    </Link>

                </div>
                <div className="flex flex-col">  
                    <div className="flex">    
                        <Image src={s4} alt="" className="w-[30px] "/>   
                        <p className="text-xl ml-2">{"ติดต่อเรา"}</p>
                    </div>  
                    <div className="flex mt-4">    
                        <Image src={s1} alt="" className="w-[40px]"/>   
                        <p className="text-xl ml-5">{"081-581-9850"}</p>
                    </div>  
                    <div className="flex mt-4">    
                        <Image src={s2} alt="" className="w-[40px]"/>   
                        <p className="text-xl ml-5">{"รับดูแลผู้สูงอายุ นพพรเนิร์สซิ่งโฮม"}</p>
                    </div>  
                    <div className="flex mt-4">    
                        <Image src={s3} alt="" className="w-[40px]"/>   
                        <p className="text-xl ml-5">{"wi0411"}</p>
                    </div>  
                </div>
                <div className="flex flex-col ">  
                    <div className="flex">    
                        <Image src={loc} alt="" className="w-[30px] "/>   
                        <p className="text-xl ml-2">{"แผนที่"}</p>
                    </div>  
                    <Image src={gmap} alt="" className="mt-4"/>
                </div>
            </div>
            <div className="w-[1920px] h-[59px] bg-main flex flex-col items-center justify-center ">
                <p className="text-white text-[20px] uppercase">{"Copyright © 2015 by TaladPhlu Nursing Home. All rights reserved."}</p>
           </div>
        </div>
    )
}