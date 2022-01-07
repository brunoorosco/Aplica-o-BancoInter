import {
    Wrapper, Background,
    InputContainer,
    ButtonContainer
} from './styles'

import Card from '../../components/Card'

import background from '../../assets/images/background-login.jpg'
import ImgInter from '../../assets/images/Inter-orange.png'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'

function SignIn() {
    const navigate = useNavigate()

    const handleToSignIn = () => {
        navigate('/dashboard')
    }

    return (
        <Wrapper>
            <Background image={background} />
            <Card width='403px' >
                <img src={ImgInter} width={172} height={61} alt='Logo Inter' />
                <InputContainer>
                    <Input placeholder='Nome' />
                    <Input placeholder='SobreNome' />
                    <Input placeholder='Email' />
                   <Input placeholder='Senha' type='password' />
                    <Input placeholder='Confirma Senha' type='password' />
                </InputContainer>
                <ButtonContainer>
                    <Button type='button'onClick={handleToSignIn}>
                        Registrar
                    </Button>
                    <p>Se já é cadastrado! <Link to='/'>Entrar Já!</Link></p>
                </ButtonContainer>

            </Card>
        </Wrapper>
    )
}

export default SignIn
