//PropType
import PropTypes from "prop-types"

//Link is like a anchor
import { Link } from "react-router-dom";

//styles
import { Wrapper, Content } from "./BreadCrumb.styles";

const BreadCrumb = ({movieTitle}) => (
    <Wrapper>
        <Content>
            <Link to='/' >
                <span>
                    Home
                </span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
);

BreadCrumb.propTypes = {
    movieTitle: PropTypes.string
}

export default BreadCrumb;