import PropTypes from "prop-types";

const Heading = ({ title, subtitle, className }) => {
    return (
        <div className={`flex flex-col gap-4 text-center my-12 ${className}`}>
            <h1 className="text-xl md:text-2xl lg:text-4xl font-thin">
                {title}
            </h1>
            <p className="text-xs md:text-base text-gray-500 font-thin">
                {subtitle}
            </p>
        </div>
    );
};

Heading.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    subtitle: PropTypes.string,
};

export default Heading;
