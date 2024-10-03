import LogoUber from "../../assets/images/logo-uber.svg"
import { HiChevronDown } from "react-icons/hi";
import { CiGlobe } from "react-icons/ci";
import { LuGrid } from "react-icons/lu";

export function Header() {
    return (
        <div>
            <header>
                <nav className="bg-black w-full h-24 flex justify-around">
                    <div className="flex h-full gap-10">
                        <ul className="hidden text-white items-center gap-10 xl:flex">
                            <img src={LogoUber} className="w-19" />
                            <div className="flex items-center gap-1">
                                <li className="text-lg"><a href="">Company </a></li>
                                <HiChevronDown className="cursor-pointer" />
                            </div>
                            <li className="text-lg"><a href="">Safety</a></li>
                            <li className="text-lg"><a href="">Help</a></li>
                            <li className="text-lg"><a href="">COVID-19 resources</a></li>
                        </ul>
                    </div>
                    <div className="flex h-full">
                        <ul className="text-white flex items-center gap-8">
                            <div className="flex items-center gap-2 cursor-pointer">
                                <CiGlobe className="text-xl" />
                                <li className="text-lg"> EN</li>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <LuGrid className="text-xl" />
                                <li className="text-lg">Product</li>
                            </div>
                            <li className="text-lg cursor-pointer">Log In</li>
                            <button className="bg-white text-black text-lg px-6 py-2 rounded hover:bg-slate-200 duration-200">Sign up</button>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}