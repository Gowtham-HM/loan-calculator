document.getElementById("loan-form").addEventListener("submit",function(e){
    document.getElementById('results').style.display="none";
    document.getElementById('loading').style.display='block';


    setTimeout(calculate,2000);
    e.preventDefault();
});

function calculate(e){
    const amount=document.getElementById("loan_amount");
    const intrest=document.getElementById("intrest");
    const years=document.getElementById("years");
    const monthly_payment=document.getElementById("monthly_payment");
    const total_amount=document.getElementById("total_amount");
    const total_intrest=document.getElementById("total_intrest");


    const principal=parseFloat(amount.value);
    const calculatedIntrest=parseFloat(intrest.value)/100/12;
    const calculatedPayment=parseFloat(years.value)*12;
    const x=Math.pow(1+calculatedIntrest,calculatedPayment);
    const monthly=(principal*x*calculatedIntrest)/(x-1);

    if(isFinite(monthly)){
        monthly_payment.value=monthly.toFixed(2);
        total_amount.value=(monthly*calculatedPayment).toFixed(2);
        total_intrest.value=(monthly*calculatedPayment-principal).toFixed(2);
        document.getElementById('results').style.display="block";
        document.getElementById('loading').style.display='none';
    }

    else{
        showAlert("Please enter amount... ");
    }
    

    e.preventDefault();
}

function showAlert(error){
    const errorDiv=document.createElement('div');
    errorDiv.className="alert alert-danger";
    errorDiv.appendChild(document.createTextNode(error));
    const card=document.querySelector('.card');
    const heading=document.querySelector('.heading');

    card.insertBefore(errorDiv,heading);

    setTimeout(function(){
        document.querySelector('.alert').remove();
        document.getElementById('loading').style.display='none';


    },3000);



}

