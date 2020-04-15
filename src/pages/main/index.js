import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { SubmitButton, Form, List } from './styles';
import Container from '../../components/container';
import api from '../../services/api';

export default function Main() {
  const [repo, setRepo] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const repos = localStorage.getItem('@repos');
    if (repos) {
      setRepositories(JSON.parse(repos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@repos', JSON.stringify(repositories));
  }, [repositories]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!repo || repo === '') {
      return;
    }
    setloading(true);
    const { data } = await api.get(`/repos/${repo}`);
    setRepositories([...repositories, data]);
    setloading(false);
  }
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositorios
      </h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicone um repoitorio"
          value={repo}
          onChange={(value) => setRepo(value.target.value)}
        />
        <SubmitButton loading={loading}>
          {loading ? <FaSpinner /> : <FaPlus />}
        </SubmitButton>
      </Form>
      <List>
        {repositories.map((repository) => (
          <li key={repository.full_name}>
            <strong>{repository.full_name}</strong>
            <Link to={{ pathname: 'repository', state: { repository } }}>
              Detalhes
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
}
