import React from "react";
import AnimatedCounter from "./AnimatedCounter";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">{/* DonautChart */}</div>
      <div className="flex flex-col gap-5">
        <h2 className="header-2"> Bank Account: {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Totol Current Balance</p>
          <p className="total-balance-amount flex-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
