import { Link, useNavigate } from 'react-router-dom'
// import './loginPage.css'
import { routes } from '../../Router/routes'
import * as L from './styledLoginPage.styled'
import { useState } from 'react'
import { signIn } from '../../API/user'

export const LoginPage = ({setUser}) => {
    const [error, setError] = useState('')

    const [formData, setFormData] = useState({
        login: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        if (formData.login === '') {
            setError('Введите логин')
            return
        } else if (formData.password === '') {
            setError('Введите пароль')
            return
        }

        signIn(formData).then((res) => {
            console.log(res.user)
            setUser(res.user)
            navigate(routes.main)
        }).catch((error) => {
            console.log(error.message);
            setError(error.message)
        })
    }
    return (
        <L.Wrapper>
            <L.ContainerSignIn>
                <L.Modal>
                    <L.ModalBlock>
                        <L.ModalTtlH2>
                            <h2>Вход</h2>
                        </L.ModalTtlH2>
                        <L.ModalFormLogin id="formLogIn" action="#" onSubmit={handleLogin}>
                            <L.ModalInput onChange={(e) => setFormData({...formData, login: e.target.value})} type="text" name="login" id="formlogin" placeholder="Эл. почта" />
                            <L.ModalInput onChange={(e) => setFormData({...formData, password: e.target.value})} type="password" name="password" id="formpassword" placeholder="Пароль" />
                            {error && <p>{error}</p>}
                            <L.ModalBtnEnter onClick={handleLogin} id="btnEnter" type='submit'>Войти</L.ModalBtnEnter>
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