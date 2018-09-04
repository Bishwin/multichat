import 'react-notifications/lib/notifications.css';
import React from "react";
import './style.css';
import './Chatbox.css';
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import {NotificationContainer, NotificationManager} from 'react-notifications';

const ResponsiveReactGridLayout = WidthProvider(Responsive);


/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
class Chatbox extends React.PureComponent {
    static defaultProps = {
        className: "layout",
        cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
        rowHeight: 100
    };

    constructor(props) {
        super(props);

        this.state = {
            items: [].map((i, key, list) => (
                {
                    i: i.toString(),
                    x: i * 2,
                    y: 0,
                    w: 2,
                    h: 2,
                    add: i === (list.length - 1).toString()
                })),
            newCounter: 0,
            value: ""
        };

        this.onAddItem = this.onAddItem.bind(this);
        this.onBreakpointChange = this.onBreakpointChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    createElement(el) {
        const removeStyle = {
            position: "absolute",
            right: "2px",
            top: 0,
            cursor: "pointer"
        };
        const i = el.add ? "+" : el.i;
        return (
            <div key={i} data-grid={el}>
                {el.add ?
                    (<span className="add text" onClick={this.onAddItem} title="You can add an item by clicking here, too.">Add +</span>)
                    : (<iframe className="chat" src={"http://twitch.tv/chat/embed?channel="+el.name+"&popout_chat=true"}/>)}
                <span className="remove" style={removeStyle} onClick={this.onRemoveItem.bind(this, i)}>x</span>
            </div>
        );
    }

    onAddItem() {
        /*eslint no-console: 0*/
        if (this.state.value !== ""){
            console.log("adding", "n" + this.state.newCounter);
            console.log("adding", "n" + this.state.value);
            this.setState({
                // Add a new item. It must have a unique key!
                items: this.state.items.concat({
                    i: "n" + this.state.newCounter,
                    name: this.state.value,
                    x: (this.state.items.length * 2) % (this.state.cols || 12),
                    y: Infinity, // puts it at the bottom
                    w: 2,
                    h: 2
                }),
                // Increment the counter to ensure key is always unique.
                newCounter: this.state.newCounter + 1
            });
        } else {
            console.log("empty");
            NotificationManager.error('', 'Cannot be empty', 5000);
        }
    }

    // We're using the cols coming back from this to calculate where to add new items.
    onBreakpointChange(breakpoint, cols) {
        this.setState({
            breakpoint: breakpoint,
            cols: cols
        });
    }

    onLayoutChange(layout) {
        // this.props.onLayoutChange(layout);
        // this.setState({ layout: layout });
    }

    onRemoveItem(i) {
        console.log("removing", i);
        this.setState({ items: _.reject(this.state.items, { i: i }) });
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <NotificationContainer/>
                <input type="text" onChange={this.handleChange} />
                <button onClick={this.onAddItem}>Add Item</button>
                <ResponsiveReactGridLayout onLayoutChange={this.onLayoutChange} onBreakpointChange={this.onBreakpointChange}{...this.props}>
                    {_.map(this.state.items, el => this.createElement(el))}
                </ResponsiveReactGridLayout>
            </div>
        );
    }
}

export default Chatbox;