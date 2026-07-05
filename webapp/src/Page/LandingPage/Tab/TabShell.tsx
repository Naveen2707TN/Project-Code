import { useNavigate } from 'react-router-dom';
import classes from '../../../Style/style.module.css';
export function TabShell() {
    const navigate = useNavigate();

    const navigaetToRegisterPage = () => {
        navigate("/register");
    }
    const navigaetToLoginPage = () => {
        navigate("/login");
    }
    return(
        <div className={'container py-2 mt-2'}>
            <div className={'w-100 d-flex align-item-center justify-content-evenly'}>
            <div className={'w-25 d-flex align-item-center justify-content-evenly'}>
                <label>Smart Bill</label>
            </div>
            <div className="w-50 d-flex align-item-center justify-content-evenly">
                <label className={classes.normal_text}>Features</label>
                <label className={classes.normal_text}>Pricing</label>
                <label className={classes.normal_text}>Integrations</label>
            </div>
            <div className="w-25 d-flex align-item-center justify-content-evenly">
                <label className={classes.label_text} onClick={navigaetToLoginPage}>Sign In</label>
                <div className={classes.getstart_btn} onClick={navigaetToRegisterPage}>
                    Get started free
                </div>
            </div>
        </div>
        </div>
    )
}