let ptkp = 50000000
let sumOfTax

function calculateTax(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount) {

    if(marriageStatus == "Menikah"){
        ptkp = 60000000

        if(dependentChildrenCount != 0){
            childPtkp = dependentChildrenCount*15000000
            ptkp += childPtkp
        }
    }else if(marriageStatus == "singleParents"){
        ptkp = 70000000

        if(dependentChildrenCount != 0){
            childPtkp = dependentChildrenCount*15000000
            ptkp += childPtkp
        }

    }

    let pkp = annualIncome - ptkp
    sumOfTax = (pkp*10/100) + ((pkp-200000000)*20/100) + ((pkp-200000000-250000000) * 30/100)    

    console.log(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount)
    return sumOfTax
}

