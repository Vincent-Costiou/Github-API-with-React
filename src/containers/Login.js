import { connect } from 'react-redux';
import Login from 'src/components/Login';
import { loginInputChange, logUser } from 'src/store/reducer';


const mapStateToProps = state => ({
  inputText: state.token,
  loadingMessage: state.loadingMessage,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  onInputChange: (token) => {
    dispatch(loginInputChange(token));
  },
  onFormSubmit: () => {
    dispatch(logUser());
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
