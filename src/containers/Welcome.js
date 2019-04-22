import { connect } from 'react-redux';
import Welcome from 'src/components/Home/welcome';

const mapStateToProps = state => ({
  welcomeMessage: state.welcomeMessage,
  repos: state.repos,
  favRepos: state.favRepos,
});

const mapDispatchToProps = {};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);
