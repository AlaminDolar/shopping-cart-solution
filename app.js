function updateCaseNumber(product,price,IsIncreasing){
    const caseInput = document.getElementById(product +'-number');
    let caseNumber = caseInput.value;
    if(IsIncreasing){
        caseNumber=parseInt(caseNumber)+1;
    }
    else if(caseNumber >0){
        caseNumber=parseInt(caseNumber)-1;
    }
    caseInput.value= caseNumber;
    //  Update CaseTotal
    const caseTotal = document.getElementById(product+'-total');
    caseTotal.innerText= caseNumber* price;
//    calculate Total
calculateTotal();
}
function getInputValue(product){
    const productInput = document.getElementById(product+'-number');
    const productNumber=parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
 const phoneTotal=getInputValue('phone')*1219;
const caseTotal= getInputValue('case')*59;
const subTotal= phoneTotal + caseTotal;
const tax= subTotal/10;
const totalPrice = subTotal+tax;
// Update on the Html
document.getElementById('sub-total').innerText= subTotal;
document.getElementById('tax-amount').innerText= tax;
document.getElementById('total-price').innerText= totalPrice;
}

// phone increase decrease event handeler
document.getElementById('phone-plus').addEventListener('click',function(){
    updateCaseNumber('phone',1219,true);
})

document.getElementById('phone-minus').addEventListener('click',function(){
    updateCaseNumber('phone',1219,false);
})

// cse increase decrease events henadeler
document.getElementById('case-plus').addEventListener('click',function(){
   updateCaseNumber('case',59,true);
});

document.getElementById('case-minus').addEventListener('click',function(){
   updateCaseNumber('case',59,false);
  
})