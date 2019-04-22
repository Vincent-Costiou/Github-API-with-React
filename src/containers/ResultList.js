import { connect } from 'react-redux';
import ResultList from 'src/components/Search/resultsList';

const mapStateToProps = state => ({
  lastResearch: state.lastResearch,
  searchedRepos: state.searchedRepos,
  searchResultMessage: state.searchResultMessage,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultList);
