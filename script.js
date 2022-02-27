function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    i = document.getElementById("years").value;    
    var SI = p*r*i;
    const d = new Date();
    let year = d.getFullYear();
    document.getElementById("result").innerHTML = "saba";
    
}
        
