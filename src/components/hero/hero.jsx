import iphone1 from "../../assets/hero/iphone1.png";
import iphone2 from "../../assets/hero/iphone2.png";
import iphone3 from "../../assets/hero/iphone3.png";
import ellipse1 from "../../assets/common/ellipse1.png";
import ellipse2 from "../../assets/common/ellipse2.png";
import ellipseline from "../../assets/common/ellipseline.png";
import herostrip from "../../assets/hero/herostrip.png";
import star from "../../assets/common/star.svg";
const Hero = () => {
    return (
        <section>
            <div className=" w-11/12 relative max-w-[1380px] flex mx-auto pl-8">
                <div className="absolute z-10 -top-4 left-12 ">
                    <img src={ellipse1} alt="" />
                </div>
                <div className="absolute top-8 left-12 ">
                    <img src={ellipse2} alt="" />
                </div>
                <div className="z-20 w-1/2 mt-24 ">
                    <div className="relative space-y-4 ">
                        <h1 className="text-[60px] font-bold ">
                            Make The Best Financial Decisions
                        </h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Eligendi possimus provident, nisi architecto
                            cupiditate expedita.
                        </p>
                        <div className="flex justify-start gap-x-12 ">
                            <button className="flex items-center px-4 py-4 mt-8 text-white bg-black rounded ">
                                Get Started{" "}
                                <span className="ml-2">
                                    <svg
                                        width="25"
                                        height="8"
                                        viewBox="0 0 25 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z"
                                            fill="white"
                                        />
                                    </svg>
                                </span>
                            </button>
                            <button className="flex items-center mt-8 font-semibold gap-x-4 ">
                                <span>
                                    <svg
                                        width="29"
                                        height="29"
                                        viewBox="0 0 29 29"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle
                                            cx="14.5"
                                            cy="14.5"
                                            r="14"
                                            stroke="black"
                                        />
                                        <path
                                            d="M11 19.0809V9.91907C11 9.52282 11.4389 9.28402 11.7716 9.49929L18.8512 14.0802C19.1557 14.2772 19.1557 14.7228 18.8512 14.9198L11.7716 19.5007C11.4389 19.716 11 19.4772 11 19.0809Z"
                                            fill="black"
                                            stroke="black"
                                        />
                                    </svg>
                                </span>
                                Watch Video
                            </button>
                        </div>
                    </div>
                    <div className="relative mt-8">
                        <div className="absolute left-32 top-12 ">
                            <img src={star} alt="" />
                        </div>
                        <div>
                            <img src={herostrip} alt="" />
                        </div>
                    </div>
                </div>

                <div className="flex w-1/2  relative *:absolute ">
                    <div className="z-30 ">
                        <img src={iphone1} alt="" />
                    </div>
                    <div className="z-20 left-32 top-20 ">
                        <img src={iphone2} alt="" />
                    </div>
                    <div className="z-10 top-44 left-64 ">
                        <img src={iphone3} alt="" />
                    </div>
                    <div className=" top-[450px] left-20">
                        <img src={ellipse1} alt="" />
                    </div>
                    <div className=" top-[350px] right-0">
                        <img src={ellipse1} alt="" />
                    </div>
                    <div className=" top-[120px] right-[25px]">
                        <img src={ellipseline} alt="" />
                    </div>
                    <div className=" top-[170px] right-8">
                        <img src={ellipseline} alt="" />
                    </div>
                    <div className=" top-[220px] right-8">
                        <img src={ellipseline} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
