import { Link, useNavigate } from "react-router-dom"
import { routes } from "../../Router/routes"
import * as E from "./PopUserStyled.styled"

export const Exit = ({setIsAuth}) => {
    const navg = useNavigate()
    const handleLogout = () => {
        setIsAuth(false)
        navg(routes.login)
    }
    return (
        <E.PopExit id="popExit">
            <E.PEContainer>
                <E.PEBlock>
                    <E.PETtl>
                        <h2>Выйти из аккаунта?</h2>
                    </E.PETtl>
                    <form id="formExit" action="#">
                        <E.PEFormGroup>
                            <E.PEExitYes id="exitYes" onClick={handleLogout}>Да, выйти</E.PEExitYes>
                            <E.PEExitNo id="exitNo"><Link to={routes.main}>Нет, остаться</Link> </E.PEExitNo>
                        </E.PEFormGroup>
                    </form>
                </E.PEBlock>
            </E.PEContainer>
        </E.PopExit>
    )
}