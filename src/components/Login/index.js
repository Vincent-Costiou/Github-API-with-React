import React from 'react';
import { Form, Button, Input, Icon } from 'semantic-ui-react';

import './index.scss';

const Login = () => (
  <div id="login">
    <h1>Login with <Icon name="github" /></h1>
    <Form>
      <Form.Field>
        <label>Rentrez votre token Github</label>
        <Input
          type="text"
          value="token"
        />
      </Form.Field>
      <Button type="submit">Go</Button>
    </Form>
  </div>
);

export default Login;
