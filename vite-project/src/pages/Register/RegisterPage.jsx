import { Link } from 'react-router-dom'
// import './register.css'
import { routes } from '../../Router/routes'
import * as R from '../Login/styledLoginPage.styled.js'

export const RegisterPage = () => {
    return (
		<R.Wrapper>
			<R.ContainerSignIn>
				<R.Modal>
					<R.ModalBlock>
						<R.ModalTtlH2>
							<h2>Регистрация</h2>
						</R.ModalTtlH2>
						<R.ModalFormLogin id="formLogUp" action="#">
							<R.ModalInput type="text" name="first-name" id="first-name" placeholder="Имя" />
							<R.ModalInput type="text" name="login" id="loginReg" placeholder="Эл. почта" />
							<R.ModalInput type="password" name="password" id="passwordFirst" placeholder="Пароль" />
							<R.ModalBtnEnter id="SignUpEnter"><a href="../main.html">Зарегистрироваться</a></R.ModalBtnEnter>
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