import Commas from './Commas';
import NumToMonth from './NumToMonth';
 function CreateDataMonth(month, principle, interest, totalPayment, balance, loanPaidToDate) {
  principle = Commas(Math.round(principle));
  interest = Commas(Math.round(interest));
  totalPayment = Commas(Math.round(totalPayment));
  balance = Commas(Math.round(balance));
  loanPaidToDate = (Math.round(loanPaidToDate * 10)) / 10;

  month = NumToMonth(month);
  loanPaidToDate = loanPaidToDate + "%";
  let temp = {
    month: month,
    principle: principle,
    interest: interest,
    totalPayment: totalPayment,
    balance: balance,
    loanPaidToDate: loanPaidToDate
  };


  return temp;
}
export default CreateDataMonth
