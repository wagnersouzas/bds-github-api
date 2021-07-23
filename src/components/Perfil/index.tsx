import { UserPerfil } from '../../@types/userPerfil';
import PerfilLoader from '../PerfilLoader/intex';
import './styles.css';

type Props = {
  perfil: UserPerfil;
  isLoading: boolean;
};

const Perfil = ({ perfil, isLoading }: Props) => {
  return (
    <>
      {!isLoading ? (
        <PerfilLoader />
      ) : (
        <div className="content-perfil">
          <div className="content-img-perfil">
            <img
              src={perfil.avatar_url}
              alt={`Foto do perfil ${perfil.name}`}
            />
          </div>
          <div className="content-info-perfil">
            <h4 className="text-primary">Informações</h4>
            <div className="filde-description">
              <b>Perfil:</b>
              <span>{perfil.url}</span>
            </div>
            <div className="filde-description">
              <b>Seguidores:</b>
              <span>{perfil.followers}</span>
            </div>
            <div className="filde-description">
              <b>Localidade:</b>
              <span>{perfil.location}</span>
            </div>
            <div className="filde-description">
              <b>Nome:</b>
              <span>{perfil.name}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Perfil;
