import React from "react";
import TableContainer from "./Table/TableContainer";
import styles from "./TableSection.module.scss";

const TableSection = (props) => {

    return (
        <div className={styles.mainContent}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionHeader__name}>Таблица</span>
            </div>
            <div className={styles.table}>
                <TableContainer/>
            </div>
        </div>
    );
}

export default TableSection;



