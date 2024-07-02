import { Link, useNavigate } from 'react-router-dom'
// import './register.css'
import { routes } from '../../Router/routes'
import * as R from '../Login/styledLoginPage.styled.js'
import { Registration } from "../../API/newUser";
import { useState } from 'react';

export const RegisterPage = ({setUser}) => {

	const [error, setError] = useState('')

    const [formData, setFormData] = useState({
        login: '',
        password: '',
		name: '',
    })
    const navigate = useNavigate()

    const handleRegistration = (e) => {
        e.preventDefault()

        if (formData.name === '') {
            setError('Введите имя')
            return
        } else if (formData.login === '') {
            setError('Введите логин')
            return
        } else if (formData.password === '') {
            setError('Введите пароль')
            return
        }

        Registration(formData).then((res) => {
            console.log(res.user)
            setUser(res.user)
            navigate(routes.login)
        }).catch((error) => {
            console.log(error.message);
            setError(error.message)
        })
    }

    return (
		<R.Wrapper>
			<R.ContainerSignIn>
				<R.Modal>
					<R.ModalBlock>
						<R.ModalTtlH2>
							<h2>Регистрация</h2>
						</R.ModalTtlH2>
						<R.ModalFormLogin onSubmit={handleRegistration} id="formLogUp" action="#">
							<R.ModalInput onChange={(e) => setFormData({...formData, name: e.target.value})} type="text" name="first-name" id="first-name" placeholder="Имя" />
							<R.ModalInput onChange={(e) => setFormData({...formData, login: e.target.value})} type="text" name="login" id="loginReg" placeholder="Эл. почта" />
							<R.ModalInput onChange={(e) => setFormData({...formData, password: e.target.value})} type="password" name="password" id="passwordFirst" placeholder="Пароль" />
							{error && <p>{error}</p>}
							<R.ModalBtnEnter onClick={handleRegistration} type='submit' id="SignUpEnter">Зарегистрироваться</R.ModalBtnEnter>
							<R.ModalFormGroup>
								<p>Уже есть аккаунт? <Link to={routes.login}>Войдите здесь</Link></p>
							</R.ModalFormGroup>
						</R.ModalFormLogin>
					</R.ModalBlock>
				</R.Modal>
			</R.ContainerSignIn>
		</R.Wrapper>
    )
}