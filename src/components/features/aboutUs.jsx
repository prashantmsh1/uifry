import ellipseline from "../../assets/common/ellipseline.png";
import ellipse1 from "../../assets/common/ellipse1.png";
import ellipse2 from "../../assets/common/ellipse2.png";
import pic1 from "../../assets/aboutus/elipse1.png";
import pic2 from "../../assets/aboutus/elipse2.png";
import pic3 from "../../assets/aboutus/elipse3.png";
import pic4 from "../../assets/aboutus/elipse4.png";
import mainimg from "../../assets/aboutus/mainimg.png";
import simg1 from "../../assets/aboutus/simg1.png";
import simg2 from "../../assets/aboutus/simg2.png";
import simg3 from "../../assets/aboutus/simg3.png";
import simg4 from "../../assets/aboutus/simg4.png";
import simg5 from "../../assets/aboutus/simg5.png";

const AboutUs = () => {
    return (
        <section className="relative h-auto mt-12 ">
            <div className=" w-11/12 max-w-[1300px] mx-auto">
                <div className="absolute top-0 z-10 -right-72">
                    <img src={ellipse1} alt="" />
                </div>
                <div className="absolute -right-64 top-16">
                    <img src={ellipse2} alt="" />
                </div>
                <div className="absolute z-10 w-1/2 left-48 top-64">
                    <div className="absolute z-20 left-12 ">
                        <img src={ellipseline} alt="" />
                    </div>
                    <div className="absolute z-20 left-6 top-6 ">
                        <img src={ellipseline} alt="" />
                    </div>
                    <div className="absolute z-20 top-12 ">
                        <img src={ellipseline} alt="" />
                    </div>

                    <div className="absolute z-10 -left-12 top-6">
                        <img src={ellipse1} alt="" />
                    </div>
                    <div className="absolute -left-12 -top-24">
                        <img src={ellipse2} alt="" />
                    </div>
                </div>
                <div className="w-1/3 mx-auto text-center text-wrap ">
                    <h4 className="text-gray-700 ">TESTIMONIAL</h4>
                    <h1 className="text-5xl font-bold ">
                        {" "}
                        What Our Users Say About Us
                    </h1>
                </div>
                <div className=" w-11/12 mt-24 max-w-[1380px] mx-auto flex ">
                    <div className="w-1/2 h-dvh ">
                        <div className="absolute z-50 flex flex-col w-1/2 ">
                            <div className="">
                                <div className="absolute top-8 left-8">
                                    <img src={pic1} alt="" />
                                </div>
                                <div className="absolute right-24 top-8">
                                    <img src={pic2} alt="" />
                                </div>
                            </div>
                            <div className="">
                                <div className="absolute top-36 left-36">
                                    <img src={mainimg} alt="" />
                                </div>
                            </div>
                            <div className="">
                                <div className="absolute top-80 ">
                                    <img src={pic3} alt="" />
                                </div>
                                <div className="absolute right-20 top-80">
                                    <img src={pic4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 mt-24">
                        <div>
                            <h1 className="text-4xl font-bold ">
                                {" "}
                                The Best Financial Acounting App Ever
                            </h1>
                            <p className="mt-8 ">
                                "Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Molestias cupiditate,
                                quibusdam consectetur beatae est in voluptatem
                                veritatis eius animi odio voluptatibus! Cum non
                                in adipisci, neque magnam vitae dolorum
                                consectetur ducimus ratione ab nostrum laborum
                                consequuntur ipsum alias labore aspernatur nobis
                                a nemo itaque, esse odit, dolorem facere
                                exercitationem. Libero. Lorem ipsum, dolor sit
                                amet consectetur adipisicing elit. Veritatis ex
                                doloribus eveniet quas quo dolores!"
                            </p>
                        </div>
                        <div className="flex items-center mt-8 gap-x-4 ">
                            <div className="">
                                <img src={simg1} alt="" />
                            </div>
                            <div className=" blur-sm">
                                <img src={simg2} alt="" />
                            </div>
                            <div className=" blur-sm">
                                <img src={simg3} alt="" />
                            </div>
                            <div className=" blur-sm">
                                <img src={simg4} alt="" />
                            </div>
                            <div className=" blur-sm">
                                <img src={simg5} alt="" />
                            </div>
                        </div>
                        <h1 className="mt-8 text-2xl font-bold ">Nick Jonas</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
