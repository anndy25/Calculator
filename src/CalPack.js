function StringToAddition(val){
    let newV="";
    var preV=0;
    var flag='add';
    let total;
    if(val ===""){
        total=0;
    }
    for(let i=0;i<val.length;i++){
        if((val[i] === "-" )|| (val[i] ==="+")|| (val[i] ==="/")|| (val[i] ==="*") ){
            if(val[i] === "-"){
                flag='sub';
                newV='';
                preV=total;
            }
            else if(val[i] =='+'){ 
                flag='add';
                newV='';
                preV=total;
            }
            else if(val[i]==='*'){ 
                flag='mul';
                newV='';
                preV=total;
            }
            else if(val[i] ==='/'){
                flag='div';
                newV='';
                preV=total;
                
            }
            
        }
        else  {
            newV+=val[i];
            // console.log(newV);
            if('add'===flag){
                let num = parseFloat(newV);
                total=preV + num;
                // console.log(typeof(total)+preV);
                console.log(total);
            }
        else if('sub'===flag){
                let num = parseFloat(newV);
                total=preV-num;
                // console.log(typeof(total)+ total);
        

            }
        else if('mul'===flag){
                let num = parseFloat(newV);
                total=preV*num;
                // console.log(total);

            }
        else if('div'===flag){
                let num = parseFloat(newV);
                total=preV/num;
                // console.log(total);

            }
        }
       
       

    }
    return total;

}
export default StringToAddition;