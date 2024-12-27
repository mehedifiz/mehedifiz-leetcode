const demo = document.getElementById('demo')

function createCounter2(p){

    return function(){
      return  p++
    }
}

const count2= createCounter2(4)

console.log(count2())
console.log(count2())


const counter =  function createCounter(n){
    return function(){
        return n++
       
    }
}

const c =counter(10)
console.log(c())
console.log(c)


const word = function w(){
    return 5;
}

demo.innerHTML= word()


const incriment = function incriment(e){

    return function(){
             return   e++
    }
}

 const number =incriment(7);
 demo.innerHTML=number()
 demo.innerHTML=number()
 demo.innerHTML=number()
 

 const nameSub = function(n){

        if(n.length >= 4){
           const res= n.substring(0 , 6)

            return res;

        }
 }

 const name = nameSub('mehedi hasan shato')
 demo.innerHTML= name;


//  //2704. To Be Or Not To Be
 
 function expect(expectedvalue){

  return {
    toBe: function(value){
        if(value === expectedvalue){
            return true
        }
    } ,
    notToBe:function(value){
        if(value != expectedvalue){
            return false;
        }
    }
    }}
    const promt = parseInt(prompt('expectedvalue'))
    const value = parseInt(prompt('value'))

    const result = expect(promt).notToBe(value);
    alert(result)
  

 


 function tobeOrnot(){
    const expectedvalue = document.getElementById('expeted').value
    const value = document.getElementById('value').value
    const res = document.getElementById('res')
     if(expectedvalue === value){
        return res.innerHTML = 'true';
    }
    return res.innerHTML = 'false';
  
 }


 
 