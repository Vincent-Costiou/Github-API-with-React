import { connect } from 'react-redux';
import Item from 'src/components/Item';
import { openRepoDetails } from 'src/store/reducer';

const mapStateToProps = (state, ownProps) => ({
  repo: ownProps.repo,
});

const mapDispatchToProps = dispatch => ({
  onRepoClick: (repo) => {
    dispatch(openRepoDetails(repo));
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Item);
