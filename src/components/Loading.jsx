import React from "react";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="animate-spin border-3 border-t-transparent w-10 h-10 scale-100 rounded-full border-white"></div>
        </div>
    );
};

export default Loading;