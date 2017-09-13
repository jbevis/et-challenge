import { connect } from 'react-redux';
import { setDisplayGroup, setDisplayProp, getData } from '../actions/index';
import App from '../components/App';
import { formatGroupData } from '../ops/helper';


const mapStateToProps = (state) => {
  return {
    displayGroup: state.displayGroup,
    displayProperty: state.displayProperty,
    groups: formatGroupData(state.data)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDisplayGroup: (group) => dispatch(setDisplayGroup(group)),
    setDisplayProp: (property) => dispatch(setDisplayProp(property)),
    getData: (data) => dispatch(getData(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);