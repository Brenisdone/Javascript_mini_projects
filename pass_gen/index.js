const includeLower = true;
const includeUpper = true;
const includeNums = false;
const includeSymbols = false;
const pass_len = 12;

function get_pass(length, includeUpper, includeLower, includeNums, includeSymbols){
    const nums = "1234567890";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()_+=-|";

    let allowchars = "";
    let pass = "";

    allowchars += includeLower ? lower : "";
    allowchars += includeUpper ? upper : "";
    allowchars += includeNums ? nums : "";
    allowchars += includeSymbols ? symbols : "";
    
    if(length<=0){
        return `Password should be atleast 1 character or long`;
    }
    if(allowchars.length===0){
        return `Select atleast 1 set of characters`;
    }
    
    for(let i=0; i<length; ++i){
        let index = Math.floor(Math.random()*allowchars.length);
        pass+=allowchars[index];
    }
    return pass;
}

console.log(get_pass(pass_len, includeUpper, includeLower, includeNums, includeSymbols));


