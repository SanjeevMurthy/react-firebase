import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
 
// export default const material = () => (
//   <MuiThemeProvider>
//     <MyAwesomeReactComponent />
//   </MuiThemeProvider>
// );

export default class Material extends React.Component {
    render(){
        return (
            <MuiThemeProvider>
                <MyAwesomeReactComponent/>
            </MuiThemeProvider>
        )
    }
}