import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  value:string = '0';
  numberGroups =[1,2,3,'+'];
  numberGroups1 =[4,5,6,'-'];
  numberGroups2 =[7,8,9,'*'];
  numberGroups3 =[0,'c','=','/'];
  readyForNewInput = true;
  oldvalue='';
  lastoperator='*';
  result=0;
 
  onbuttonpress(num: any)
 {
       console.log(num);

      if (typeof num === 'number') 
      {
        console.log("is a number");
        if(this.readyForNewInput)
        this.value = '' + num;
        else
        this.value += '' + num;
        this.readyForNewInput=false;
      }
      
      else if(num ==="c") {
        this.value = '0';
        this.readyForNewInput=true;
      }

      else if (num==='=') 
      {
        if(this.lastoperator==='*')
        {
         this.value ='' + (parseInt(this.value) * parseInt(this.oldvalue));
        }
        else if(this.lastoperator==='+')
        {
          this.value ='' + (parseInt(this.value) + parseInt(this.oldvalue));
        }
        else if(this.lastoperator==="/")
        {
         this.value = '' + (parseInt(this.oldvalue) /parseInt(this.value));
        }
         else if(this.lastoperator==="-")
        {
         this.value = '' + (parseInt(this.oldvalue) - parseInt(this.value));
        }
         this.readyForNewInput=true;
      }

      else 
      {
       this.readyForNewInput=true;
       this.oldvalue= this.value;
       this.lastoperator=num;
      }
  }
}
