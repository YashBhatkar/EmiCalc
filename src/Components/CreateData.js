import Commas from './Commas';
 function CreateData(year, principle, interest, totalPayment, balance, loanPaidToDate, months) {
  principle = Commas(Math.round(principle));
  interest = Commas(Math.round(interest));
  totalPayment = Commas(Math.round(totalPayment));
  balance = Commas(Math.round(balance));
  loanPaidToDate = (Math.round(loanPaidToDate * 10)) / 10;
  if (months === undefined) {
    months = [];
  }
  loanPaidToDate = loanPaidToDate + "%";
  return {
    year, principle, interest, totalPayment, balance, loanPaidToDate,
    months
  };
}
export default CreateData
