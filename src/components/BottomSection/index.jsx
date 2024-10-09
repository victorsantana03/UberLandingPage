import { GoChevronRight } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

export function BottomSection() {
    return (
        <section className="h-screen ">
            <div className="bg-black py-16 text-white">
                <div className="mx-40">
                    <h1 className="text-2xl font-bold pb-6">There's more to love in the apps</h1>
                    <div className="flex items-center justify-between gap-28">
                        <div className="bg-white h-48 flex items-center p-8 rounded-lg gap-8 w-2/5">
                            <div className="bg-black flex flex-col justify-center px-5 py-3 h-full rounded-lg">
                                <span className="text-4xl">Uber</span>
                                <GoArrowRight className="text-3xl" />
                            </div>
                            <p className="text-black font-bold text-2xl">Download the Driver app</p>
                            <button className="bg-black rounded-full text-2xl p-1"><GoChevronRight /></button>

                        </div>

                        <div className="bg-white h-48 flex items-center p-8 rounded-lg gap-8 w-2/5">
                            <div className="bg-black flex flex-col justify-center px-5 py-3 h-full rounded-lg">
                                <span className="text-4xl">Uber</span>
                            </div>
                            <p className="text-black font-bold text-2xl">Download the Uber app</p>
                            <button className="bg-black rounded-full text-2xl p-1"><GoChevronRight /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center gap-20 m-40">
                <div className="flex flex-col gap-4">
                    <BsFillPeopleFill className="text-4xl"/>
                    <h1 className="text-xl font-medium">About Us</h1>
                    <p className="text-gray-700 text-lg">Find out how we started, what drives us, and how
                    we’re igniting opportunity.</p>
                    <div className="flex">
                     <a href="#" className="border-b-2 border-black border-dotted">Learn more</a>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <FaBook className="text-4xl"/>
                    <h1 className="text-xl font-medium">Newsroom</h1>
                    <p className="text-gray-700 text-lg">See announcements about our latest releases, initiatives, and partnerships.</p>
                    <div className="flex">
                        <a href="#" className="border-b-2 border-black border-dotted">Learn more</a>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <FaHome className="text-4xl"/>
                    <h1 className="text-xl font-medium">Global Citizenship</h1>
                    <p className="text-gray-700 text-lg">Read about our commitment to making a positive impact in the cities we serve.</p>
                    <div className="flex">
                        <a href="#" className="border-b-2 border-black border-dotted">Learn more</a>
                    </div>
                </div>
            </div>
        </section>
    )
}