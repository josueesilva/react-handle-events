import React from 'react';
import ReactDOM from 'react-dom';

// function Form() {
//     function handleSubmit(e){
//         e.preventDefault();
//         console.log('Você clicou em enviar');
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <button type="submit">Enviar</button>
//         </form>
//     );
// }

class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        //console.log(this);
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
                //<Form/>,
                <Toggle/>,
                document.getElementById('root'));
