import React from "react";
import _ from "lodash";
import { Icon, Label } from 'semantic-ui-react'


export class LabelBar extends React.Component {

    createElement(el) {
        console.log("createelements");
        return (
            <Label as='a'>
                {el.name}
                <Icon name='delete' />
            </Label>
            // <span>{el.name} </span>
        );
    }

    render() {
        return (
            <div>
                <h5>Labels</h5>
                {_.map(this.props.items, el => this.createElement(el))}
            </div>
        );
    }


}