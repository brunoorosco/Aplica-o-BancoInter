import { HeaderContainer, HeaderWrapper, UserInfo } from './styles';

import logoInter from '../../assets/images/Inter-orange.png'

import UserCircle from '../UserCircle';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate()

  const handleLogoff = () => {
    navigate('/')
  }

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={logoInter} width={172} height={61} alt='logo inter' />
        <UserInfo>
          <UserCircle initials="BR" />
          <div>
            <p>Olá. <span className='primary-color front-bold'>Bruno</span></p>
            <strong>22001123</strong>< br/>
            <a href='#' onClick={handleLogoff}>Sair</a>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header;