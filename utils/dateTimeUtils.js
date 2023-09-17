import moment from 'moment'

export  function formatDate(givenFormat){
    return moment(givenFormat).format(" Do MMM YY");
}

export const formatTime = (givenFormat) => {
    return moment(givenFormat).format("hh:mm A")
}
