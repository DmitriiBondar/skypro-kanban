import { Link, useNavigate } from 'react-router-dom'
// import './loginPage.css'
import { routes } from '../../Router/routes'
import * as L from './styledLoginPage.styled'

export const LoginPage = ({setIsAuth}) => {
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        setIsAuth(true)
        navigate(routes.main)
    }
    return (
        <L.Wrapper>
            <L.ContainerSignIn>
                <L.Modal>
                    <L.ModalBlock>
                        <L.ModalTtlH2>
                            <h2>Вход</h2>
                        </L.ModalTtlH2>
                        <L.ModalFormLogin id="formLogIn" action="#">
                            <L.ModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта" />
                            <L.ModalInput type="password" name="password" id="formpassword" placeholder="Пароль" />
                            <L.ModalBtnEnter onClick={handleLogin} id="btnEnter">Войти</L.ModalBtnEnter>
                            <L.ModalFormGroup>
                                <p>Нужно зарегистрироваться?</p>
                                <Link to={routes.register}>Регистрируйтесь здесь</Link>
                            </L.ModalFormGroup>
                        </L.ModalFormLogin>
                    </L.ModalBlock>
                </L.Modal>
            </L.ContainerSignIn>
        </L.Wrapper>
    )
}