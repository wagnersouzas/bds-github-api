import axios from 'axios';
import React, { useState } from 'react';
import { UserPerfil } from '../../@types/userPerfil';
import Perfil from '../../components/Perfil';
import { BASE_URL } from '../../util/request';
import './styles.css';

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowCard, setIsShowCard] = useState(false);
  const [namePerfil, setNamePerfil] = useState('');

  const [formData, setFormData] = useState<UserPerfil>({} as UserPerfil);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNamePerfil(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(false);
    setIsShowCard(true);
    axios
      .get(`${BASE_URL}/users/${namePerfil}`)
      .then((response) => {
        setFormData(response.data);
        setIsLoading(true);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsShowCard(false);
      });
  };

  return (
    <div className="container">
      <div className="content">
        <div className="search-card">
          <div className="search-card-container">
            <form onSubmit={handleSubmit}>
              <h1>Encontre um perfil Github</h1>
              <input
                type="text"
                name="namePerfil"
                onChange={handleChange}
                value={namePerfil}
                placeholder="Usuário Github"
              ></input>
              <button
                type="submit"
                className="btn btn-primary btn-lg start-button"
              >
                Encontrar
              </button>
            </form>
          </div>
        </div>
        {isShowCard && (
          <div className="perfil-card">
            <Perfil isLoading={isLoading} perfil={formData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
