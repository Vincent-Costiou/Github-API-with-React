import { connect } from 'react-redux';
import Welcome from 'src/components/Home/welcome';

const mapStateToProps = state => ({
  welcomeMessage: state.welcomeMessage,
});

const mapDispatchToProps = {};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);
