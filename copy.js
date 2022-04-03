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