const Faq = () => {
    const data = [
        {
            title: "The Best Financial Acounting App Ever!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas. lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        },
        {
            title: "The Best Financial Acounting App Ever!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas. lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        },
        {
            title: "The Best Financial Acounting App Ever!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas. lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        },
        {
            title: "The Best Financial Acounting App Ever!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas. lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        },
        {
            title: "The Best Financial Acounting App Ever!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas. lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        },
        {
            title: "The Best Financial Acounting App Ever!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas. lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        },
    ];
    const bgred = [0, 3, 4];
    return (
        <section className="h-auto my-8 ">
            <div className=" w-4/5 max-w-[1100px] mx-auto">
                <h4 className="text-red-600 text-md ">FAQ</h4>
                <h1 className="w-1/2 text-5xl font-bold ">
                    Frequently Asked Questions
                </h1>
            </div>
            <div className=" mx-auto mt-8 w-4/5 flex gap-2 flex-wrap  max-w-[1100px]">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`  w-5/12 px-8 rounded py-8 ${
                            bgred.includes(index)
                                ? " bg-red-500 text-white"
                                : ""
                        }`}>
                        <h1 className="text-2xl font-bold ">{item.title}</h1>
                        <p className="text-left ">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;
