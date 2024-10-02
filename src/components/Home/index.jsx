import { Header } from "../Header";
import BackGroundImage from "../../assets/images/background-home.png"
import { FaSignal } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { FaCar } from "react-icons/fa";

export function Home() {
    return (
        <div>
            <section className='bg-cover h-screen' style={{ backgroundImage: `url(${BackGroundImage})` }}>
                <Header/>
                <main>
                    <div>
                        <div className="w-96 bg-blue-500">
                            <ul>
                                <div>
                                    <FaSignal />
                                    <li>Drive or driver</li>
                                    <div></div>
                                </div>
                                <div>
                                    <MdFoodBank />
                                    <li>Eat</li>
                                </div>
                                <div>
                                    <FaCar />
                                    <li>Ride</li>
                                </div>
                            </ul>
                        </div>
                        <div>
                            <h1>Get in the driver's seat and get paid</h1>
                            <p>Drive on the platform with the largest network of active riders.</p>
                            <button>Sign Up to Drive</button>
                            <a href="">Learn more about driving and delivering</a>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    )
}