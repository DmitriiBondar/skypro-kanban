import { Column } from "../Column";
import { statusList } from "../../data.js";
import { Container } from "../../globalStyle.styled";
import * as M from "./main.styled.js"
export const Main = ({cards}) => {
    return (
        <M.Main>
			<Container>
				<M.MainBlock>
					<M.MainContent>
						{statusList.map((status, i) => (
							<Column 
							key={i}
							title={status} 
							cards={cards.filter((card) => card.status === status)} 
						/>
						))}
					</M.MainContent>
				</M.MainBlock>
			</Container>
		</M.Main>
    )
}