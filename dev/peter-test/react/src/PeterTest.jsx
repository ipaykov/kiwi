import React, { PureComponent, Fragment } from "react";

export default class PeterTest extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            times: 1,
            color: "black"
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.times !== prevState.times || nextProps.color !== prevState.color) {
            return {
                times: (nextProps.times !== undefined) ? ((Number(nextProps.times) >= 1) ? Number(nextProps.times) : prevState.times) : prevState.times,
                color: (nextProps.color !== undefined) ? nextProps.color : prevState.color
            };
        }

        return null;
    }

    render() {
        return (
            <Fragment>
                <h1 style={{fontFamily: "sans-serif"}}>Component: PeterTest</h1>
                {[...Array(this.state.times)].map((_, index) =>
                    <p key={index} style={{color: this.state.color, fontFamily: "sans-serif"}}>Look Peter the component works!</p>
                )}
            </Fragment>
        );
    }
};
