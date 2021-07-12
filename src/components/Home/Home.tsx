import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';


import { Input } from '../sharedComponents/Input'
import drone_image from '../../assets/images/aZDhA0n-marvel-wallpaper-hd.jpg'
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo:{
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'black'
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${drone_image});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    },

    field: {
        backgroundColor: 'white'
    }
    
})


interface Props{
    title: string;
}

export const Home = ( props:Props) => {
    
    //new classes variable code
    const classes = useStyles()


    return (
        <div className={classes.root}>
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={ `${classes.logo}` } >
                        <Link to='/' className={ ` ${classes.logo_a} ${classes.logo_navigation}`}>Marvel API Inventory</Link>
                    </h1>
                    <ul className={ ` ${classes.navigation} ${classes.logo_navigation}`}>
                        <li>
                            <Link to='/' className={classes.nav_a}>Home</Link>
                            </li>
                        
                    
                    
                        <li>
                            <Link to='/dashboard' className={classes.nav_a}>Dashboard</Link>
                        </li>
                            
                            
                    </ul>
                </div>
            </nav>

        <main className={classes.main}>
            <div className={classes.main_text}>
                
                <form> 
                <TextField 
                className={classes.field} color="primary" placeholder = "Enter Token" variant="standard" type="password"/>
                </form>
                
            </div>

        </main>

        </div>
    )
}