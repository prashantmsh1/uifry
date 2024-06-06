import ellipseline from "../../assets/common/ellipseline.png";
import ellipse1 from "../../assets/common/ellipse1.png";
import ellipse2 from "../../assets/common/ellipse2.png";
import iphone from "../../assets/features/iphonefront.png";
const Advantages = () => {
    return (
        <section className=" h-dvh">
            <div className=" w-11/12 mx-auto flex justify-around  max-w-[1380px] px-12">
                <div className="flex flex-col w-3/5 mt-12 ">
                    <div>
                        <h4 className=" text-[#FF5555] font-semibold">
                            FEATURES
                        </h4>
                        <h1 className="text-4xl font-bold ">
                            Why Choose UiFry
                        </h1>
                    </div>
                    <div className="pr-40 ">
                        <div className="flex items-center mt-6 text-2xl font-semibold gap-x-4">
                            <span>
                                <svg
                                    width="48"
                                    height="49"
                                    viewBox="0 0 48 49"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle
                                        cx="24"
                                        cy="24.488"
                                        r="24"
                                        fill="#FF5555"
                                    />
                                    <path
                                        d="M26 33.488H22M30 20.488C30 18.8967 29.3679 17.3706 28.2427 16.2454C27.1174 15.1202 25.5913 14.488 24 14.488C22.4087 14.488 20.8826 15.1202 19.7574 16.2454C18.6322 17.3706 18 18.8967 18 20.488C18 23.5782 17.2205 25.694 16.3497 27.0934C15.6151 28.2739 15.2479 28.8641 15.2613 29.0288C15.2763 29.2111 15.3149 29.2806 15.4618 29.3896C15.5945 29.488 16.1926 29.488 17.3889 29.488H30.6112C31.8074 29.488 32.4056 29.488 32.5382 29.3896C32.6852 29.2806 32.7238 29.2111 32.7387 29.0288C32.7522 28.8641 32.3849 28.2739 31.6504 27.0935C30.7795 25.694 30 23.5782 30 20.488Z"
                                        stroke="white"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </span>
                            <h2>Clever Notifications</h2>
                        </div>
                        <p className="mt-6 text-left ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quibusdam beatae deleniti cumque quos pariatur
                            cum sunt animi saepe corporis doloremque ratione
                            itaque ipsum, iure esse eligendi tenetur quam minima
                            vero ipsam et officiis! Quis ex eaque aperiam
                            asperiores fugiat ab? Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Minima hic libero
                            voluptas possimus ducimus ut ipsa, praesentium,
                            dolo. Impedit eveniet rerum fugiat tempore
                            obcaecati.
                        </p>
                    </div>
                </div>

                <div className="relative w-2/5 ">
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
                    <div className="absolute z-30 left-20 -top-8 ">
                        <img src={iphone} alt="" className="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;
