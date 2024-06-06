import ellipseline from "../../assets/common/ellipseline.png";
import ellipse1 from "../../assets/common/ellipse1.png";
import ellipse2 from "../../assets/common/ellipse2.png";
import iphone from "../../assets/features/iphonestraight.png";
import card from "../../assets/common/creditcard.png";
const Customize = () => {
    return (
        <section className="relative mt-12 h-dvh ">
            <div>
                <div className="absolute top-0 z-10 -right-72">
                    <img src={ellipse1} alt="" />
                </div>
                <div className="absolute -right-64 top-16">
                    <img src={ellipse2} alt="" />
                </div>
                <div className=" w-11/12 max-w-[1380px] mx-auto flex ">
                    <div className="relative w-1/2 ">
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
                        <div className="absolute z-30 left-40 top-32">
                            <img src={card} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 mt-24 gap-y-12 ">
                        <div>
                            <h1 className="flex items-center text-4xl font-bold gap-x-4">
                                <span>
                                    <svg
                                        width="48"
                                        height="49"
                                        viewBox="0 0 48 49"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle
                                            cx="24"
                                            cy="24.9761"
                                            r="24"
                                            fill="#FF5555"
                                        />
                                        <path
                                            d="M24 14.9761L22.6985 20.1821C22.4445 21.1979 22.3176 21.7059 22.0531 22.1192C21.8192 22.4848 21.5087 22.7952 21.1431 23.0292C20.7298 23.2936 20.2218 23.4206 19.206 23.6746L14 24.9761L19.206 26.2776C20.2218 26.5315 20.7298 26.6585 21.1431 26.923C21.5087 27.1569 21.8192 27.4674 22.0531 27.833C22.3176 28.2463 22.4445 28.7542 22.6985 29.7701L24 34.9761L25.3015 29.7701C25.5555 28.7542 25.6824 28.2463 25.9469 27.833C26.1808 27.4674 26.4913 27.1569 26.8569 26.923C27.2702 26.6585 27.7782 26.5315 28.794 26.2776L34 24.9761L28.794 23.6746C27.7782 23.4206 27.2702 23.2936 26.8569 23.0292C26.4913 22.7952 26.1808 22.4848 25.9469 22.1192C25.6824 21.7059 25.5555 21.1979 25.3015 20.1821L24 14.9761Z"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </span>
                                Uifry Premium
                            </h1>
                        </div>
                        <div className="z-20 flex flex-col ">
                            <p className="w-4/5 ">
                                {" "}
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Provident vero quos recusandae
                                obcaecati officia laudantium sint quibusdam
                                pariatur! Consectetur exercitationem hic, nulla
                                odio at, quos saepe amet, sequi deserunt eos sit
                                necessitatibus magnam accusamus? Numquam,
                                temporibus. Ratione nostrum nemo in.
                                Perferendis, aliquid? Soluta temporibus beatae
                                esse voluptatibus quisquam culpa, assumenda
                                veniam dolo
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Customize;
