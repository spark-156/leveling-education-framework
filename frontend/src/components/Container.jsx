import React from "react";
import styles from "../styles/Container.module.css";

export function Container({ children, className }) {
    return <div className={`${styles.container} ${className}`}>
        {children}
    </div>
}