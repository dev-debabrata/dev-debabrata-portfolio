import { createElement } from "react";

export default function GradientTxt({ tagName, txt, className }) {
    return createElement(
        tagName,
        {
            className: `bg-gradient-to-r from-purple-400 via-red-500 to-orange-600 bg-clip-text text-transparent ${className}`,
        },
        txt
    );
}
