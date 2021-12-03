import React from "react";
import TableSection from "./TableSection/TableSection";
import ValuesSection from "./ValuesSection/ValuesSection";
import GraphSection from "./GraphSection/GraphSection";
import styles from "./MainContant.module.scss";
import {Navigate} from "react-router-dom";

const MainContent = (props) => {
    return (
        <div className={styles.mainContent}>
            <div className={styles.mainContent__graph}>
                <GraphSection/>
            </div>
            <div className={styles.mainContent__values}>
                <ValuesSection/>
            </div>
            <div className={styles.mainContent__table}>
                <TableSection/>
            </div>
        </div>
    );
}

export default MainContent;



