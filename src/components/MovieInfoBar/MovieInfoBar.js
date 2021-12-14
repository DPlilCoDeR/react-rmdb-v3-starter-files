//helpers
import { calcTime , convertMoney } from "../../helpers";

//Styles
import { Column, Content, Wrapper } from "./MovieInfoBar.styles";


export const MovieInfoBar = ({time, budget, revenue}) => (
    <Wrapper>
        <Content>
            <Column>
                <p>Runnig Time: {calcTime(time)}</p>
            </Column>
            <Column>
                <p>Budget: {convertMoney(budget)}</p>
            </Column>
            <Column>
                <p>Revenue: {convertMoney(revenue)}</p>
            </Column>

        </Content>
    </Wrapper>
) 