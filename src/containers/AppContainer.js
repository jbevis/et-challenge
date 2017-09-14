import { connect } from 'react-redux';
import { setDisplayGroup, setDisplayProp, getData } from '../actions/index';
import App from '../components/App';
import { formatGroupData } from '../ops/helper';
import '../styles/App.css';


const mapStateToProps = (state) => {
  return {
    displayGroup: state.groups,
    displayProperty: state.properties,
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