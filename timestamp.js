var months = {
    0 : "January" ,
    1 : "February" ,
    2 : "March" ,
    3 : "April" ,
    4 : "May" ,
    5 : "June" ,
    6 : "July" ,
    7 : "August" ,
    8 : "September" ,
    9 : "October" ,
    10 : "November" ,
    11 : "December"
}



var timestamp = (input) => {

    if ( !isNaN(input) ){
        var d = new Date(input*1000);
        console.log(d);
    }
    else {
        var d = new Date(input + " UTC");
    }
    var unix = d.getTime() /1000 ;
    if ( (d.getUTCMonth() + 1) && d.getUTCDate() && d.getUTCFullYear()){
        var natural = `${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`
    } else {
        var natural = null;
    }

    result = {
        "unix" : unix ,
        "natural" : natural
    }
    return result ;

};



module.exports = {
    timestamp
} ;
