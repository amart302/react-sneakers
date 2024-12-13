import React from "react";
import MyLoader from "./MyLoader";

const Sceleton = ({ count }) => {
    const loaders = Array.from({ length: count });

    return (
        <div className="loaders_block">
            {loaders.map((_, index) => (
                <MyLoader key={index} />
            ))}
        </div>
    );
};

export default Sceleton;