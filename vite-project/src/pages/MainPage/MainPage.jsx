import { useEffect, useState } from 'react'
import { Header } from '../../components/Header/index'
import { Main } from '../../components/Main/index'
import { tasks } from '../../data'
import { PopNewCard } from '../../components/PopNewCard'
import { LoaderImg, Wrapper } from '../../globalStyle.styled'
import loader from '/images/loader.gif'
import { Outlet } from 'react-router-dom'

export const MainPage = ({changeTheme, setChangeTheme}) => {

    const [cards, setCards] = useState(tasks)
    const [isLoading, setIsLoading] = useState(false)

    const addCard = () => {
        const newCard = {
          id: cards.length + 1,
          date: '32.01.120 до н.э.',
          topic: "Web design",
          title: "New task",
          status: "Без статуса",
        }
        setCards([...cards, newCard])
    }
    
    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
          setIsLoading(false)
        }, 5500)
    }, [])

    return (
        <Wrapper>
            {/* <Exit /> */}
            <Outlet />
            <PopNewCard />
            {/* <PopBrowse /> */}
            <Header addCard={addCard} setChangeTheme={setChangeTheme} changeTheme={changeTheme}/>
            {isLoading ? <LoaderImg src={loader} alt='loader'/> : <Main cards={cards}/>}
        </Wrapper>
    )
}