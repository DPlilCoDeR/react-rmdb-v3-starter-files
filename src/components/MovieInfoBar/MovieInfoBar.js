//PropTypes
import PropTypes from "prop-types";

//helpers
import { calcTime , convertMoney } from "../../helpers";

//Styles
import { Column, Content, Wrapper } from "./MovieInfoBar.styles";


const MovieInfoBar = ({time, budget, revenue}) => (
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
);

MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
}

export default MovieInfoBar;