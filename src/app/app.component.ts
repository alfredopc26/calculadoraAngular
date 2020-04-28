import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calcapp';
  // Declaracion de variables 
  actual = '0';
  resultado = '0';
  prep = '';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;

  
  public getNumber(v){
    console.log(v);
    if(this.waitForSecondNumber){
      this.actual = v;
      this.waitForSecondNumber = false;
    }else{

     var sizeActual= this.actual.length;   
    if(sizeActual>=10){

    }else{
      this.actual === '0'? this.actual = v: this.actual += v;
    }

    }
  }

  public delNumber(){

    var sizeActual= this.actual.length; 

    if(sizeActual==1){

        this.actual='0';

    }else{


      var del= String(this.actual).substring(0,sizeActual-1);  
      this.actual=del;

    }


  }

  getDecimal(){
    if(!this.actual.includes('.')){
        this.actual += '.'; 
    }
  }

  private doCalculation(op , secondOp){
    switch (op){
      case '+':
      return this.firstOperand += secondOp; 
      case '-': 
      return this.firstOperand -= secondOp; 
      case '*': 
      return this.firstOperand *= secondOp; 
      case '/': 
      if(secondOp=="0"){
        return "Error";
      }else{
        return this.firstOperand /= secondOp; 
      }
      case '=':
      return secondOp;
    }
  }
  public getOperation(op){
    console.log(op);

    if(this.firstOperand === null){
      this.firstOperand = Number(this.actual);  
      this.prep = '';
      this.prep=this.firstOperand+op;

    }else if(this.operator){
      const result = this.doCalculation(this.operator , Number(this.actual))

      var sizeResult=String(result).length;
      if( sizeResult>5){
        this.resultado = String(result.toFixed(5));
      }else{
        this.resultado = String(result);  
      }
      this.firstOperand = null;
      this.prep=this.prep+this.actual;
      this.actual = '0';
    }

    
    this.operator=op;
    this.waitForSecondNumber = true;
   

    console.log(this.firstOperand);
 
  }

  public clear(){
    this.actual = '0';
    this.resultado = '0';
    this.prep = '';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
}
