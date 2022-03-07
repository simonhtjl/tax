const ptkp = 50000000
let sumOfTax

function calculateTax(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount) {
    
    if(annualIncome <= 50000000){
        sumOfTax = 0
    }else if(annualIncome > 0 & annualIncome <= 200000000){
        sumOfTax = 10/100*(annualIncome - ptkp)
    }else if(annualIncome > 0 & annualIncome <= 200000000 ){
        sumOfTax = 10/100*(annualIncome - ptkp)
    }else if(annualIncome > 200000001 & annualIncome <= 450000000 ){
        sumOfTax = 15/100*(annualIncome - ptkp)
    }else if(annualIncome > 450000000 ){
        sumOfTax = 20/100*(annualIncome - ptkp)
    }

    console.log(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount)
    return sumOfTax
}