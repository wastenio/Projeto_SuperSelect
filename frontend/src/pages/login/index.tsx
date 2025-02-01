import { MdEmail } from 'react-icons/md';
import { CiLock } from "react-icons/ci";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button } from '../../components/Button';
import { Header } from '../../components/Header/header';
import { Input } from '../../components/Input';
import { Column, Container, Criartext, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './style';
import { IFormData } from './types';
import { useAuth } from '../../hooks/useAuth';

const schema = yup
  .object({
    email: yup
        .string()
        .email('email não é valido')
        .required('Campo obrigatório'),
    password: yup
        .string()
        .min(3, 'No minimo 3 caracteres')
        .required('Campo obrigatório'),
  })
  .required()

const Login = () => {
    const { handleLogin} = useAuth();

    const {
        control, 
        handleSubmit, 
        formState: { errors },
     } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData: IFormData) => {
        handleLogin(formData);
       
    };

    return(<>
        <Header />
        <Container>
            <Column>
                <Title>
                    Adote as novas tecnologias administrativas usadas por empresas inovadoras do varejo
                </Title>

                <ul>
                <li>Mais de 1.700 atacados e varejos, de pequeno a grande porte, estão cadastrados e utilizam nosso
                    sistema.</li>
                <li>Busque renovação & organização para sua empresa utilizando nosso sistema, desenvolvido especialmente
                    para você.</li>
                <li>+10.000 avaliações positivas por grandes empresas no Brasil e exterior.</li>
            </ul>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu login</TitleLogin>
                    <SubtitleLogin>Faça seu cadastro e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<CiLock />} />
                        <Button title="Entrar" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <Criartext>Criar conta</Criartext>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
} 

export { Login }