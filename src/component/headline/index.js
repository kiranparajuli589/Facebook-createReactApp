import React, {Component} from "react"
import PropTypes from 'prop-types'

class HeadLine extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { header, description} = this.props
        if(!header) {
            return null
        }
        return (
            <div className="headlineComponent">
                <h1 className="header">{header}</h1>
                <p className="description">{description}</p>
            </div>
        )
    }
}

HeadLine.propTypes = {
    header: PropTypes.string,
    description: PropTypes.string,
    tempArr: PropTypes.arrayOf(PropTypes.shape({
        fName: PropTypes.string,
        lName: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number,
        onlineStatus: PropTypes.bool
    }))
}

export default HeadLine
