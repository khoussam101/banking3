import { formatAmount } from '@/lib/utils'
import React from 'react'
import CountUp from 'react-countup'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'

const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
        <div className="total-balance-chart">
        <DoughnutChart accounts={accounts}/>
        </div>
        <div className="flex flex-col gap-6">
            <div className="header-2">
                Bank Accounts : {totalBanks}
            </div>
            <div className="flex flex-col gap-2">
                <div className="total-balance-label">

                    Total Current Balance
                </div>
                <div className="total-balance-amount flex-center gap-2">
                    
                    <AnimatedCounter amount={totalCurrentBalance} />
                    
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default TotalBalanceBox