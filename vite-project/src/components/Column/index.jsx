import { Card } from "../Card";
import * as C from './styledColumn.styled'
export const Column = ({title, cards}) => {
    return (
        <C.MainColumn>
            <C.ColumnTitle>
                <p>{title}</p>
            </C.ColumnTitle>
            <C.Cards>
                {cards.map((card) => {
                    return (
                        <Card 
                            key={card.id} 
                            id={card.id}
                            cardTitle={card.title} 
                            topic={card.topic}
                            date={card.date}
                        />
                    )
                })}
            </C.Cards>
        </C.MainColumn>	
    )
}