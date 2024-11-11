import Heading from "./Heading";

const Banner = () => {
    return (
        <div className="relative hero bg-banner bg-base-200 min-h-[600px]">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <Heading
                    className={"text-white"}
                    title="Welcome to the Coffee House"
                    // a 2 line subtitle
                    subtitle="The best place to find your favorite coffee. We have a wide range of coffee from different origins. Enjoy your coffee with us."
                />
            </div>
        </div>
    );
};

export default Banner;
