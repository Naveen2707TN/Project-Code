import classes from '../../Style/style.module.css';
export const Register = () => {
    return (
        <div className="container-fluid p-0" style={{ height: '100vh' }}>
            <div className="row g-0 h-100">
                <div className="d-none d-md-block col-md-6 col-lg-6 col-xl-6">
                    <div className={classes.leftback}>
                        <div className={'mt-5 px-5'}>
                            <img alt='x-ico' src='' width={22} height={22} />
                            <label className={classes.loginName}>Smart Bill</label>
                        </div>
                        <div className={'mt-5 px-5'}>
                            <h1 className={classes.subHeading}>Start Your Journey</h1>
                            <h1 className={classes.subHeading}>to Better Billing</h1>
                            <label className={classes.normaltxt}>Create your free account and experience professional invoicing. No credit card required. Start managing your billing in minutes.</label>
                        </div>
                        <div className={'mb-4 px-5'}>
                            <div className={classes.main_div}>
                                <div className={classes.circle_div}>
                                    <div className={classes.circle_Click}></div>
                                </div>
                                <label className={classes.normaltxts}>Unlimited invoices</label>
                            </div>
                            <div className={classes.main_div}>
                                <div className={classes.circle_div}>
                                    <div className={classes.circle_Click}></div>
                                </div>
                                <label className={classes.normaltxts}>Automatic payment reminders</label>
                            </div>
                            <div className={classes.main_div}>
                                <div className={classes.circle_div}>
                                    <div className={classes.circle_Click}></div>
                                </div>
                                <label className={classes.normaltxts}>Detailed reports & analytics</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    good bye !
                </div>
            </div>
        </div>
    )
}