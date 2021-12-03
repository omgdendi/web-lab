import React from "react";
import GraphContainer from "./Graph/GraphContainer";
import styles from "./GraphSection.module.scss";

const GraphSection = (props) => {
    return (
        <div className={styles.mainContent}>
            <div className={styles.sectionHeader}>
               <span className={styles.sectionHeader__name}>
                   График
               </span>
            </div>
            <div className={styles.graph}>
                <GraphContainer/>
            </div>
        </div>
    );
}

export default GraphSection;



