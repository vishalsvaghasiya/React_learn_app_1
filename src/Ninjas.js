import React, {Component} from "react";

class Ninjas extends Component {
    render() {
        // todo: 1. get props
        console.log(this.props)
        const {name, age, belt} = this.props;
        return (
            <div className="ninja">
                {/*Todo: Static Use Props 0*/}
                <h1>Static Use Info</h1>
                <h4>Name: Vishal</h4>
                <h4>Age: 24</h4>
                <h4>Belt: Black</h4>

                {/*Todo: Use Props 2*/}
                <h1>Use Props 2 Info</h1>
                <h4>Name: {this.props.name}</h4>
                <h4>Age: {this.props.age}</h4>
                <h4>Belt: {this.props.belt}</h4>

                {/*Todo: Use Props 3 */}
                <h1>Use Props 3 Info</h1>
                <h4>Name: {name}</h4>
                <h4>Age: {age}</h4>
                <h4>Belt: {belt}</h4>
                <hr/>
                
            </div>
        );
    }
}

export default Ninjas;