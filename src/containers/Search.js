import { connect } from 'react-redux';
import Search from 'src/components/Search';
import { searchInputChange, searchForRepos } from 'src/store/reducer';


const mapStateToProps = state => ({
  inputText: state.currentResearch,
  searching: state.searching,
  error: state.searchError,
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: (research) => {
    dispatch(searchInputChange(research));
  },
  onSearchSubmit: () => {
    dispatch(searchForRepos());
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
