import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                IT 2021 Spring 2
            </div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/react-router-app/quotes' activeClassName={classes.active}>All questions</NavLink>
                    </li>
                    <li>
                        <NavLink to='/react-router-app/new-quote' activeClassName={classes.active} >Add a question</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation ;