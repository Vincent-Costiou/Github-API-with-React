import { connect } from 'react-redux';
import RepoDetail from 'src/components/RepoDetail';
import { isFavorite } from 'src/store/reducer';

const mapStateToProps = state => ({
  searching: state.searching,
  error: state.searchError,
  list: state.repoDetails,
  repo: state.openedRepo,
});

const mapDispatchToProps = dispatch => ({
  isFavorite: repo => () => {
    dispatch(isFavorite(repo));
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RepoDetail);
