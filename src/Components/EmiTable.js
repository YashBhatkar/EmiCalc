import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import PropTypes from 'prop-types';
import React from 'react';
//import { Icon } from '@material-ui/core';
import { connect } from 'react-redux';
import Calculator from './Calculator';
import Moratorium from './Moratorium';
import  CreateData  from './CreateData';
import CreateDataMonth  from './CreateDataMonth';


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.year}
        </TableCell>
        <TableCell align="right">{row.principle}</TableCell>
        <TableCell align="right">{row.interest}</TableCell>
        <TableCell align="right">{row.totalPayment}</TableCell>
        <TableCell align="right">{row.balance}</TableCell>
        <TableCell align="right">{row.loanPaidToDate}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Month</TableCell>
                    <TableCell>Principle</TableCell>
                    <TableCell align="right">Interest</TableCell>
                    <TableCell align="right">Total Payment ($)</TableCell>
                    <TableCell align="right">Total Balance ($)</TableCell>
                    <TableCell align="right"> Loan Paid To Date ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.months.map((monthsRow) => (
                    <TableRow key={monthsRow.month}>
                      <TableCell component="th" scope="row">
                        {monthsRow.month}
                      </TableCell>
                      <TableCell>{monthsRow.principle}</TableCell>
                      <TableCell align="right">{monthsRow.interest}</TableCell>
                      <TableCell align="right">{monthsRow.totalPayment}</TableCell>
                      <TableCell align="right">{monthsRow.balance}</TableCell>
                      <TableCell align="right">{monthsRow.loanPaidToDate}</TableCell>
                     
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    principle: PropTypes.number.isRequired,
    totalPayment: PropTypes.number.isRequired,
    interest: PropTypes.number.isRequired,
    months: PropTypes.arrayOf(
      PropTypes.shape({
        principle: PropTypes.number.isRequired,
        totalPayment: PropTypes.number.isRequired,
        interest: PropTypes.number.isRequired,
      }),
    ).isRequired,
    year: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};



function CollapsibleTable(props) {
const currYear= new Date().getFullYear()
let currMonth=new Date().getMonth()+1
const numMonth= parseFloat(props.homeLoanTenure)
let oneYear=false;
if(numMonth==0){
  return null
}
let tracker=0;
const rows=[]
let balance=parseFloat(props.homeLoanAmount)
let graceMonths= parseInt(props.gracePeriod)
const moratoriumMonths=parseInt(props.moratorium)
const numYear= Math.ceil((props.homeLoanTenure-(12-currMonth))/12)+1
let principle=parseFloat(props.homeLoanAmount)
const emi=Calculator()
let interestMonth=(parseFloat(props.homeInterestRate)/1200)
//let adjustedPrinciple=parseFloat(props.homeLoanAmount)+
 if(props.moratorium!=0){
  //let prevInterest=interestMonth
   //interestMonth=(parseFloat(props.homeInterestRate)/1200)*(props.homeLoanTenure/(props.homeLoanTenure-props.moratorium))
  
  interestMonth=parseFloat(interestMonth)
  for(let i=0;i<100;i++){
    //interestMonth=interestMonth*((((Math.pow((1+interestMonth),(props.homeLoanTenure-graceMonths-moratoriumMonths)))-1)/((Math.pow((1+interestMonth),(props.homeLoanTenure-graceMonths-moratoriumMonths)))))/(((Math.pow((1+prevInterest),(props.homeLoanTenure-graceMonths-moratoriumMonths)))-1)/((Math.pow((1+prevInterest),(props.homeLoanTenure-graceMonths-moratoriumMonths))))))
   // console.log(((Math.pow((1+interestMonth),(props.homeLoanTenure-graceMonths-moratoriumMonths)))-1)+"     "+((Math.pow((1+interestMonth),(props.homeLoanTenure-graceMonths-moratoriumMonths)))))
    interestMonth=((Calculator()/principle)*((((Math.pow((1+interestMonth),(props.homeLoanTenure-graceMonths-moratoriumMonths)))-1)/((Math.pow((1+interestMonth),(props.homeLoanTenure-graceMonths-moratoriumMonths)))))))
  }

} 

let principleLeft=parseFloat(props.homeLoanAmount)

let i=0
let monthTrack=0;
let monthCheck=currMonth
let months=[]
let index=0



while(i<(graceMonths)+(moratoriumMonths)){

  months[index]=CreateDataMonth((monthCheck),0,0,0,balance,0)
  //console.log(yearBalance)
  monthCheck++
  index++
  if((monthCheck)%12==0&&monthCheck!=0){
    //console.log(yearBalance+"   "+yearBalance%11)
    monthCheck=0
    rows[tracker+1]=CreateData(currYear+tracker,0,0,0,balance,0, months)
    tracker++
    index=0
    months=[]

  }

i++
//console.log(i)
}
//console.log(monthCheck+" "+index)


if(props.homeLoanTenure-graceMonths-moratoriumMonths-(12-currMonth)>0){



//let principleLeft=parseFloat(props.homeLoanAmount)

let totalPrinciple=0;
let totalInterest=0;
let totalEmi=0


for(let i=monthCheck; i<12;i++){
  let currInterest=interestMonth*principleLeft;
  let currPrinciple=emi-currInterest;
  principleLeft= principleLeft-currPrinciple;
  balance=balance-currPrinciple;
  let loanPaid= (1-(balance/principle))*100
  totalPrinciple=totalPrinciple+currPrinciple;
  totalInterest=totalInterest+currInterest;
  totalEmi=totalEmi+emi;
  months[monthCheck]=CreateDataMonth(i,currPrinciple,currInterest,emi,balance,loanPaid);
  monthCheck++;
  monthTrack++;

}
let loanPaid= (1-(balance/principle))*100
rows[1+tracker]=CreateData(currYear+tracker,totalPrinciple,totalInterest,totalEmi,balance,loanPaid, months)
months=[]
tracker++
}
else{
  oneYear=true
  const numYear=1;


//let principleLeft=parseFloat(props.homeLoanAmount)
let monthTrack=0; 
let totalPrinciple=0;
let totalInterest=0;
let totalEmi=0
for(let i=0; i<numMonth-graceMonths-moratoriumMonths;i++){
  let currInterest=interestMonth*principleLeft
  let currPrinciple=emi-currInterest
  principleLeft= principleLeft-currPrinciple
  balance=balance-currPrinciple
  let loanPaid= (1-(balance/principle))*100
  totalPrinciple=totalPrinciple+currPrinciple;
  totalInterest=totalInterest+currInterest
  totalEmi=totalEmi+emi;
  months[i+currMonth]=CreateDataMonth(i+currMonth,currPrinciple,currInterest,emi,balance,loanPaid)
  monthTrack++;

}
let loanPaid= (1-(balance/principle))*100
rows[1+tracker]=CreateData(currYear+tracker,totalPrinciple,totalInterest,totalEmi,balance,loanPaid,months)
months=[]
tracker++
}

while(tracker<numYear-1){




//let principleLeft=parseFloat(props.homeLoanAmount)

let totalPrinciple=0;
let totalInterest=0;
let totalEmi=0
for(let i=0; i<12;i++){
  let currInterest=interestMonth*principleLeft
  let currPrinciple=emi-currInterest
  principleLeft= principleLeft-currPrinciple
  balance=balance-currPrinciple
  let loanPaid= (1-(balance/principle))*100
  totalPrinciple=totalPrinciple+currPrinciple;
  totalInterest=totalInterest+currInterest
  totalEmi=totalEmi+emi;
  months[i]=CreateDataMonth(i,currPrinciple,currInterest,emi,balance,loanPaid)

}
let loanPaid= (1-(balance/principle))*100
rows[tracker+1]=CreateData(currYear+tracker,totalPrinciple,totalInterest,totalEmi,balance,loanPaid,months)
months=[]
tracker++

}




//let principleLeft = parseFloat(props.homeLoanAmount)
let whatleft=props.homeLoanTenure-(12-currMonth)-((tracker-1)*12)
if(oneYear==true){
  whatleft=0
}
//const whatleft=(((props.homeLoanTenure/12)-Math.floor((props.homeLoanTenure/12))))*12
let totalPrinciple=0;
let totalInterest=0;
let totalEmi=0
for(let i=0; i<whatleft;i++){
  let currInterest=interestMonth*principleLeft
  let currPrinciple=emi-currInterest
  principleLeft= principleLeft-currPrinciple
  balance=balance-currPrinciple
  let loanPaid= (1-(balance/principle))*100
  totalPrinciple=totalPrinciple+currPrinciple;
  totalInterest=totalInterest+currInterest
  totalEmi=totalEmi+emi;
  months[i]=CreateDataMonth(i,currPrinciple,currInterest,emi,balance,loanPaid)

}
if(whatleft!==0){
let loanPaid= (1-(balance/principle))*100
rows[tracker+1]=CreateData(currYear+tracker,totalPrinciple,totalInterest,totalEmi,balance,loanPaid,months)
months=[]
}


//console.log(whatleft)



/* const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
]; */
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Year</TableCell>
            <TableCell align="right">Principle&nbsp;($)</TableCell>
            <TableCell align="right">Interest&nbsp;($)</TableCell>
            <TableCell align="right">Total Payment&nbsp;($)</TableCell>
            <TableCell align="right">Balance&nbsp;($)</TableCell>
            <TableCell align="right">Loan Paid To Date&nbsp;($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.year} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = state => {
  return{
      homeLoanAmount: state.homeLoanAmount,
      homeLoanTenure: state.homeLoanTenure,
      homeInterestRate:state.homeInterestRate,
      moratorium: state.moratorium,
      gracePeriod: state.gracePeriod
  }
}
export default connect(mapStateToProps)(CollapsibleTable);      