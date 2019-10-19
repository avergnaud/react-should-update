import React, { PureComponent } from 'react';

/**
 * always renders
 */
class ListItemPureComponent extends PureComponent {
    
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

export default ListItemPureComponent