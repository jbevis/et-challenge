import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setDisplayGroup, setDisplayProp } from '../actions/index';
import App from '../components/App';
import { formatGroupData } from '../ops/helper';

const mapStateToProps = (state) => {
  return {
    displayGroup: state.displayGroup,
    displayProp: state.displayProp,
    groups: formatGroupData(state.data)
  }
};

const mapDispatchToProps = (dispatch) =>{
  return {
    setDisplayGroup: (group) => dispatch(setDisplayGroup)),
    setDisplayProp: (property) => dispatch(setDisplayProp))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);