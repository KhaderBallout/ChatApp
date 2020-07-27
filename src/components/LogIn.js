import React, { Component } from 'react';
import '../style/common.css';

export class LogIn extends Component {

    render() {
        return ( 
            <form>
            <div className="card">
                <div className="cardHeader">WELCOME</div>
                <div className="inputGroup">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                    />
                </div>
                <button>Sign In</button>
            </div>
            </form>
        )
    }
}

export default LogIn