import React, {Component} from "react"

class HeadLine extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { header, desc } = this.props
        if(!header) {
            return null
        }
        return (
            <div className="headlineComponent">
                <h1 className="header">{header}</h1>
                <p className="description">{desc}</p>
            </div>
        )
    }
}

export default HeadLine
