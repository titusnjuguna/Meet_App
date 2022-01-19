import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(props){
    return(
        <div className={classes.main}>
            <MainNavigation />
            <main>
            {props.children}
            </main>
        
        </div>


    ); 

}
export default Layout;