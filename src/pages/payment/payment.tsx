import Navbar from "../../components/navbar";
import cls from "./payment.module.scss";
import React from "react";


interface PaymentProps {}

const Payment: React.FC<PaymentProps> = () => {
    return (  
        <>
          <section className={cls.wrapper}>
            <Navbar />
            <div className={cls["payment-content"]}>
              <div className={cls["earnings-payouts"]}>
                <div className={cls["earnings-payouts_header"]}>
                  <p>Earnings</p>
                  <p>Balance : $0</p>
                </div>
                <div className={cls["earnings-payouts-info"]}>
                  <div className={cls["info-titles"]}>
                    <p>Source</p>
                    <p>Awarded by</p>
                    <p>Awarded at</p>
                    <p>Amount</p>
                  </div>
                  <div className={cls["info-show"]}>
                    <h4>Nothing to show yet</h4>
                  </div>
                </div>
                
              </div>
              <div className={cls["earnings-payouts"]}>
                <div className={cls["earnings-payouts_header"]}>
                  <p>Payouts</p>
                </div>
                <div className={cls["earnings-payouts-info"]}>
                  <div className={cls["info-titles"]}>
                    <p>Amount</p>
                    <p>Paid out at</p>
                    <p>Reference</p>
                    <p>Payout provider</p>
                    <p>Status</p>
                  </div>
                  <div className={cls["info-show"]}>
                    <h4>Nothing to show yet</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    );
}
 
export default Payment;