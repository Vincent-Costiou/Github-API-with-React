import { connect } from 'react-redux';
import Navigation from 'src/components/Navigation';
import { onLogout } from 'src/store/reducer';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.loggedIn,
  title: ownProps.title,
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => {
    dispatch(onLogout());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);
