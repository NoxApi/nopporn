import s1 from "../../../public/service1.png"
import s2 from "../../../public/service2.png"
import s3 from "../../../public/service3.png"
import s4 from "../../../public/service4.png"
import logo from "../../../public/home/logo.png"
import Image from "next/image"
import Link from "next/link"
export const Navbar =()=>{

    return(
        <div className="w-[1920px] h-[80x] relative opensans flex justify-center items-center text-main z-20 navbar">
            <div className="w-[1440px] h-full  flex items-center justify-between">
                <Image src={logo} alt="" className="w-[80px]"/>
                <div>
                    <Link href={"/"}>
                        <button className="link">
                            <p className="text-xl link ">{"หน้าแรก"}</p>
                        </button>
                    </Link>
                    <Link href={"/service"}>
                        <button className="ml-8">
                            <p className="text-xl link">{"บริการ"}</p>
                        </button>
                    </Link>
                    <Link href={"/gallery"}>
                        <button className="ml-8">
                            <p className="text-xl link">{"คลังภาพ"}</p>
                        </button>
                    </Link>
                    <Link href={"/aboutus"}>
                        <button className="ml-8">
                            <p className="text-xl link">{"เกี่ยวกับเรา"}</p>
                        </button>
                    </Link>
                    <Link href={"/contact"}>
                        <button className="ml-8">
                            <p className="text-xl link">{"ติดต่อเรา"}</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}