//LAÇO SIMPLES
for(let x = 0; x <= 10; x++){
  1 * x;
  document.write('1x' + x + '= ' + (1*x) + '<br>');
};

// document.write('<br>');
for(let y = 2; y <= 10; y++){
  document.write('<hr>');
  for(let x = 1; x <= 10; x++){
    document.write('<br>');
    document.write( y + 'x' + x + '=' + (y * x));
  };
};


