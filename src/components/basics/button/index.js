import React from "react";

// Styles
import styles from "./button.module.scss";

export default function AppButton({ title, className, size="sm", color, onClick, ...restProps }) {
    return (
        <button className={`
            ${className}
            ${styles.appButton}
            ${
                size == 'sm' && styles.sm ||
                size == 'md' && styles.md || 
                size == 'lg' && styles.lg ||
                color == 'green' && styles.greenBtn
            }
        `} {...restProps} onClick={onClick}>{title}</button>
    )
}