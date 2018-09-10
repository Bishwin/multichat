import React from "react";
import {Button, Divider, Input} from "semantic-ui-react";
import {LabelBar} from "./LabelBar";


export class ControlPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>Multichat</h1>
                <div className="ui input">
                    <Input action={<Button onClick={this.onAddItem} content={"Add Item"}/>}
                           onChange={this.handleChange} value={this.state.value} placeholder='Add'
                    />
                </div>
                <LabelBar {...this.state}/>
                <Divider />
            </div>
        );
    }


}