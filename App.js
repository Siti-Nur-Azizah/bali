import React, { Component } from 'react';
import Background from './gambar.png';
//import { Button } from "./components";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            matches: window.matchMedia("(min-width: 648px)").matches,

        };
    }


    render() {
        const { matches } = this.state
        return (
            <Router>
                <div style={styles.background}>
                    <div style={styles.overlay}>


                        <Switch>

                            <Route path="/">
                                <div style={styles.container}>
                                    <div>
                                        
                                    </div>
                                    <div style={matches ? styles.h1 : styles.h2}>
                                        Save your Earth<div style={styles.travel}></div>
                                    </div>
                                    <div style={styles.subTittle}>
                                    Menanam satu pohon,menghasilkan sejuta manfaat
                                    </div>
                                    <div style={styles.wrapperInput}>

                                        <button style={styles.button1} >Donasi pohon</button>
                                        <button style={styles.button} >Hubungi Kami</button>
                                        
                                </div>
                                </div>

                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>

        );
    }
}

let w = window.innerWidth;
let h = window.innerHeight;
const styles = {
    background: {
        display: 'flex',
        backgroundImage: `url(${Background})`,
        /*full height*/
        height: '500',
        backgoundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    overlay: {
        
        height: h,
        width: '100%'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',

    },
    topText: {
        alignSelf: 'center',
        marginTop: 50,
        borderStyle: 'solid',
        borderWidth: 5,
        maxWidth: 50,
        color: '#fff',
        justifyContent: 'center',
        padding: 10,
        fontWeight: 'bold'
    },
    h1: {
        alignSelf: 'center',
        marginTop: 250,
        color: 'black',
        fontSize: 40,
        textAlign: 'center',
        maxWidth: 300,
        fontFamily: 'pangolin',
        marginRight:700,
      
    },
    h2: {
        alignSelf: 'center',
        marginTop: 250,
        color: 'black',
        fontSize: 36,

        textAlign: 'center'
    },
    wrapperInput: {
        display: 'flex',
        alignSelf: 'center',
        marginTop: 60
    },
    subTittle:{
        color: 'black',
        textAlign: 'center',
        fontFamily: "Roboto",
        marginTop: 0,
        marginRight:550,
    },

    bgInput: {
        display: 'flex',
        backgroundColor: '#00B894',
        borderRadius: 40,
        marginRight: 16
    },
    input: {
        width: '150px',
        height: '40px',
        left: '400px',
        top: '481px',
        fontFamily: 'pangolin',
        background: "rgba(22, 20, 50, 0.80)",
    },
    input2: {
        borderRadius: 30,
        padding: 10,
        borderStyle: 'none',
        fontSize: 14,
        width: '1280px',
        height: '720px',
        left: '0px',
        top: '0px',
    },
    button: {
        width: '175px',
        height: '46px',
        left: '646px',
        top: '481px',
        fontFamily: 'pangolin',
        background: 'transparet',
        marginLeft: 10,
        marginRight: 580,
        paddingLeft: 40,
        paddingRight: 40,
        border:'solid  #00B894'
        
    },
    button1: {
        width: '175px',
        height: '46px',
        left: '450px',
        top: '481px',
        fontFamily: 'pangolin',
        backgroundColor:' #00B894',
        borderColor: 'green',
        borderRadius:3,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 40,
        paddingRight: 40
       
    },
    textScroll: {
        color: '#fff', maxWidth: 200, textAlign: 'center'
    },
    icon: {
        alignSelf: 'center'
    },
    travel: {
        color: '#FCB371'
    },
    section: {
        margin: 8,
        padding: 8,
        borderStyle: 'groove',
        borderWidth: 1,
        color: '#000'
    },
    Link: {
        textDecoration: 'none'
    },
};

export default App;