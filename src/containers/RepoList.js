import { connect } from 'react-redux';
import RepoList from 'src/components/Home/repoList';

const mapStateToProps = ownProps => ({
  title: ownProps.title,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RepoList);
