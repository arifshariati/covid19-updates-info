import React,{ Component } from 'react';
import Cases from './components/Cases';
import './assets/css/App.css'


class App extends Component{
    
    render(){
        const pageData={
            pageTitle:"COVID-19 Live Stats",
        }
        return(
            <>
            <div className="header-container">
                <div className="header-container-logo">
                    <img src={require('./assets/img/logo.png')} alt="Logo" title="Logo"></img>
                </div>
                <div className="header-container-menu-container">
                    <h1>{pageData.pageTitle}</h1>
                </div>
            </div>
            <div className="body-container">
                <div className="left-container"></div>
                <div className="middle-container">
                    <Cases/>
                    <div>HI This is Arif test</div>
                </div>
                <div className="right-container"></div>
            </div>
            <div className="footer-container" >
                <p><b>Data Source: </b> 
                        Data shown on this website is pulled from <a href="https://github.com/mathdroid/covid-19-api" target="_blank">github repository</a>.<br/>
                        Statistics shown here is for displaying information only !</p>
            </div>
            </>
        );
    }
}
export default App;
