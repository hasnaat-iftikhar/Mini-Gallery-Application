import React from "react";

export default function AppList({ children, className, ...restProps }) {
    return (
        <li className={`
            ${className}
        `} {...restProps}>{children}</li>
    )
}