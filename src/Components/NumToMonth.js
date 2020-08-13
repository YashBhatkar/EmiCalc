import React from 'react'

function NumToMonth(month) {
    if (month === 0) {
      month = "January";
    }
    if (month === 1) {
      month = "February";
    } if (month === 2) {
      month = "March";
    } if (month === 3) {
      month = "April";
    } if (month === 4) {
      month = "May";
    } if (month === 5) {
      month = "June";
    } if (month === 6) {
      month = "July";
    } if (month === 7) {
      month = "August";
    } if (month === 8) {
      month = "September";
    } if (month === 9) {
      month = "October";
    }
    if (month === 10) {
      month = "November";
    }
    if (month === 11) {
      month = "December";
    }
    return month;
  }

export default NumToMonth
