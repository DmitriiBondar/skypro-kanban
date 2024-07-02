import { useState } from "react"
import * as H from "./header.styled"
import { Container } from "../../globalStyle.styled"
import { Link } from "react-router-dom"
import { routes } from "../../Router/routes"

export const Header = ({addCard, changeTheme, setChangeTheme}) => {

	const [isOpen, setIsOpen] = useState(false)
	const toggleOpenUser = () => {
		setIsOpen((prev) => !prev)
	}

	const onChangeTheme = () => {
		setChangeTheme(changeTheme === "light" ? "dark" : "light")
	}

    return (
        <H.Header>
			<Container>
				<H.HeaderBlock>
					<H.HeaderLogoLight>
						<a href="" target="_self"><img src="/images/logo.png" alt="logo"/></a>
					</H.HeaderLogoLight>
					<H.HeaderLogoDark>
						<a href="" target="_self"><img src="/images/logo_dark.png" alt="logo"/></a>
					</H.HeaderLogoDark>
					<H.Nav>
						<H.HeaderBtnNew onClick={addCard} id="btnMainNew"><a>Создать новую задачу</a></H.HeaderBtnNew>
						<H.HeaderUser $isOpen={isOpen} onClick={toggleOpenUser}>Ivan Ivanov</H.HeaderUser>
						{isOpen && (
							<H.HeaderPopUserSet id="user-set-target">
								<H.PopUserName>Ivan Ivanov</H.PopUserName>
								<H.PopUserMail className="pop-user-set__mail">ivan.ivanov@gmail.com</H.PopUserMail>
								<H.PopUserTheme>
									<p>Темная тема</p>
									<input checked={changeTheme === "dark"} onClick={onChangeTheme} type="checkbox" className="checkbox" name="checkbox"/>
								</H.PopUserTheme>
								<H.PopBtn type="button"><Link to={routes.exit}>Выйти</Link></H.PopBtn>
							</H.HeaderPopUserSet>
						)}
					</H.Nav>					
				</H.HeaderBlock>
			</Container>			
		</H.Header>
    )
}