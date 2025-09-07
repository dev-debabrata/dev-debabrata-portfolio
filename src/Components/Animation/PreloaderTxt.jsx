import { createElement } from "react";

export default function PreloaderTxt({ tagName, txt, className }) {
    return createElement(
        tagName,
        {
            className: `bg-gradient-to-r from-purple-400 via-red-500 to-orange-600 bg-clip-text text-transparent ${className}`,
        },
        txt
    );
}



/////////////////////////////////////////////////////////

// import { createElement } from "react";
// import PropTypes from "prop-types";

// export default function PreloaderTxt({ tagName, txt, className }) {
//     return createElement(
//         tagName,
//         {
//             className: `bg-gradient-to-r from-purple-400 via-red-500 to-orange-600 bg-clip-text text-transparent ${className}`,
//         },
//         txt
//     );
// }

// PreloaderTxt.propTypes = {
//     tagName: PropTypes.string.isRequired,
//     txt: PropTypes.string.isRequired,
//     className: PropTypes.string,
// };

// PreloaderTxt.defaultProps = {
//     className: "",
// };
