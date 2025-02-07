import logo from '../../assets/Logo_SuperSelect.png';
import { Button } from '../Button';

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper
} from './styles';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';


const Header = () => {

  const { user, handleSignOut } = useAuth();

  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to="/">
            <img src={logo} alt="Logo da DIO" />
          </Link>
          {user.id ? (
            <>
              <BuscarInputContainer>
                <Input placeholder='Buscar...' />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>

          ) : null}
        </Row>
        <Row>
          {user.id ? (
            <>
              <UserPicture src="https://avatars.githubusercontent.com/u/124081837?s=96&v=4" />{" "}
              <a href="#" onClick={handleSignOut}>Sair</a>
            </>
          ) : (
            <>
              <Link to="/">
                <MenuRight href="#">Home</MenuRight>
              </Link>
              <Link to="/login">
                <Button title="Entrar" />
              </Link>
              <Link to="/cadastro">
                <Button title="Cadastrar" />
              </Link>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }