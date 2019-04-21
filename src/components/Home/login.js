import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input, Icon, Message } from 'semantic-ui-react';

import './index.scss';

const Login = ({ inputText, loadingMessage, loading, error, onInputChange, onFormSubmit }) => {

  const handleChange = (evt) => {
    const { value } = evt.target;
    onInputChange(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onFormSubmit();
  };

  return (
    <main id="login">
      <h1 id="loginMessage">Login with <Icon name="github" /></h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          {error
              && (
              <div id="errorMessage">
                <Message negative>
                  <Message.Header>Un problème est survenu.</Message.Header>
                  <p>Vérifiez que votre token est correct.</p>
                </Message>
              </div>
              )
            }
          <label id="loginLabel">{loadingMessage}</label>
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
    </main>
  );
};

Login.propTypes = {
  inputText: PropTypes.string.isRequired,
  loadingMessage: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
}

export default Login;
