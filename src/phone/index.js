import React from 'react'
import classNames from 'classnames'
import './index.scss'
import statusBarImg from './image/status-bar.png'
import 'fit-progress'

export default class Phone extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {className, children, ...others} = this.props
        const classes = classNames({
            '_namespace': true,
            'mobile': true,
            'phone': true,
            [className]: className
        })

        return (
            <div {...others} className={classes}>
                <img src={statusBarImg}
                     className="status-bar"/>
                <div className="phone-content">
                    {children}
                </div>
            </div>
        )
    }
}

Phone.defaultProps = {}