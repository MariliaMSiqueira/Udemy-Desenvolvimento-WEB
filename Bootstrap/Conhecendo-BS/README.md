<div align="center"><h1>Conhecendo o básico de Bootstrap</h1>

</div>


---

<div align="center"><h2>O projeto 💻</h2></div>

Consiste em um README que tem por finalidade agregar todas as anotações feitas durante o conhecimento básico de Bootstrap. <br>

<div align="center"><h2>Habilidades ✔</h2></div>

Adquirindo conhecimento em:
 - [x] Configurações Iniciais;
 - [x] Soma de Classes;
 - [x] Formatações de texto;
 - [x] Alinhamento de texto;
 - [x] Sufixos Responsivos;
 - [x] Elementos Flutuantes;
 - [x] Elementos Fixos;
 - [x] Margin e Padding;
 - [x] Tamanhos e Bordas;
 - [x] Breakpoints;
 - [x] Botões;
 - [x] Nav;
 - [x] Listas / Breadcrumb;
 - [x] Formulários;
 - [x] Input Group pretend e append;
 - [x] Alerts e ProgressBar;
 

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

  - [x] Texto justificado  ➤  .text-justify";
  - [x] display:block  ➤  .d-block;
  - [x] display:inline  ➤  .d-inline;
  - [x] display:inline-block  ➤  .d-inline-block;
 
   
   ---

 <div align="center"><h3>Sufixos responsivos 📖 📃</h3></div>

 Padrão = .text-sufixo-alinhamento; <br>
 Aplica-se a formatação em dispositivos maiores ou iguais ao sufixo selecionado;

  - [x] XL = Extra Large  ➤  >=1200px;
  - [x] LG = Large   ➤  >=992px;
  - [x] MD = Medium  ➤  >=768px;
  - [x] SM = Small  ➤  >=576px;


---


 <div align="center"><h3>Elementos flutuantes 🎈📃</h3></div>

 DIV Flutuante sai do padrão do DOC, é necessário utilizar o clear:both;

  - [x] Corrigir o fluxo, na DIV PAI  ➤ .clearfix;
  - [x] Float left  ➤  .float-left;
  - [x] Float right  ➤  .float-right;
  - [x] Float none  ➤  .float-none;

   <div align="center"><h4>Elementos flutuantes responsivos 🎈📃</h4></div>

   Padrão = float-sufixo-direção <br>
   sufixo : sm, md, lg, xl. <br>

  - [x] Right  ➤  .float-sm-righ.;
  - [x] Left  ➤  .float-sm-lef.;


  ---


 <div align="center"><h3>Elementos fixos 🎯📃</h3></div>

 sticky = grudar;

 
  - [x] Fixo no topo   ➤  .fixed-top;
  - [x] Fixo no bottom ➤  .fixed-bottom;
  - [x] Sticky no top ➤  .sticky-top;

    ---


 <div align="center"><h3>Margin e Padding 📃</h3></div>
  Valor a definir de 0 até 5 <br>
  Para padding basta alterar de "m" para "p".

   - [x]mt  ➤  Margin-Top;
   - [x]mb  ➤  Margin-Bottom;
   - [x]mr  ➤  Margin-Right;
   - [x]ml  ➤  Margin-Left;
   - [x]mx  ➤  Margin eixo X;
   - [x]my  ➤  Margin eixo Y;
   - [x]m   ➤  Margin todos os lados;


   
    ---


 <div align="center"><h3>Tamanhos e Bordas📃</h3></div>
<h4>Tamanhos</h4> <br>
 width = largura <br>
 height = altura <br>
 Porcentagens = 25% / 50% / 75% / 100% e auto <br>

 Padrão = w-porcentagem <br>
 Padrão = h-porcentagem <br>

   - [x]width 25    ➤  .w-25";
   - [x]height 25%  ➤  .h-25";
   - [x]width-auto  ➤  .w-auto";

<h4>Bordas</h4> <br>

Padrão = border-cor-lado

 - [x] Border Right   ➤  .border-right;

 <h5>Border Radius</h5> <br>

 Padrão = border rounded-lado

- [x] Border Rounded Left   ➤  .border rounded-righ;
- [x] Círculo   ➤  .border rounded-circle;


   
    ---


 <div align="center"><h3>Media Queries/ Breakpoints 📟📱💻🖥🖨</h3></div>

 min-width: dispositivos iguais ou maiores, as configurações serão aplicadas. <br>
 <strong>min-width : a partir de...</strong>

 max-width: dispositivos menores, as configurações serão aplicadas. <br>
<strong>max-width: até...</strong>
 

 - [x] Media types;
 - [x] @media(min-width: 576px){background: red} ➤ A partir de 576px o background red será aplicado;
 - [x] @media(min-width: 768px){}  ➤ A partir de 768px, as configurações serão aplicadas ;
 - [x] @media(max-width: 575px){} ➤ Até 575px, as configurações serão aplicadas;
 - [x] @media(max-width: 660px){} ➤ Até 660px, as configurações serão aplicadas.

 Existe a possibilidade de configurar intervalos utilizando @media(max-width:576px) {...} <br>
 @media(min-width:576px) and (max-width: 767px) <br>

 Desta forma, para telas menores que 576px será aplicada a primeira @media <br>
 Entre o intervalo de 576px a 767px será aplicada a segunda @media.

 ---


 <div align="center"><h3>Botões 🎛</h3></div>

 - [x] Padrão  ➤ .btn;
 - [x] Cores  ➤ .btn btn-light; 
 - [x] Outline ➤ .btn btn-outline-danger
 - [x] Tamanhos ➤ .btn btn-lg;
 - [x] Block  ➤  .btn btn-block;
 - [x] Estados  ➤ .btn btn-success active/disabled;
 - [x] Alternar ➤  atributo data-toggle="button";
 - [x] Grupo de botões ➤ div com .btn-group 
 - [x] Dropdown.

  ---


 <div align="center"><h3>Nav 🎞</h3></div>

 - [x] .nav nav-pills = estado ativo com border-radius; 

 - [x] .nav nav-tabs = navegação com abas; 

 - [x] .nav nav-tabs justify-content-center = nav centralizada; 

 - [x] .nav nav-pills flex-column = display flex em coluna; 

 - [x] .navbar = Barra de navegação; 

 - [x] .navbar-expand-sm .navbar-toggler = Menu hamburguer; ul com .collapse 


  ---


 <div align="center"><h3>Listas 📚</h3></div>

 Active; <br>
 <strong>Breadcrumb = migalha de pão com ol</strong>

- [x] .list-group / list-group-item; 
- [x] .list-group .list-group-flush = Sem bordas laterais; 
- [x] .list-group active = Elemento ativo;
- [x] .badge badge-warning;
- [x] ol .breadcrumb / li .breadcrumb-item / a href="#" =  indica onde o usuário está com a possibilidade de retornar a página anterior.

  ---


 <div align="center"><h3>Formulários 📚</h3></div>

.form-control para estilização padrão. <br>
.is-valid / .is-invalid. <br>
.valid-feedback / .invalid-feedback <br>

 - [x] div .form-group com label e input;
 - [x] input com .form-control; 
 - [x] Propriedade readonly;
 - [x] .form-text para textos dentro do form;
 - [x] select com .form-control;
 - [x] textarea com .form-control;
 - [x] input type="file" com .form-control-file ou .custom-file-label / .custom-file-input;
 - [x] input type="range" com .custom-range;
 - [x] form e input com .form-inline; 
 - [x] Login is-valid ou is-invalid;
 - [x] div com conteúdo "Email válido" .valid-feedback;
 - [x] div com conteúdo "Senha inválida" .invalid-feedback;

   ---


 <div align="center"><h3>Input Group 📰</h3></div>

 / = fecha da div;<br>
 pretend = antes do input; <br>
 append = depois do input; <br>
 É possível utilizar pretend e append juntos (Conversor de moeda); <br>

- [x] div .input-group com div .input-group-pretend com span .input-group-text @ / input .form-control.

   ---


 <div align="center"><h3>Alerts e ProgressBar ❕🔋</h3></div>

   Cores contextuais; <br>
   Striped = Listrado; <br>
   Striped com Animated; <br>
   Bar = barra; <br>
   

 - [x] .alert alert-primary(contexto);
 - [x] div com .alert alert-success alert-dismissible  div com buttom com .close e propriedade data-dismiss="alert";
 - [x] div com .progress div com .progress-bar bg-success w-25;
 - [x] .progress-bar bg-warning w-50 progress-bar-striped;
 - [x] .progress-bar bg-danger w-75 progress-bar-animated;









