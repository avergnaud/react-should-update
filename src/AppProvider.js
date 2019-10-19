import React, { Component, createContext } from 'react';

/*
Context for global variables

https://frontarm.com/james-k-nelson/react-context-performance/
"
"<Context.Provider> will only re-render if its children prop does not share reference equality with 
its previous children prop."
"To ensure that the entire app isn’t re-rendered on each context change, you’ll need to keep 
the children props of your providers equal between renders. And luckily, this is surprisingly easy! 
All you’ll need to do is move the state that you’ll provide into a separate component, with the children 
passed into that component from above"
*/
const AppContext = createContext();

class AppProvider extends Component {

    render() {
        return (
            <AppContext.Provider value={this.props.shouldUpdate} >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export { AppContext, AppProvider };