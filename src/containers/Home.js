import { connect } from 'react-redux';
import Home from 'src/components/Home';

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
