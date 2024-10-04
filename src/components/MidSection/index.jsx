import { GoArrowRight } from "react-icons/go";

import backgroundImage from "../../assets/images/background-mid-section.png"
import driveImage from "../../assets/images/drive.png"
import trafficImage from "../../assets/images/traffic.png"

export function MidSection() {
    return (
        <section className='bg-blue-500 absolute h-screen w-full overflow-x-hidden'>

            <div className='h-24 bg-cover sm:h-40 xl:h-72 bg-center w-screen' style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="w-1/2 flex flex-col gap-6 text-left ml-52 pt-20">
                    <h1 className="text-5xl font-bold">Uber For Business</h1>
                    <p className="font-medium text-lg">Trasnform the way your company moves and feeds its people.</p>
                    <button className="bg-black flex items-center justify-center gap-2 text-white text-sm font-bold w-2/3 sm:w-44 rounded py-2 sm:py-4 sm:px-7 hover:bg-slate-900">
                        See How 
                        <GoArrowRight className="text-white text-xl"/>
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-center justify-between">
                <h1>Focus on safety, Wherever you go</h1>
                <div className="flex ">
                    <div className="w-2/5">
                        <img src={driveImage}/>
                        <h2>Our Commitment to your safety</h2>
                        <p>With every safety feature and every standard in our Community Guidelines,
                        we're committed to helping to create a safe environment for our users.</p>
                        <div>
                            <p>Read About Our Community Guidelines</p>
                            <p>See all safety features</p>
                        </div>
                    </div>

                    <div className="w-2/5">
                        <img src={trafficImage}/>
                        <h2>Setting 10,000+ cities in motion</h2>
                        <p>The app is available in thousands of cities worldwide, so you can request a
                        ride even when you’re far from home.</p>
                        <p>View All Cities</p>
                    </div>
                </div>
            </div>
        </section>


    )
}