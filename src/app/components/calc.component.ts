import { Component } from "@angular/core";

@Component({selector:"app-calc",
    template:`
    <div class="calculator-container">
    <h3> Calculator App </h3>
    <ng-container *ngFor="let n of nums"><button class="bn b{{n}}"(click)="addToInput(n)">{{n}}</button><br *ngIf="(n)%3==0"></ng-container>
    <br>
    <button class="sign" *ngFor="let s of signs" (click)="addToInput(s)">{{s}}</button>
    <br>
    <button class="clear" (click)="clear()">Clear</button>
    <p class="input">{{input}}</p>    
    <button class="submit" (click)="evaluate()"> Submit </button>
    <br>
    <p *ngFor="let h of history">{{h}}</p>
    </div>
    `,

    styles:[`
        div.calculator-container{
            background-color: lightgrey;
            margin: auto;
            width: 10%;
            border: 3px solid black;
            padding: 10px;
        }
    
        h3 {
            text-align: center;
        }

        button.bn{
            width: 30%;
            margin: 1.5%;
        }

        button.sign{
            width: 22%;
            margin: 1.5%;
        }

        button.b0{
            margin: 1.5%;
            width: 97%;
        }

        button.clear{
            margin: 1.5%;
            width: 97%;
        }

        button.submit {
            margin: 1.5%;
            width: 97%;
        }

        p{
            margin: 1.5%;
        }


    
    `]

})

export class CalculatorComponent{
    input:string = "";
    history:string[] = [];
    nums:number[] = [1,2,3,4,5,6,7,8,9,0];
    signs:string[] = ["+", "-", "*", "/"];

    addToInput(n):void{
        this.input += String(n);
        console.log(n);
    }
    clear(){
        this.input = "";
    }
    evaluate():void{
        const evaluated:string = String(eval(this.input));
        this.history.unshift(this.input + "=" + evaluated);
        this.input = evaluated;
    }
}