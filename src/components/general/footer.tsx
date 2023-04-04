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
        <div className="w-[1920px] h-[444px] relative opensans flex flex-col items-center text-main border-t-4 border-main xlm:h-auto">
            <div className="w-[1440px] h-[385px] bg-white flex items-center justify-between px-[90px] xlm:h-auto xlm:flex-col">
                <Image src={logo} alt="" className="-mt-12 smm:w-[30vw] smm:mt-[-5vw] smm:translate-x-[-19vw]"/>
                <div className="flex justify-between w-[900px] lgm:flex-col lgm:items-center">
                    <div className="flex w-[500px] justify-between lgm:w-[400px] smm:w-[100vw] smm:px-[15vw] ">
                        <div className="flex flex-col justify-between items-start smm:py-[3vw]">
                            
                                <button className="">
                                    <Link href={"/"}>
                                        <p className="text-xl link smm:text-[3.3vw] smm:leading-[3vw]">{"หน้าแรก"}</p>
                                    </Link>
                                </button>
                           
                           
                                <button className="mt-8 smm:mt-[4vw]">
                                    <Link href={"/service"}>
                                        <p className="text-xl smm:text-[3.3vw] link smm:leading-[3vw]">{"บริการ"}</p>
                                    </Link>
                                </button>
                            
                            
                                <button className="mt-8 smm:mt-[4vw]">
                                    <Link href={"/gallery"}>
                                        <p className="text-xl smm:text-[3.3vw] link smm:leading-[3vw]">{"คลังภาพ"}</p>
                                    </Link>
                                </button>
                            
                           
                                <button className="mt-8 smm:mt-[4vw]">
                                    <Link href={"/aboutus"}>
                                        <p className="text-xl smm:text-[3.3vw] link smm:leading-[3vw]">{"เกี่ยวกับเรา"}</p>
                                    </Link>
                                </button>
                          

                        </div>
                        <div className="flex flex-col">  
                            <div className="flex">    
                                <Image src={s4} alt="" className="w-[30px] smm:w-[5vw]"/>   
                                <p className="text-xl smm:text-[3.3vw] ml-2 smm:ml-[2vw] smm:leading-[3vw]">{"ติดต่อเรา"}</p>
                            </div>  
                            <div className="flex mt-4 smm:mt-[3.5vw]">    
                                <Image src={s1} alt="" className="w-[40px] smm:w-[8vw]"/>   
                                <p className="text-xl smm:text-[3.3vw] ml-5 smm:ml-[3vw] smm:leading-[3vw]">{"081-581-9850"}</p>
                            </div>  
                            <div className="flex mt-4 smm:mt-[3.5vw]">    
                                <Image src={s2} alt="" className="w-[40px] smm:w-[8vw]"/>   
                                <p className="text-xl smm:text-[3.3vw] ml-5 smm:ml-[3vw] smm:leading-[3vw]">{"wi0411"}</p>
                            </div>  
                            <div className="flex mt-4  smm:mt-[3.5vw] justify-center items-center">    
                                <Image src={s3} alt="" className="w-[40px] h-[40px] smm:w-[8vw] smm:h-[8vw]"/>
                                <div>  
                                    <p className="text-xl ml-5 smm:text-[3.3vw] smm:ml-[3vw] smm:leading-[5vw]">{"รับดูแลผู้สูงอายุ"}</p> 
                                    <p className="text-xl ml-5 smm:text-[3.3vw] smm:ml-[3vw] smm:leading-[5vw]">{"นพพรเนิร์สซิ่งโฮม"}</p>
                                </div> 
                            </div>  
                        </div>
                    </div>
                    <div className="flex flex-col lgm:mt-8 smm:mt-[4vw] ">
                        <Link href={"https://www.google.com/maps?ll=13.868618,100.466945&z=17&t=m&hl=th&gl=TH&mapclient=embed&cid=12277692026334780892"} target="_blank" rel="noopener noreferrer">
                            <div className="flex">    
                                <Image src={loc} alt="" className="w-[30px] smm:w-[4vw] smm:h-[4vw] "/>   
                                <p className="text-xl ml-2 smm:text-[4vw] smm:leading-[4vw]">{"แผนที่"}</p>
                            </div>  
                            <Image src={gmap} alt="" className="mt-4 w-[300px] lgm:w-[400px] smm:w-[70vw] smm:mt-[2vw]"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-[1920px] h-[59px] bg-main flex flex-col items-center justify-center mdm:h-[10vw] xlm:mt-12 ">
                <p className="text-white text-[20px] xlm:text-sm uppercase mdm:text-[1.8vw]">{"COPYRIGHT © 2023 BY JAK SOOK PLOOK RUK CO., LTD. ALL RIGHTS RESERVED. POWERED BY ZAPFILE CO., LTD."}</p>
           </div>
        </div>
    )
}