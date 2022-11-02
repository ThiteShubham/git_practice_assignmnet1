function pelendrom(str){
    let bag="";
    for(let i=str.length-1;i>=0;i--){
        bag+=str[i];
    }
    if(str==bag){
        return true;
    }else{
        return false
    }
    
}
console.log(pelendrom("subham"));
