import { connect } from 'react-redux';
import App from 'src/components/App';

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  list: state.openedRepo,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
