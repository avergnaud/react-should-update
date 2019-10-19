import React, { Component } from 'react';
import { AppContext } from '../AppProvider';

class ListItem extends Component {

    /*
    On ne peut pas utiliser à la fois React Context et shouldComponentUpdate ?
    "All Consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes. 
    The propagation from Provider to its descendant Consumers is not subject to the shouldComponentUpdate method, 
    so the Consumer is updated even when an ancestor component bails out of the update."
    La solution est dans AppProvider
    */
    shouldComponentUpdate(nextProps, nextState) {
        if(this.context) {
            return nextProps.isFavourite !== this.props.isFavourite;
        } else {
            return true;
        }
    }
    
    render() {
        return (
            <li 
                className="list-group-item" 
                key={this.props.content}
                data-last-rendered={Date.now()}
            >
                <span className='left-span'>{this.props.content}</span>
                <span>
                    <input
                        type="checkbox" 
                        checked={this.props.isFavourite} 
                        onChange={this.props.handleCheckClick} 
                    />
                </span>
            </li>
        );
    }
}

ListItem.contextType = AppContext;

export default ListItem