function calculateTip(){
    
    var total_bill = document.getElementById("totalbill").value
    var service = document.getElementById("service").value
    var no_people = document.getElementById("no-people").value

    total_bill = parseInt(total_bill,10)
    service = parseFloat(service)

    if (no_people != null && no_people != undefined){
        no_people = parseInt(no_people)
        tip = (total_bill*service)/no_people
    }
    else{
        no_people = 0
        tip = (total_bill*service)
    }

    document.getElementById("totaltip").innerHTML = tip

}