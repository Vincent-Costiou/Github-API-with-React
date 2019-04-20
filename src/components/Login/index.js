import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input, Icon } from 'semantic-ui-react';

import './index.scss';

const Login = ({ inputText, loadingMessage, loading, onInputChange, onFormSubmit }) => {

  const handleChange = (evt) => {
    const { value } = evt.target;
    onInputChange(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onFormSubmit();
  }

  return (
    <div id="login">
      <h1>Login with <Icon name="github" /></h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>{loadingMessage}</label>
          <Input
            type="password"
            value={inputText}
            loading={loading}
            disabled={loading}
            onChange={handleChange}
          />
        </Form.Field>
        <Button loading={loading} disabled={loading} type="submit">Go</Button>
      </Form>
    </div>
  );
};

Login.propTypes = {
  inputText: PropTypes.string.isRequired,
  loadingMessage: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
}

export default Login;
