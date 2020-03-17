import React, { Component } from 'react';
import '../styles/spinner.css'; // Css do Spinner

class Spinner extends Component {
    render() {
        return (
            <div>
                <div className='loader'></div>
                <div className='text'>Carregando...</div>
            </div>
        )
    }
}

export default Spinner;