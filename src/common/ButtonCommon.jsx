    // ButtonCommon.js
    import React from 'react';

    const ButtonCommon = ({ onClick, children, className = "" }) => {
    return (
        <button
        onClick={onClick}
        className={`text-sm p-2 font-serif  text-white bg-[#dcbdc5] rounded hover:bg-gray-800 transition duration-300 ${className}`}
        >
        {children}
        </button>
    );
    };

    export default ButtonCommon;
