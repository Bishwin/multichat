import GridLayout from 'react-grid-layout';
import React from "react";
import './Grid.css';


class MyFirstGrid extends React.Component {
    render() {
        // layout is an array of objects, see the demo for more complete usage
        const layout = [
            {i: 'a', x: 0, y: 0, w: 5, h: 6},
            {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            {i: 'c', x: 4, y: 0, w: 1, h: 2}
        ];
        return (
            <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                <div className="AddRemoveLayout" key="a">
                    <iframe className="chat" src="http://twitch.tv/chat/embed?channel=hcjustin&popout_chat=true"/>
                </div>
            </GridLayout>
        )
    }
}

export default MyFirstGrid;
