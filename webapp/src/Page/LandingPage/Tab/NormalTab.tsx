import light from '../../../svg/light.svg';
import arrow from '../../../svg/arrow.svg';
import classes from '../../../Style/style.module.css';
import {useNavigate} from 'react-router-dom';

export function NormalTab() {

    const navigate = useNavigate();

    const navigaetToRegisterPage = () => {
        navigate("/register");
    }

    return (
        <div className="mt-5">
            <div className="container d-flex align-items-center justify-content-center flex-column">

                <div className="d-flex align-items-center px-3 py-2" style={{background: '#EFF6FF', fontSize: '.850rem', color: '#2563eb', fontWeight: '600', borderRadius: '3.40282e38px'}}>
                    <img
                        src={light}
                        alt="Lightning"
                        width={15}
                        height={15}
                    />

                    <span className={`ps-3 pe-2`}>
                        Start building your invoices faster
                    </span>
                </div>

                <div className={'d-flex align-items-center px-3 py-2 flex-column mt-5'} style={{fontSize: '3.750 rem', fontWeight: '700', color: '#1e293b'}}>
                    <h1>Billing that works <span style={{color: '#2563eb'}}>as hard</span></h1>
                    <h1>as you do</h1>
                </div>

                <div className={'d-flex align-items-center px-3 py-2 flex-column mt-2'} style={{color: 'rgb(100, 116, 139)'}}>
                    <label>SmartBill handles invoicing, payments, reminders, and reporting so you</label>
                    <label>can focus on growing your business — not chasing payments</label>
                </div>

                <div className={'d-flex align-items-center px-3 py-2 flex-column mt-2'}>
                    <div className={classes.startfree} onClick={navigaetToRegisterPage}>
                        Start for free 
                        <img className={'ms-2'} alt='x-ico' src={arrow} width={12} height={12}/>
                    </div>
                    <label className={'mt-3'} style={{fontSize: '0.75rem', color: '#64748b'}}>No credit card required · Free forever plan · Setup in 2 minutes</label>
                </div>


                

            </div>
        </div>
    );
}