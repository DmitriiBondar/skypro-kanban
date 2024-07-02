import { Calendar } from "../Calendar"
import * as P from "./styledPopNewCard.styled"

export const PopNewCard = () => {
    return (
        <P.PopNewCard id="popNewCard">
            <P.PNCContainer>
                <P.PNCBlock>
                    <P.PNCContent>
                        <P.PNCTtl>Создание задачи</P.PNCTtl>
                        <P.PNCClose>&#10006;</P.PNCClose>
                        <P.PNCWrap>
                            <P.PNCForm id="formNewCard" action="#">
                                <P.FNewBlock>
                                    <P.Label htmlFor="formTitle">Название задачи</P.Label>
                                    <P.FNInput type="text" name="name" id="formTitle" placeholder="Введите название задачи..." autoFocus/>
                                </P.FNewBlock>
                                <P.FNewBlock>
                                    <P.Label htmlFor="textArea">Описание задачи</P.Label>
                                    <P.FNArea name="text" id="textArea"  placeholder="Введите описание задачи..."></P.FNArea>
                                </P.FNewBlock>
                            </P.PNCForm>
                            <Calendar dateTitle="Выберите срок исполнения " choosedDate="" />
                        </P.PNCWrap>
                        <P.Categories>
                            <P.CP>Категория</P.CP>
                            <P.CThemes>
                                <P.CThemeOrangeActive>
                                    <P.COrange>Web Design</P.COrange>
                                </P.CThemeOrangeActive>
                                <P.CThemeGreen>
                                    <P.CGreen>Research</P.CGreen>
                                </P.CThemeGreen>
                                <P.CThemePurple>
                                    <P.CPurple>Copywriting</P.CPurple>
                                </P.CThemePurple>
                            </P.CThemes>
                        </P.Categories>
                        <P.FNCreate id="btnCreate">Создать задачу</P.FNCreate>
                    </P.PNCContent>
                </P.PNCBlock>
            </P.PNCContainer>
        </P.PopNewCard>
    )
}