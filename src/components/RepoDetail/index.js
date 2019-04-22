import React from 'react';
import PropTypes from 'prop-types';
import { Table, Icon, Dimmer, Loader, Message } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

import './index.scss';

const RepoDetail = ({searching, error, list, repo, isFavorite}) => {

  return (
    <div>
      {searching
        && (
          <Dimmer active inverted>
            <Loader size="massive">Loading</Loader>
          </Dimmer>
        )
      }

      {error
        && (
        <Message negative>
          <Message.Header>Nous sommes désolés, votre requête n'a pas pu aboutir</Message.Header>
        </Message>
        )
      }

      {!error
        && (
          <Table celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>
                  <div id="repoHeader">
                    {`Détail du repo ${repo.header}`}
                    <div id="favorite" onClick={isFavorite(repo)}><Icon name="star outline" color="yellow" /></div>
                    <div id="githubLink">
                      <a href={repo.redirect}><Icon name="github" /></a>
                    </div>
                  </div>
                </Table.HeaderCell>
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
        )
      }
    </div>
  );
};

export default RepoDetail;
