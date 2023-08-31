import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.scss']
})
export class CalComponent implements OnInit {
  num1: string = "";
  num2: string = "";
  selOp: string = "";
  opClicked: boolean = false;
  display: string = "";
  display2: string = "";

  ngOnInit(): void {

  }

  // number starts------------------------->

  Press7() {
    if (!this.opClicked) {
      this.num1 += "7";
      this.display = this.num1;
    }
    else {
      this.num2 += "7"
      this.display = this.num2
    }
    console.log("First" + this.num1)
    console.log("Second" + this.num2)
  }
  Press8() {
    if (!this.opClicked) {
      this.num1 += "8"
      this.display = this.num1;

    }
    else {
      this.num2 += "8"
      this.display = this.num2
    }
    console.log("first" + this.num1)
    console.log("second" + this.num2)
  }
  Press9() {
    if (!this.opClicked) {
      this.num1 += "9"
      this.display = this.num1;
    }
    else {
      this.num2 += "9"
      this.display = this.num2
    }
    console.log("first" + this.num1)
    console.log("second" + this.num2)
  }

  Press4() {
    if (!this.opClicked) {
      this.num1 += "4"
      this.display = this.num1;
    }
    else {
      this.num2 += "4"
      this.display = this.num2
    }
    console.log("first" + this.num1)
    console.log("second" + this.num2)

  }

  Press5() {
    if (!this.opClicked) {
      this.num1 += "5"
      this.display = this.num1;
    }
    else {
      this.num2 += "5"
      this.display = this.num2
    }
    console.log("first" + this.num1)
    console.log("second" + this.num2);

  }

  Press6() {
    if (!this.opClicked) {
      this.num1 += "6"
      this.display = this.num1;
    }
    else {
      this.num2 += "6"
      this.display = this.num2
    }
    console.log("first" + this.num1)
    console.log("second" + this.num2)
  }

  Press1() {
    if (!this.opClicked) {
      this.num1 += "1"
      this.display = this.num1;
    }
    else {
      this.num2 += "1"
      this.display = this.num2
    }
    console.log("first" + this.num1)
    console.log("second" + this.num2)
  }
  Press2() {
    if (!this.opClicked) {
      this.num1 += "2"
      this.display = this.num1;
    }
    else {
      this.num2 += "2"
      this.display = this.num2
    }
    console.log("first" + this.num1)
    console.log("second" + this.num2);
  }
  Press3() {
    if (!this.opClicked) {
      this.num1 += "3"
      this.display = this.num1
    }
    else {
      this.num2 += "3"
      this.display = this.num2
    }
    console.log("first" + this.num1)
    console.log("second" + this.num2);
  }

  Press0() {
    if (!this.opClicked) {
      this.num1 += "0"
      this.display = this.num1;
    }
    else {
      this.num2 += "0"
      this.display = this.num2
    }
    console.log("first" + this.num1)
    console.log("second" + this.num2);
    ;

  }

  Press00() {
    if (!this.opClicked) {
      this.num1 += "00"
      this.display = this.num1;
    }
    else {
      this.num2 += "00"
      this.display = this.num2
    }
    console.log("first" + this.num1)
    console.log("second" + this.num2);
    ;

  }

  // number ends----------------->


  PressPlus() {
    this.display = "+";
    this.opClicked = true;
    this.selOp = "+";
  }

  Presssub() {
    this.display = "-";
    this.opClicked = true;
    this.selOp = "-"
  }
  Pressmulti() {
    this.display = "x";
    this.opClicked = true;
    this.selOp = "x"
  }

  Pressdiv() {
    this.display = "÷";
    this.opClicked = true;
    this.selOp = "÷"
  }
  pressaddsub() {
    
      let num1= parseInt(this.display)
      if(num1 < 0)
      {
        num1 = Math.abs(num1);
        this.display=num1.toString();
      }
      else{
        this.display = "-" + num1.toString();
      }
      this.Setdisplayvalue();
    }

  

  pressdout() {
    if (!this.opClicked) {
      this.num1 += "."
      this.display = this.num1;

    }
    else {
      this.num2 += "."
      this.display = this.num2
    }
    console.log("first" + this.num1)
    console.log("second" + this.num2)

  }

  pressC() {
    this.opClicked = false;
    this.display = "";
    this.selOp = "";
    this.num1 = "";
    this.num2 = "";
  }

  pressAC() {
    this.opClicked = false;
    this.display = "";
    this.display2 = "";
    this.num1 = ""
    this.num2 = ""
  }

  Equals() {
    let n1 = parseFloat(this.num1);
    let n2 = parseFloat(this.num2)
    let res = 0;
    if (this.selOp == "+") {
      res = n1 + n2;
    }
    else if (this.selOp == "-") {
      res = n1 - n2;
    }
    else if (this.selOp == "x") {
      res = n1 * n2;
    }
    else if (this.selOp == "÷") {
      res = n1 / n2;
    }



    this.display2 = res.toString();



    this.display2 = res.toString();

    
    this.opClicked = false;
    this.num1 = res.toString();
    this.num2 = "";

  }
  Sqrt() {
    let x = parseInt(this.display)
    this.display2 = Math.sqrt(x).toString()
  }
  sqroot() {
    let x = 1 / parseInt(this.display);
    this.display2 = x.toString();
    this.num1 = this.display;
  }
  Percent() {
    this.display = (parseInt(this.display) / 100).toString();

  }

  sqrooot() {
    if (this.opClicked) {
      this.Equals();
    }
    this.opClicked = false;
    this.display2 = (parseFloat(this.display) * parseFloat(this.display)).toString()


  }

  backsp() {

    let x = this.display.length
    this.display = this.display.substring(0, x - 1)
    if (this.opClicked) {
      this.num2 = "";
    }
    else {
      this.num1 = ""
    }
  }
  Setdisplayvalue() {
    if (this.opClicked) {
      this.num2 = this.display2;
    }
    else {
      this.num1 = this.display2;
    }
  }

}
