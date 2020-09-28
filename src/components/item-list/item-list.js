import React, { Component } from 'react';
import './item-list.css';

export default class ItemList extends Component {
    render() {
        return (
            <div className="item-list">
                <ul>
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                    <li>List item 4</li>
                </ul>
            </div>
        )
    }
}