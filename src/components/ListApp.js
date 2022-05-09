import React from "react";
import {List} from "./List";

class ListApp extends React.Component {
    render() {
        return (
            <div>
                <List type='Living Musician'>
                    <li>Sachiko M</li>
                    <li>Harvey Sid Fisher</li>
                </List>
                <List type='Living Cat Musician'>
                    <li>Nora the Piano Cat</li>
                </List>
            </div>
        );
    }
}

export default ListApp;