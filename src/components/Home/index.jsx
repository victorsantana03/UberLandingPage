import { Header } from "../Header";
import BackGroundImage from "../../assets/images/background-home.png"
import { FaSignal } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { MidSection } from "../MidSection";
import { BottomSection } from "../BottomSection";

export function Home() {
    return (
        <div>
            <main>
                <section className='bg-cover h-screen' style={{ backgroundImage: `url(${BackGroundImage})` }}>
                    <Header />

                    <div className="w-2/5 ml-40 mt-20 rounded-xl">

                        <div className="bg-white h-24 xl:h-32 flex rounded-t-xl">
                            <ul className="flex justify-around items-center w-full">
                                <div className="flex flex-col items-center text-xl gap-1 ">
                                    <FaSignal className="xl:text-3xl cursor-pointer" />
                                    <li className="font-medium hidden sm:flex">Drive or driver</li>
                                    <div className="w-full h-px xl:h-1 bg-black rounded"></div>
                                </div>
                                <div className="flex flex-col items-center text-xl gap-1">
                                    <MdFoodBank className="xl:text-3xl cursor-pointer" />
                                    <li className="font-medium hidden sm:flex">Eat</li>
                                </div>
                                <div className="flex flex-col items-center text-xl gap-1 ">
                                    <FaCar className="xl:text-3xl cursor-pointer" />
                                    <li className="font-medium hidden sm:flex">Ride</li>
                                </div>
                            </ul>
                        </div>

                        <div className="bg-slate-400/[.70] h-96 flex flex-col justify-center gap-2 xl:gap-8 pl-4 xl:pl-20 pr-4 xl:pr-16 rounded-b-xl">
                            <h1 className="font-medium text-lg sm:text-3xl xl:text-5xl ">Get in the driver's seat and get paid</h1>
                            <p className="text-base text-slate-300">Drive on the platform with the largest network of active riders.</p>

                            <button className=" bg-black text-white text-sm font-bold w-2/3 sm:w-44 rounded py-2 sm:py-4 sm:px-7 hover:bg-slate-900">Sign Up to Drive</button>

                            <div className="flex flex-col max-w-max gap-px">
                                <a href="#" className="border-b-2 border-black border-dotted ">Learn more about driving and delivering</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <MidSection/>
            
            <BottomSection/>
        </div>
    )
}