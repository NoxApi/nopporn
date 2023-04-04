import logo from "../../../public/home/logo.png"
import bur from "../../../public/burger.svg"
import Image from "next/image"
import Link from "next/link"
import { useState,Fragment } from "react"
import {
    Dialog,
    Disclosure,
    Menu,
    Popover,
    Transition,
  } from '@headlessui/react'
export const Navbar =()=>{

    return(
        <div className="w-[1920px] h-[80x] relative opensans flex justify-center items-center text-main z-20 navbar mdm:h-[15vw]">
            <div className="w-[1440px] h-full  flex items-center justify-between px-[20px] 2xlm:w-[100vw]">
                <Image src={logo} alt="" className="w-[80px] mdm:w-[15vw]"/>
                <div className="lgm:hidden">
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
                <HeaderMobile/>
            </div>
        </div>
    )
}

function HeaderMobile() {
    let [isOpen, setIsOpen] = useState(false)
    const openModal = () => {
      setIsOpen(true)
    }
    const closeModal = () => {
      setIsOpen(false)
    }
    return (
      <div className="lg:hidden w-full flex justify-end  ">
        <button type="button" onClick={openModal} className="">       
                    <Image src={bur} alt="" className="w-[50px] mdm:w-[10vw]"/>
        </button>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-[60] overflow-y-aut"
            onClose={closeModal}
          >
            <div className="min-h-screen text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black/60" />
              </Transition.Child>
  
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-full"
              >
                <div className="ml-auto w-[50vw] h-[100vh] relative  overflow-hidden text-left align-middle transition-all transform shadow-xl bg-white">
                  <div className=" mx-4 text-white text-2xl flex flex-col items-start w-[100%] px-[2vw] mt-[10vw]">
                  <button onClick={closeModal} className="w-[100%] flex">
                        <Link href={"/"}>      
                            <p className="my-[5vw] text-xl text-main">{"หน้าแรก"}</p> 
                        </Link>
                  </button>
                  <button onClick={closeModal} className="w-[100%] flex">
                        <Link href={"/service"}>      
                            <p className="my-[5vw] text-xl text-main">{"บริการ"}</p> 
                        </Link>
                  </button>
                  <button onClick={closeModal} className="w-[100%] flex">
                        <Link href={"/gallery"}>      
                            <p className="my-[5vw] text-xl text-main">{"คลังภาพ"}</p> 
                        </Link>
                  </button>
                  <button onClick={closeModal} className="w-[100%] flex">
                        <Link href={"/aboutus"}>      
                            <p className="my-[5vw] text-xl text-main">{"เกี่ยวกับเรา"}</p> 
                        </Link>
                  </button>
                  <button onClick={closeModal} className="w-[100%] flex">
                        <Link href={"/contact"}>      
                            <p className="my-[5vw] text-xl text-main">{"ติดต่อเรา"}</p> 
                        </Link>
                  </button>
                    {/* <Image
                      className="max-w-[300px] mx-6 md:mx-0 mt-8"
                      src={MarketplaceSmall}
                      alt="MarketplaceSmall"
                    /> */}
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    )
                  }