import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Loading, Owner, IssueList } from './styles';
import Container from '../../components/container';

export default function Repository({ location }) {
  const { repository } = location.state;
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadIssues() {
      setLoading(true);
      const { data } = await api.get(`repos/${repository.full_name}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      });
      setIssues(data);
      setLoading(false);
    }
    loadIssues();
  }, []);

  if (loading) return <Loading>Carregando...</Loading>;

  return (
    <Container>
      <Owner>
        <Link to="/">Voltar para Home</Link>
        <img src={repository.owner.avatar_url} alt="owner" />
        <h1>{repository.full_name}</h1>
        <p>{repository.description}</p>
      </Owner>
      <IssueList>
        {issues.map((issue) => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt="avatar" />
            <div>
              <strong>
                <a href={issue.html_url}>{issue.title}</a>
              </strong>
              <p>{issue.user.login}</p>
            </div>
          </li>
        ))}
      </IssueList>
    </Container>
  );
}
