import { useEffect, useState } from 'react'
import { Header } from '../../components/Header/index'
import { Main } from '../../components/Main/index'
// import { tasks } from '../../data'
import { PopNewCard } from '../../components/PopNewCard'
import { LoaderImg, Wrapper } from '../../globalStyle.styled'
import loader from '/images/loader.gif'
import { Outlet } from 'react-router-dom'
import { getTasks } from '../../API/tasks'

export const MainPage = ({changeTheme, setChangeTheme, user}) => {

    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

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
        // setIsLoading(true)
        getTasks(user.token).then((res) => {
            setCards(res.tasks)
        }).catch((error) => {
            console.log(error.message);
            setError(error.message)
        }).finally(() => {
            setIsLoading(false)
        })
        // setTimeout(() => {
        //   setIsLoading(false)
        // }, 5500)
    }, [])

    return (
        <Wrapper>
            {/* <Exit /> */}
            <Outlet />
            <PopNewCard />
            {/* <PopBrowse /> */}
            <Header addCard={addCard} setChangeTheme={setChangeTheme} changeTheme={changeTheme}/>
            {isLoading ? <LoaderImg src={loader} alt='loader'/> : error ? <p>{error}</p> : <Main cards={cards}/>}
        </Wrapper>
    )
}