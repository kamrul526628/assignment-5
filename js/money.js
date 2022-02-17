
// eorr function

function errorDisable(){
    document.getElementById('error-message').style.display = 'none';
}

function errorAble(){
    document.getElementById('error-message').style.display = 'block';
}

// calculate button event

document.getElementById('calculatebutton').addEventListener('click', function(){
    const incomeInput = document.getElementById('income');
    const foodInput = document.getElementById('food');
    const rentInput = document.getElementById('rent');
    const clothInput = document.getElementById('clothes');
    
    const incomeInputText = incomeInput.value;
    const foodInputText = foodInput.value;
    const rentInputText = rentInput.value;
    const clothInputText = clothInput.value;
    

    const newIncomeInputText = parseFloat(incomeInputText);
    const newFoodInputText = parseFloat(foodInputText);
    const newRentInputText = parseFloat(rentInputText);
    const newClothInputText = parseFloat(clothInputText);
    
    
    const newtotalExpenses = document.getElementById('total-expenses');
    const newBalance = document.getElementById('balance');

    if( newIncomeInputText >=0 && newFoodInputText >=0 && newRentInputText >=0 && newClothInputText >=0){
        const totalExpenses = newFoodInputText + newRentInputText + newClothInputText ;
        newtotalExpenses.innerText = totalExpenses;
        
        const remainingBalasce = newIncomeInputText - totalExpenses;
        newBalance.innerText = remainingBalasce;
        errorDisable();
    }
    else{
        errorAble();
        
        newtotalExpenses.innerText='00';
        newBalance.innerText='00';
    }
    
    
})
// saving button

document.getElementById('save-button').addEventListener('click', function(){
    const incomeInput = document.getElementById('income');
    const incomeInputText = incomeInput.value;
    const newIncomeInputText = parseFloat(incomeInputText);
    const saveInput = document.getElementById('save-input');
    const saveInputText = saveInput.value;
    const newSaveInputText = parseFloat(saveInputText);
    
    
    


    const foodInput = document.getElementById('food');
    const rentInput = document.getElementById('rent');
    const clothInput = document.getElementById('clothes');
    
    const foodInputText = foodInput.value;
    const rentInputText = rentInput.value;
    const clothInputText = clothInput.value;
    
    const newFoodInputText = parseFloat(foodInputText);
    const newRentInputText = parseFloat(rentInputText);
    const newClothInputText = parseFloat(clothInputText);

    
    const NewAfterSaveRemainingBalasce = document.getElementById('remaining-balance');
    const newSaveingAmount= document.getElementById('saving-amount');

    if(newSaveInputText >=0){
        const saveingAmount = (newSaveInputText/100) * newIncomeInputText;
        newSaveingAmount.innerText = saveingAmount;

        const totalExpenses = newFoodInputText + newRentInputText + newClothInputText;
        const remainingBalasce = newIncomeInputText - totalExpenses;

        const afterSaveRemainingBalasce = remainingBalasce - saveingAmount;
        NewAfterSaveRemainingBalasce.innerText = afterSaveRemainingBalasce;
        errorDisable();

    }
    else{
        errorAble();
        NewAfterSaveRemainingBalasce.innerText='00';
        newSaveingAmount.innerText='00';
        

    } 
})