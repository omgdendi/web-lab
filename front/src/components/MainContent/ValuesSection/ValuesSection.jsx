import React from "react";
import ValuesFormContainer from "./ValuesForm/ValuesFormContainer";
import styles from "./ValuesSection.module.scss";

const ValuesSection = (props) => {
    return (
        <div className={styles.mainContent}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionHeader__name}>Данные</span>
            </div>
            <div>
                <ValuesFormContainer/>
            </div>
        </div>
    )
}

export default ValuesSection;