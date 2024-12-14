import Input from "../input/input"

const formEmail = 'Digite seu email'
const formSenha = 'Digite sua senha'

function FormLogin () {
    return (
        <>

        <form>
            <div>
                <label>E-mail:</label>
                <Input placeHolder={formEmail}/>
            </div>
            <div>
                <label>Senha:</label>
                <Input placeHolder={formSenha}/>
            </div>
        </form>
        </>
    )
}

export default FormLogin