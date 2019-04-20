import React from 'react';
import { Form, Input, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './index.scss';

const Search = ({ research, searching, onSearchChange, onSearchSubmit }) => {
  const handleChange = (evt) => {
    const { value } = evt.target;
    onSearchChange(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSearchSubmit();
  };

  return (
    <main id="search">
      <Form id="searchForm" onSubmit={handleSubmit}>
        <Form.Field>
          <label id="searchLabel">Que recherchez-vous ?</label>
          <Form.Group id="searchGroup">
            <Input
              placeholder="Search for repos"
              value={research}
              onChange={handleChange}
            />
            <Button id="searchButton" type="submit"><Icon name="arrow right" /></Button>
          </Form.Group>
        </Form.Field>
      </Form>
    </main>
  );
};

Search.propTypes = {
  research: PropTypes.string.isRequired,
  searching: PropTypes.bool.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};


export default Search;
