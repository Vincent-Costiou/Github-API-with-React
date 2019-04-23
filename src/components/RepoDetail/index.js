import React from 'react';
import PropTypes from 'prop-types';
import { Table, Icon, Dimmer, Loader, Message } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

import './index.scss';

const RepoDetail = ({searching, error, list, repo, isFavorite, favRepos}) => {
  // const testFavoriteRepo = favRepos.find(elem => elem.id === favRepos);
  console.log('favRepos', favRepos);
  console.log('repo', repo);
  console.log('repo.length', repo.length);
  console.log('list', list.length);

  const testFav = Object.keys(favRepos).find(key => (
    favRepos[key].id === repo.id
  ));

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
                    <div id="favorite" onClick={isFavorite(repo)}><Icon name={testFav ? 'star' : 'star outline'} color="yellow" /></div>
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
