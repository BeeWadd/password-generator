// js/script.js
(function() {
    const lengthInput = document.getElementById('length');
    const lowerCB   = document.getElementById('lower');
    const upperCB   = document.getElementById('upper');
    const numberCB  = document.getElementById('number');
    const symbolCB  = document.getElementById('symbol');
    const output    = document.getElementById('output');
    const btnGen    = document.getElementById('generate');
    const btnCopy   = document.getElementById('copy');
  
    const randFunc = {
      lower: () => String.fromCharCode(97 + Math.floor(Math.random() * 26)),
      upper: () => String.fromCharCode(65 + Math.floor(Math.random() * 26)),
      number: () => String.fromCharCode(48 + Math.floor(Math.random() * 10)),
      symbol: () => '!@#$%^&*(){}[]=<>/,.'.charAt(Math.floor(Math.random() * 20))
    };
  
    function generatePassword() {
      let pwd = '';
      const len = +lengthInput.value;
      const types = [];
      if (lowerCB.checked) types.push('lower');
      if (upperCB.checked) types.push('upper');
      if (numberCB.checked) types.push('number');
      if (symbolCB.checked) types.push('symbol');
  
      if (!types.length) {
        alert('Select at least one character type');
        return '';
      }
  
      for (let i = 0; i < len; i++) {
        const t = types[Math.floor(Math.random() * types.length)];
        pwd += randFunc[t]();
      }
      return pwd;
    }
  
    btnGen.addEventListener('click', () => {
      const pwd = generatePassword();
      if (pwd) output.value = pwd;
    });
  
    btnCopy.addEventListener('click', () => {
      if (!output.value) return;
      navigator.clipboard.writeText(output.value)
        .then(() => {
          btnCopy.textContent = 'Copied!';
          setTimeout(() => btnCopy.textContent = 'Copy', 1500);
        })
        .catch(() => alert('Failed to copy'));
    });
  })();
  