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
 - [x] Tabela e Paginação;
 - [x] Cards;
 - [x] Jumbotron & Estrutura para media;
 - [x] GRID System;
 - [x] Configurações GRID;
 - [x] Alinhamento GRID;
 - [x] Margin e Wrap.
 

 ----

 <div align="center"><h2>Anotações pessoais 🧷</h2></div>

 <div align="center"><h3>Formatações de texto ⚙ 📃</h3></div>


n = número;

  - [x] hn ≠ display  =  .display-n;
  - [x] Destaque maior  =  .lead;

  - [x] Letras maiúscula  =  .text-uppercarse;

  - [x] Alinhamento  =  .text-right  /  .text-left  /  .text-center;

  - [x] Bloco de citação  =  blockquote/cite;

  - [x] Listas sem estilo =  .list-unstyled;

  - [x] Listas inline  =  .list-inline / .list-inline-item;


---

 <div align="center"><h3>Alinhamento de texto 📖 📃</h3></div>

<strong>Elementos inline</strong> = não aceitam margin/padding ou width pois ocuparão o espaço do conteúdo. <br>
<strong>Elementos block</strong> = se comportam como um bloco, ocupando toda viewport. <br>
<strong>Elementos inline-block </strong> =  Agregam os dois comportamentos, haja vista que, as propriedades padding/margin/width serão aceitas, simultaneamente, estarão inline. <br>

  - [x] Texto justificado  =  .text-justify;
  - [x] display:block  =  .d-block;
  - [x] display:inline  =  .d-inline;
  - [x] display:inline-block  =  .d-inline-block;
 
   
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

  - [x] Corrigir o fluxo, na DIV PAI  = .clearfix;
  - [x] Float left  =  .float-left;
  - [x] Float right  =  .float-right;
  - [x] Float none  =  .float-none;

   <div align="center"><h4>Elementos flutuantes responsivos 🎈📃</h4></div>

   Padrão = float-sufixo-direção <br>
   sufixo : sm, md, lg, xl. <br>

  - [x] Right  =  .float-sm-righ.;
  - [x] Left  =  .float-sm-lef.;


  ---


 <div align="center"><h3>Elementos fixos 🎯📃</h3></div>

 sticky = grudar;

 
  - [x] Fixo no topo   =  .fixed-top;
  - [x] Fixo no bottom =  .fixed-bottom;
  - [x] Sticky no top  =  .sticky-top;

    ---


 <div align="center"><h3>Margin e Padding 📃</h3></div>
  Valor a definir de 0 até 5 <br>
  Para padding basta alterar de "m" para "p".

   - [x] mt  ➤  Margin-Top;
   - [x] mb  ➤  Margin-Bottom;
   - [x] mr  ➤  Margin-Right;
   - [x] ml  ➤  Margin-Left;
   - [x] mx  ➤  Margin eixo X;
   - [x] my  ➤  Margin eixo Y;
   - [x] m   ➤  Margin todos os lados;


  ---


 <div align="center"><h3>Tamanhos e Bordas📃</h3></div>
<h4>Tamanhos</h4> <br>
 width = largura <br>
 height = altura <br>
 Porcentagens = 25% / 50% / 75% / 100% e auto <br>

 Padrão = w-porcentagem <br>
 Padrão = h-porcentagem <br>

   - [x] width 25    =  .w-25";
   - [x] height 25%  =  .h-25";
   - [x] width-auto  =  .w-auto";

<h4>Bordas</h4> <br>

Padrão = border-cor-lado

 - [x] Border Right   =  .border-right;

 <h5>Border Radius</h5> <br>

 Padrão = border rounded-lado

- [x] Border Rounded Left   =  .border rounded-righ;
- [x] Círculo   =  .border rounded-circle;


   
    ---


 <div align="center"><h3>Media Queries/ Breakpoints 📟📱💻🖥🖨</h3></div>

 min-width: dispositivos iguais ou maiores, as configurações serão aplicadas. <br>
 <strong>min-width : a partir de...</strong>

 max-width: dispositivos menores, as configurações serão aplicadas. <br>
<strong>max-width: até...</strong>
 

 - [x] Media types;

 - [x] @media(min-width: 576px){background: red} = A partir de 576px o background red será aplicado;

 - [x] @media(min-width: 768px){}  = A partir de 768px, as configurações serão aplicadas ;

 - [x] @media(max-width: 575px){} = Até 575px, as configurações serão aplicadas;

 - [x] @media(max-width: 660px){} = Até 660px, as configurações serão aplicadas.

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


   ---


 <div align="center"><h3>Tabela e Paginação 📚</h3></div>

  Cores contextuais; <br>
  thead: <br>
  tr = table row; <br>
  th = table head; <br>
  <br>
  tbody: <br>
  tr <br>
  td = table data; <br>
  Maior acessibilidade - leitores de tela = .sr-only

 - [x] table .table;
 - [x] table .table-dark;
 - [x] thead .thead-dark;
 - [x] table .table-striped;
 - [x] table .table-bordered;
 - [x] table .table-borderless;
 - [x] table .table-sm;
 - [x] div com .table-responsive e table .table;
 - [x] ul.pagination,  li.page-item active e a.page-link ;
 

---


 <div align="center"><h3>Cards 🎴♦</h3></div>

 Overlay = sobreposta <br>
 Header = Cabeçalho <br>
 Tabs = Abas <br>
 Cores contextuais

 - [x] .card outra div.card-body;

 - [x] .card-title, .card-subtitle, .card-text;

 - [x] .card, img.card-img, .card-body ;

 - [x] .card, img.card-img, .card-img-overlay;

 - [x] .card, .card-header, .card-body ... .card-footer;

 - [x] .card, .card-header, ul.nav nav-tabs card-header-tabs, li.nav-item, a.nav-link, .card-body;

 - [x] .card-columns agrega outras divs .card
 

 ---


 <div align="center"><h3>Jumbotron & Estrutura para medias 🧿</h3></div>

Áreas de destaque;

- [x] .jumbotron .container h1.display-4 p.lead;

Estruturas de media: <br>
Alinhamento: start, center e end. <br>

- [x] .media  img.mr-3 align-self-center  .media-body

- [x] ul.list-unstyled  li.media  img.align-selft-center .media-body (h5 e p).

 ---


 <div align="center"><h3>GRID System</h3></div>

São 12 colunas; <br>
.container é responsivo; <br>
.row cria um Flex Container; <br>

- [x] .container .row .col-12 (formatação para todos os devices);

 - [x] .row .col-md-6 {...} .col-md-6{...} = com md, as configurações serão aplicadas em devices A PARTIR DE 768px. Devices menores, o layout ficará um abaixo do outro.


 ---


 <div align="center"><h3>Configurações GRID</h3></div>

 Cada .row define um novo GRID de 12 colunas

 - [x] .container = onde ficarão todos os conteúdos;

 - [x] .row ocupa todo o .container

 - [x] .container-fluid = preenche toda a viewport;

 - [x] largura fixa = .col;

- [x] largura fixa empilhada = .col-sm .col-sm (Quando atingir device sm, as divs ficarão empilhadas);

- [x] .order = ordem das divs;

- [x] offset-n = posicionar div;


 ---


 <div align="center"><h3>Alinhamento GRID</h3></div>

 <div align="center"><h4>Alinhamento Vertical</h4></div>

 Alinhamento-Vertical: align-items-start/center/end. <br>

 Aplica na div.row

 - [x] .row para criar um flex-item com .col
 - [x] .row .align-items-Alinhamento .col 


<div align="center"><h4>Alinhamento Vertical Individual</h4></div>

Alinhamento-Vertical-Individual: align-self-start/center/end <br>

Aplica nos flex-items

- [x] .row .col .aligm-self-Alinhamento-Horizontal-Individual;

<div align="center"><h4>Alinhamento Horizontal em Colunas</h4></div>

Alinhamento-Horizontal : justify-content- start/center/end <br>

Aplica na div.row

- [x] .row .justify-content- Alinhamento-Horizontal
 
<div align="center"><h4>Distribuição dos flex-items</h4></div>

Alinhamento Horizontal : justify-content-around/between <br>

Aplica na .row

- [x] .row .jutify-content-Alinhamento .col 

<div align="center"><h4>Removendo espaçamentos/padding dos flex-items</h4></div>

Aplica na .row no-gutters

- [x] .row .not-gutters;


 ---


 <div align="center"><h3>Margin e Wrap</h3></div>

Com d-flex o padrão será .nowrap


