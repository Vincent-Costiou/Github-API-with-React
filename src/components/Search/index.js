import React from 'react';
import { Form, Input, Button, Icon, Dimmer, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './index.scss';

const Search = ({ inputText, searching, onSearchChange, onSearchSubmit }) => {
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
      {searching
        && (
          <Dimmer active inverted>
            <Loader size="massive">Loading</Loader>
          </Dimmer>
        )
      }
      <Form id="searchForm" onSubmit={handleSubmit}>
        <Form.Field>
          <label id="searchLabel">Que recherchez-vous ?</label>
          <Form.Group id="searchGroup">
            <Input
              placeholder="Search for repos"
              value={inputText}
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
  inputText: PropTypes.string.isRequired,
  searching: PropTypes.bool.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};


export default Search;
