import React from 'react';
import PropTypes from 'prop-types';
import { Table, Icon } from 'semantic-ui-react';

const RepoDetail = ({ list }) => {

  return (
    <div>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Git Repository</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

          {
            list.map(({ type, name, sha }) => (
              <Table.Row key={sha}>
                <Table.Cell collapsing>
                  <Icon name={type === 'file' ? 'file outline' : 'folder'} />
                  {name}
                </Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    </div>
  );
};

export default RepoDetail;
