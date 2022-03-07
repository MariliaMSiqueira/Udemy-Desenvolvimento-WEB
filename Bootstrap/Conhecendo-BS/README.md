<div align="center"><h1>Conhecendo o básico de Bootstrap</h1>

</div>


---

<div align="center"><h2>O projeto 💻</h2></div>

Consiste em um README que tem por finalidade agregar todas as anotações feitas durante o conhecimento básico de Bootstrap. <br>

<div align="center"><h2>Habilidades ✔</h2></div>

Adquirindo conhecimento em:
 - [x] Configurações iniciais;
 - [x] Soma de classes;
 - [x] Formatações de texto;
 - [x] Alinhamento de texto;
 - [x] Sufixos responsivos;
 - [x] Elementos flutuantes;
 - [x] Elementos Fixos;


 ----

 <div align="center"><h2>Anotações pessoais 🧷</h2></div>

 <div align="center"><h3>Formatações de texto ⚙ 📃</h3></div>


n = número;

  - [x] hn ≠ display  ➤  class="display-n";
  - [x] Destaque maior  ➤  class="lead";
  - [x] Letras maiúscula  ➤  class="text-uppercarse";
  - [x] Alinhamento  ➤  class="text-right"  /  "text-left"  /  "text-center";
  - [x] Bloco de citação  ➤  blockquote/cite;
  - [x] Listas sem estilo ➤  class="list-unstyled"; 
  - [x] Listas inline  ➤  class="list-inline" / class="list-inline-item";


---

 <div align="center"><h3>Alinhamento de texto 📖 📃</h3></div>

<strong>Elementos inline</strong> = não aceitam margin/padding ou width pois ocuparão o espaço do conteúdo. <br>
<strong>Elementos block</strong> = se comportam como um bloco, ocupando toda viewport. <br>
<strong>Elementos inline-block </strong> =  Agregam os dois comportamentos, haja vista que, as propriedades padding/margin/width serão aceitas, simultaneamente, estarão inline. <br>

  - [x] Texto justificado  ➤  class="text-justify";
  - [x] display:block  ➤  class="d-block";
  - [x] display:inline  ➤  class="d-inline";
  - [x] display:inline-block  ➤  class="d-inline-block";
 
   
   ---

 <div align="center"><h3>Sufixos responsivos 📖 📃</h3></div>

 Padrão = class="text-sufixo-alinhamento"; <br>
 Aplica-se a formatação em dispositivos maiores ou iguais ao sufixo selecionado;

  - [x] XL = Extra Large  ➤  >=1200px;
  - [x] LG = Large   ➤  >=992px;
  - [x] MD = Medium  ➤  >=768px;
  - [x] SM = Small  ➤  >=576px;


---


 <div align="center"><h3>Elementos flutuantes 🎈📃</h3></div>

 DIV Flutuante sai do padrão do DOC, é necessário utilizar o clear:both;

  - [x] Corrigir o fluxo, na DIV PAI  ➤ class="clearfix";
  - [x] Float left  ➤  class="float-left";
  - [x] Float right  ➤  class="float-right";
  - [x] Float none  ➤  class="float-none";

   <div align="center"><h4>Elementos flutuantes responsivos 🎈📃</h4></div>

   Padrão = float-sufixo-direção <br>
   sufixo : sm, md, lg, xl. <br>

  - [x] Right  ➤  class="float-sm-right";
  - [x] Left  ➤  class="float-sm-left";


  ---


 <div align="center"><h3>Elementos fixos 🎯📃</h3></div>

 sticky = grudar;

 
  - [x] Fixo no topo   ➤  class="fixed-top";
  - [x] Fixo no bottom ➤  class="fixed-bottom";
  - [x] Sticky no top ➤  class="sticky-top";
