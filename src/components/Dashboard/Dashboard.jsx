import leftVector from "../../assets/vector1.png";
import rightVector from "../../assets/vector2.png";

const DashboardCards = () => {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 py-20">
                <div className="flex flex-col md:flex-row gap-6">

                    {/* In-Progress Card */}
                    <div className="relative w-full py-12 md:py-24 rounded-xl overflow-hidden
                          bg-linear-to-r from-[#632EE3] to-[#9F62F2]
                          text-white flex flex-col justify-center items-center">

                        {/* Background Vectors */}
                        <div className="absolute inset-0 opacity-60">
                            <img
                                className="absolute top-0 right-0 w-80"
                                src={leftVector}
                                alt="leftVector"
                            />
                            <img
                                className="absolute bottom-0 left-0 w-80"
                                src={rightVector}
                                alt="rightVector"
                            />
                        </div>

                        {/* Content */}
                        <p className="tracking-wide text-sm z-10">In-Progress</p>
                        <h1 className="text-5xl font-bold mt-2 z-10">0</h1>
                    </div>

                    {/* Resolved Card */}
                    <div className="relative w-full py-12 md:py-24 rounded-xl overflow-hidden
                          bg-linear-to-r from-[#54CF68] to-[#00827A]
                          text-white flex flex-col justify-center items-center">

                        {/* Background Vectors */}
                        <div className="absolute inset-0 opacity-60">
                            <img
                                className="absolute top-0 right-0 w-80"
                                src={leftVector}
                                alt="leftVector"
                            />
                            <img
                                className="absolute bottom-0 left-0 w-80"
                                src={rightVector}
                                alt="rightVector"
                            />
                        </div>

                        {/* Content */}
                        <p className="tracking-wide text-sm z-10">Resolved</p>
                        <h1 className="text-5xl font-bold mt-2 z-10">0</h1>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DashboardCards;