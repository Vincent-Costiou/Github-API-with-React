import { connect } from 'react-redux';
import App from 'src/components/App';

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  list: state.repoDetails,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
