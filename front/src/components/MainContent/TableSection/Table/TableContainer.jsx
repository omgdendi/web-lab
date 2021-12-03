import {connect} from "react-redux";
import Table from "./Table";
import {deleteDote} from "../../../../redux/reducers/tableReducer";

const mapStateToProps = (state) => {
    return {
        dots: state.table.dots
    };
}

export default connect(mapStateToProps, {
    deleteDote
})(Table);
