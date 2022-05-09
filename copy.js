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
  document.getElementById("display").value = ( calculator.sum() );
  }

function CalczM() {
  calculator.read();
  document.getElementById("display").value = ( calculator.mul() );
  }

function hover() {
  document.getElementById("button1").style.color = "aqua"
  document.getElementById("button1").style.borderColor = "aqua"
}

function hoveroff() {
  document.getElementById("button1").style.color = "white"
  document.getElementById("button1").style.borderColor = "white"
}

function hover1() {
  document.getElementById("button2").style.color = "aqua"
  document.getElementById("button2").style.borderColor = "aqua"
}

function hoveroff1() {
  document.getElementById("button2").style.color = "white"
  document.getElementById("button2").style.borderColor = "white"
}