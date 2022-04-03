let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +document.getElementById('Input').value
      this.b = +document.getElementById('Input2').value
    }
  };

function CalczS() {
  calculator.read();
  alert( calculator.sum() );
  }

function CalczM() {
  calculator.read();
  alert( calculator.mul() );
  }

function hover() {
  document.getElementById("button1").style.backgroundColor = "grey"
}

function hoveroff() {
  document.getElementById("button1").style.backgroundColor = "black"
}

function hover1() {
  document.getElementById("button2").style.backgroundColor = "grey"
}

function hoveroff1() {
  document.getElementById("button2").style.backgroundColor = "black"
}