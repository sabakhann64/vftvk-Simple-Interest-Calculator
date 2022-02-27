function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    i = document.getElementById("years").value;    
    var SI = p*r*i;
    var text = "";
    const d = new Date();
    let year = d.getFullYear();
    text = document.setElementByinnerHTML("If you deposit $(p), at an interest rate of $(rate)%. You will receive an amount of $(SI), in the year $(year)");
    
}
        
