let objetos = ['Teclado', 'Mouse', 'Monitor', 'Ar Condicionado'];
     //RECUPERANDO VALOR CONTIDO NO INPUT
     //VALIDAÇÃO DE CONTEÚDO
     const inputContent = document.getElementById('display');
     const addButton = document.getElementById('add');
     function addingContent(){
       if(inputContent.value.length === 0){
         document.write('Digite um valor válido');
         document.write('<br/><br/><button type="button" onclick="refresh()">Retornar</button>')
       }else{
        if(inputContent.value === objetos[0] || inputContent.value === objetos[1] || inputContent.value === objetos[2] || inputContent.value === objetos[3] ){
          console.log('Objeto já existe na lista');
        }else{
          inputContent.value = objetos.push(inputContent.value);
          inputContent.value = '';
          alert('Objeto adicionado com sucesso! Confira no console');  
        }
       }
     };

     function order(){
       objetos.sort();
       alert('Ordenado com sucesso! Confira no console');
     };
     //F5
     function refresh(){
       location.reload();
     };

     function clear(){
       inputContent.value = '';
     };

    //ACIONANDO O BOTÃO COM O PRESSIONAR DO ENTER
    document.addEventListener('keypress', function(e){
      if(e.key === 'Enter'){
        add.click();
      }
    });