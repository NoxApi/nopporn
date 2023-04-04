import Link from "next/link"
import s1 from "../../../public/s1.png"
import s2 from "../../../public/s2.png"
import s3 from "../../../public/s3.png"
import s4 from "../../../public/s4.png"
import s5 from "../../../public/s5.png"
import Image from "next/image"
export default  function Contactpage(){

    return(
        <div className="w-[1920px] h-auto relative opensans flex flex-col items-center text-main 2xlm:h-auto">
            <div className="w-full bg-head h-[400px] mdm:h-[40vw] bg-cover mdm:bg-contain bg-center flex justify-center items-center">
                <p className="text-6xl smm:text-[10vw]">{"ติดต่อเรา"}</p>
            </div>
            <div className="w-full  h-[500px] lgm:h-auto  flex  items-center justify-center lgm:mt-8 smm:mt-[5vw]">
                <div className="w-[1440px] flex justify-center px-0 lgm:w-[100vw] lgm:flex-col items-center">
                    <div className="flex flex-col items-start w-[400px] lgm:w-[500px] smm:w-[80vw]">  
                            <div className="flex mt-4 smm:mt-[3.5vw] items-center">    
                                <Image src={s1} alt="" className="w-[40px] smm:w-[8vw]"/>   
                                <p className="text-xl smm:text-[3.3vw] ml-5 smm:ml-[3vw] smm:leading-[3vw]">{"081-581-9850"}</p>
                            </div>  
                            <div className="flex mt-4 smm:mt-[3.5vw] items-center">    
                                <Image src={s2} alt="" className="w-[40px] smm:w-[8vw]"/>   
                                <p className="text-xl smm:text-[3.3vw] ml-5 smm:ml-[3vw] smm:leading-[3vw]">{"wi0411"}</p>
                            </div>  
                            <div className="flex mt-4 smm:mt-[3.5vw] items-center ">    
                                <Image src={s3} alt="" className="w-[40px] h-[40px] smm:w-[8vw] smm:h-[8vw]"/>
                                <div>  
                                    <p className="text-xl ml-5 smm:text-[3.3vw] smm:ml-[3vw] smm:leading-[5vw]">{"รับดูแลผู้สูงอายุ"}</p> 
                                    <p className="text-xl ml-5 smm:text-[3.3vw] smm:ml-[3vw] smm:leading-[5vw]">{"นพพรเนิร์สซิ่งโฮม"}</p>
                                </div> 
                            </div>
                            <div className="flex mt-4 smm:mt-[3.5vw] items-center">    
                                <Image src={s4} alt="" className="w-[40px] smm:w-[8vw]"/>   
                                <p className="text-xl smm:text-[3.3vw] ml-5 smm:ml-[3vw] smm:leading-[3vw]">{"wi_home@hotmail.co.th"}</p>
                            </div>
                            <div className="flex mt-4 smm:mt-[3.5vw] items-center">    
                                <Image src={s5} alt="" className="w-[40px] smm:w-[8vw] mb-[40px] smm:mb-[4vw]"/>   
                                <p className="text-xl smm:text-[3.3vw] ml-5 smm:ml-[3vw] smm:leading-[4vw]">{"บ้านนพพร เนิร์สซิ่งโฮม เลขที่ 101/769 ซอย 2 หมู่บ้านซื่อตรง ถ.รัตนาธิเบศร์ ต.ไทรม้า อ.เมือง จ.นนทบุร 11000"}</p>
                            </div>       
                    </div>

                    <div className="flex flex-col lgm:mt-8 smm:mt-[4vw] ">  
                        <div className="flex">    
                            <Image src={s5} alt="" className="w-[40px] h-[42px] smm:w-[4vw] smm:h-[4vw] "/>   
                            <p className="text-4xl ml-2 smm:text-[4vw] smm:leading-[4vw]">{"แผนที่"}</p>
                        </div>  
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.505923558485!2d100.46450721532987!3d13.868669998309823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b26dffdb8bb%3A0xaa631fd913549ddc!2z4Lia4LmJ4Liy4LiZ4LiZ4Lie4Lie4LijIOC5gOC4meC4tOC4o-C5jOC4quC4i-C4tOC5iOC4h-C5guC4ruC4oQ!5e0!3m2!1sth!2sth!4v1680252039847!5m2!1sth!2sth" 
                             allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" 
                             className="mt-4 w-[500px] h-[280px] smm:w-[80vw] smm:h-[43vw]">
                            </iframe>
                    </div>
                </div>
            </div>
            <div className="w-full bg-div3 bg-cover h-auto flex justify-center  items-center 2xlm:h-auto smm:w-[100vw] bg-[center_top_600px] smm:bg-[center_top_0vw] smm:h-[45vw] lgm:mt-8 smm:mt-[10vw]"> 
                
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