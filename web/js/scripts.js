var header = new Vue({
  el: '#global-nav',
  components: {
    'mn-header': {
      props: ['active'],
      template: `<div v-once>
      <button id="hamburguer"><i id="status" class="fa fa-bars" aria-hidden="true"></i></button>    
      <nav role="navigation" class="menu sticky">
        <ul>
          <!--<li><a title="Ir a la página principal" href="index.html"><img class="image" src="img/logonav.png" alt=""/></a></li>-->
          <li :class="{'active':active=='home'}"><a href="index.html">Inicio</a></li>
          <li :class="{'active':active=='habitaciones'}"><a href="habitaciones.html">Habitaciones</a></li>
          <li :class="{'active':active=='restaurantes'}"><a href="restaurantes.html">Restaurantes</a></li>
          <li :class="{'active':active=='instalaciones'}"><a href="instalaciones.html">Instalaciones</a></li>
          <li :class="{'active':active=='eventos'}"><a href="eventos.html">Eventos</a></li>
          <li :class="{'active':active=='entorno'}"><a href="entorno.html">Entorno</a></li>
          <li :class="{'active':active=='a11y'}"><a href="accesibilidad.html">Accesibilidad del hotel</a></li>
          <li :class="{'active':active=='contacto'}"><a href="contacto.html">Contacto</a></li>
        </ul>
      </nav>
      </div>`
    }
  }
});
var footer = new Vue({
  el: '#footer',
  components: {
    'mn-footer': {
      template: `
      <div v-once>
        <div class="row">
          <span class="col m6 center padding-medium"><i class="fa fa-phone" title="Número de teléfono" aria-hidden="true"></i>  Teléfono: <a href="tel:+34960001122">(+34) 96 000 11 22 </a></span>
          <span class="col m6 center padding-medium"><i class="fa fa-envelope" title="Correo electrónico" aria-hidden="true"></i>  Email: <a href="mailto:alexmayol@hotmail.com">alexmayol@hotmail.com</a></span>
        </div>
        <nav class="rrss center xlarge">
          <p>Encuéntranos en</p>
          <a class="padding-small" href="http://www.twitter.com" rel="external" target="_blank"><i class="fa fa-twitter hover-text-aqua" title="Nuesta cuenta de Twitter" aria-hidden="true"></i><span class="only-sr">Twitter (se abre en otra ventana)</span></a>
          <a class="padding-small" href="http://www.facebook.com" rel="external" target="_blank"><i class="fa fa-facebook-official hover-text-blue" title="Nuestra cuenta de Facebook" aria-hidden="true"></i><span class="only-sr">Facebook (se abre en otra ventana)</span></a>
          <a class="padding-small" href="http://www.tripadvisor.com" rel="external" target="_blank"><i class="fa fa-tripadvisor hover-text-green" title="Nuestra cuenta de Tripadvisor" aria-hidden="true"></i><span class="only-sr">Tripadvisor (se abre en otra ventana)</span></a>
          <a class="padding-small" href="http://www.pinterest.com" rel="external" target="_blank"><i class="fa fa-pinterest-p hover-text-black" title="Nuestra cuenta de Pinterest" aria-hidden="true"></i><span class="only-sr">Pinterest (se abre en otra ventana)</span></a>
        </nav>
        <nav class="center">                 
          <a class="padding-small" href="https://github.com/AlexMayol" rel="noopener" target="_blank">Desarrollado por Alex Mayol <span class="only-sr">(se abre en otra ventana)</span></a>
          <a href="http://www.w3.org/WAI/WCAG2AA-Conformance" title="Explanation of WCAG 2.0 Level Double-A Conformance">
            <img height="32" width="88" src="http://www.w3.org/WAI/wcag2AA" alt="Level Double-A conformance, W3C WAI Web Content Accessibility Guidelines 2.0">
          </a>
          </p>
        </nav>
      </div>
    `
    }
  }
});
Vue.component('mn-panel-left', {
  props: {
    url: '',
    img: {
      type: Object,
      default: function () {
        return {
          url: 'http://via.placeholder.com/350x150',
          alt: 'Imagen no disponible'
        }
      }
    }
  },
  template: `
            <section class="block container row">
            <div class="panel back-dark col l4 pad-right">                    
              <slot name="title">Título plantilla</slot>
              <slot name="rest"></slot>   
              <slot name="desc">Texto plantilla</slot>              
              <a class="button-b-l margin-both" :href="url"><slot name="button">Botón plantilla</div></a>
            </div>
            <img class="image col l8 pad-left" :alt="img.alt" :src="img.url"/>
          </section>
          `
})
Vue.component('mn-panel-right', {
  props: {
    url: '',
    img: {
      type: Object,
      default: function () {
        return {
          url: 'http://via.placeholder.com/350x150',
          alt: 'Imagen no disponible'
        }
      }
    }
  },
  template: `
            <section class="block container row">
            <div class="panel back-light col l4 pad-left right">         
              <slot name="title">Título plantilla</slot>
              <slot name="desc">Texto plantilla</slot>              
              <a class="button-b-d margin-both" :href="url"><slot name="button">Botón plantilla</div></a>
            </div>
            <img class="image col l8 pad-right left" :alt="img.alt" :src="img.url"/>
          </section>
          `
})
Vue.component('mn-coockie', {
  data() {
    return {
      accepted: localStorage.getItem('aceptoCoockie')
    }
  },
  template: `
      <div class="coockie" v-if="accepted == 'false'">
          <h3>Este sitio web no utiliza <span class="italic">coockies</span>, no se preocupe. Esto es solo un mensaje de ejemplo.</h3>
          <button @click="accept">De acuerdo, lo que tú digas</button>      
      </div>
  `,
  mounted: function () {
    if (localStorage.getItem('aceptoCoockie') == null) this.accepted = 'false';
  },
  methods: {
    accept: function () {
      this.accepted = localStorage.setItem('aceptoCoockie', 'true');
      console.log(this.accepted);
    }
  }
})
Vue.component('mn-modal-img', {
  props: ['image'],
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    closemodal() {
      this.$emit('closemodal');
    }
  },
  template: `
    <section  @keyup.esc="closemodal" class="modal-img">
      <main>
        <button @click="">X</button>
        <img :src="image.url" :alt="image.alt">
        <p>{{image.desc}}</p>
      </main>
    </section>
    `
})
if (document.getElementsByClassName("inicio")[0]) {
  new Vue({
    el: '.inicio'
  })
}
if (document.getElementsByClassName("rest")[0]) {
  new Vue({
    el: '.rest',
    data: {
      gallery: []
    },
    mounted() {
      for (let a = 0; a < 21; a++) {
        let rand1 = Math.floor(Math.random() * 338) + 150;
        let rand2 = Math.floor(Math.random() * 238) + 150;
        let item = {
          desc: 'Item ' + a + ' description',
          alt: 'Item ' + a + ' description',
          url: 'http://fillmurray.com/' + rand1 + '/' + rand2 + '',
          showImg: false
        };
        this.gallery.push(item);
      }
      console.log(this.gallery);
    },
    methods: {
      imgLoad(el) {
        console.log(el);
        el.showImg = true;
      }
    }
  })
}
if (document.getElementsByClassName("instalaciones")[0]) {
  new Vue({
    el: '.instalaciones'
  })
}
if (document.getElementsByClassName("eventos")[0]) {
  new Vue({
    el: '.eventos'
  })
}
if (document.getElementsByClassName("accesibilidad")[0]) {
  new Vue({
    el: '.accesibilidad'
  })
}
if (document.getElementsByClassName("contacto")[0]) {
  new Vue({
    el: '.contacto'
  })
}
if (document.getElementById("coockie")) {
  new Vue({
    el: '#coockie'
  })
}
if (document.getElementsByClassName("entorno")[0]) {
  new Vue({
    el: '.entorno',
    data: {
      images: [],
      imgModal: {
        desc: 'desc',
        alt: '',
        url: '',
        showModal: false
      }
    },
    mounted() {
      this.loadImages();
    },
    methods: {
      closeModal() {
        console.log("soy el padre y me dicen que cierrw")
      },
      zoomImg(img) {
        this.imgModal = img;
        console.log(this.imgModal)
      },
      imgLoaded(img) {
        img.showImg = true;
      },
      loadImages() {
        for (let a = 0; a < 8; a++) {
          let img = {
            desc: 'Image description',
            alt: 'Lorem ipsum',
            url: '',
            showImg: false
          };
          let rand = Math.floor(Math.random() * 7);
          if (a % 2 == 0) {
            img.url = 'https://placem.at/places?w=50' + rand + '&h=45' + rand + '&random=1&txt=0';
            this.images.push(img);
          } else {
            img.url = 'https://placeimg.com/54' + rand + '/48' + rand + '/arch';
            this.images.push(img);
          }
        }
      },
      loadMoreImages(x) {
        for (let a = 0; a < x; a++) {
          let img = {
            desc: 'Image description',
            alt: 'Lorem ipsum',
            url: '',
            showImg: false
          };
          let rand = Math.floor(Math.random() * 7);
          if (a % 2 == 0) {
            img.url = 'https://placem.at/places?w=50' + rand + '&h=45' + rand + '&random=1&txt=0';
            this.images.push(img);
          } else {
            img.url = 'https://placeimg.com/54' + rand + '/48' + rand + '/arch';
            this.images.push(img);
          }
        }
      }
    }
  })
}
if (document.getElementsByClassName("playroom")[0]) {
  let vm = new Vue({
    el: '.playroom',
    data: {
      matrix: [],
      mxLength: 5,
      state:false,
      scale:false,
      dimensions:false,
      opacity:false
    },
    methods: {
      getDelay(num){
        return num *0.1 +'s'
      },
      getColor(){
        return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
      },
      changeState(){
        this.state = !this.state
      },
      changeScale(){
        this.scale = !this.scale
      },
      changeDimensions(){
        this.dimensions = !this.dimensions
      },
      changeOpacity(){
        this.opacity = !this.opacity
      },
      deleteMatrix() {
        this.matrix = [];
        this.state=false;
        this.scale=false,
        this.dimensions=false,
        this.opacity=false
      },
      initializeMatrix() {
        let mx = this.matrix;
        for (let a = 0; a < this.mxLength; a++) {
          mx[a] = [];
          for (let b = 0; b < this.mxLength; b++) {
            mx[a][b] = undefined;
          }
        }

        for (let i = 0; i < mx.length; i++) {
          for (let j = 0; j < mx[i].length; j++) {
            mx[i][j] = j + 1;
          }
        }
        this.matrix = mx.slice();
      },
      initializeReverseMatrix() {
        let mx = this.matrix;
        for (let a = 0; a < this.mxLength; a++) {
          mx[a] = [];
          for (let b = 0; b < this.mxLength; b++) {
            mx[a][b] = undefined;
          }
        }

        let aux = 0;
        for (let i = 0; i < mx.length; i++) {
          for (let j = mx[i].length; j > 0; j--) {
            mx[i][j - 1] = aux + 1;
            aux++;
          }
          aux = 0;
        }
        this.matrix = mx.slice();
      },
      createMatrixLeftRight(){
        this.initializeMatrix();
      },
      createMatrixRightLeft(){
        this.initializeReverseMatrix();
      },
      createMatrixTopBot(){
        let mx = this.matrix;
        for (let a = 0; a < this.mxLength; a++) {
          mx[a] = [];
          for (let b = 0; b < this.mxLength; b++) {
            mx[a][b] = undefined;
          }
        }

        for (let i = 0; i < mx.length; i++) {
          for (let j = 0; j < mx[i].length; j++) {
            mx[i][j] = i + 1;
          }
        }
        this.matrix = mx.slice();
      },
      createMatrixBotTop(){
        let mx = this.matrix;
        for (let a = 0; a < this.mxLength; a++) {
          mx[a] = [];
          for (let b = 0; b < this.mxLength; b++) {
            mx[a][b] = undefined;
          }
        }

        let aux = 1;
        for (let i = mx.length; i > 0; i--) {
          for (let j = 0; j < mx[i-1].length; j++) {
            mx[i-1][j] = aux;
          }
          aux++;
        }
        this.matrix = mx.slice();
      },
      createMatrixCrossed(){
        let mx = this.matrix;
        for (let a = 0; a < this.mxLength; a++) {
          mx[a] = [];
          for (let b = 0; b < this.mxLength; b++) {
            mx[a][b] = undefined;
          }
        }

        for (let i = 0; i < mx.length; i++) {
          for (let j = 0; j < mx[i].length; j++) {
            if(j % 2 == 0){
              mx[i][j] = i+1;
            }            
          }
        }
        let aux = 1;
        for (let i = mx.length; i > 0; i--) {
          for (let j = 0; j < mx[i-1].length; j++) {
            if(j % 2 != 0){
              mx[i-1][j] = aux;
            }            
          }
          aux++;
        }
        this.matrix = mx.slice();
      },
      createMatrixArrowTopLeft() { /*from top-left to bot-right */
        this.initializeMatrix();
        let mx = this.matrix;

        let aux = 0;
        for (let q = 0, w = 0; q < mx.length; q++, w++) {
          aux = w;
          for (let x = 0; x < w; x++) {
            mx[q][x] += aux;
            aux--;
          }
        }
        this.matrix = mx.slice();
      },
      createMatrixArrowBotLeft() { /*from bot-left to top-right */
        this.initializeMatrix();
        let mx = this.matrix;

        let aux = 0;
        for (let a = mx.length, b = 0; a > 0; a--, b++) {
          aux = b;
          for (let x = 0; x < b; x++) {
            mx[a - 1][x] += aux;
            aux--;
          }
        }
        this.matrix = mx.slice();
      },
      createMatrixArrowTopRight() { /*from top-right to bot-left */
        this.initializeReverseMatrix();
        let mx = this.matrix;

        let aux = 0;
        for (let a = 0, b = 0; a < mx.length; a++, b++) {
          aux = b;
          for (let x = mx[a].length, l = 0; l < b; x--, l++) {
            mx[a][x - 1] += aux;
            aux--;           
          }
        }
        this.matrix = mx.slice();
      },
      createMatrixArrowBotRight() { /*from bot-right to top-left */
        this.initializeReverseMatrix();
        let mx = this.matrix;

        let aux = 0;
        for (let a = mx.length, b = 0; a > 0; a--, b++) {        
          aux = b;
          for (let x = mx[a-1].length, l = 0; l < b; x--, l++) {            
            mx[a-1][x-1] += aux;
            aux--;           
          }
        }
        this.matrix = mx.slice();
      }
    }
  });
}
if (document.getElementById("loader")) {
  var loader = new Vue({
    el: '.loader',
    mounted: function () {
      console.log('Loader cargado');
    }
  });
}
//https://api.myjson.com/bins/15y03n
//https://placem.at/
//https://placeimg.com/


if (document.getElementById("vuegallery")) {
  var galeria = new Vue({
    el: '#vuegallery',
    data: {
      items: [],
      load: []
    },
    mounted: function () {
      console.log('galeria cargada');
      Delighters.config({
        classNames: ['animated', 'fadeIn'],
        start: 1,
        end: 0
      });
      this.$http.get('https://api.myjson.com/bins/q4ag5').then(function (response) {
        this.load = response.data;
        for (var i = 0; i < this.load.length;) {
          this.items.push(this.load.shift());
        }
        setTimeout(function () {
          Delighters.reset();
        }, 200);

      });

    },
    methods: {
      getItems: function () {
        this.$http.get('https://api.myjson.com/bins/q4ag5').then(function (response) {
          this.load = response.data;
          for (var i = 0; i < 4; i++) {
            this.items.push(this.load.shift());
          }
          setTimeout(function () {
            Delighters.reset();
          }, 100);

        });
      },
      loadMore: function () {
        for (var i = 0; i < 4; i++) {
          if (this.load.length > 0) {
            this.items.push(this.load.shift());
            console.log(this.load.length);
            setTimeout(function () {
              Delighters.reset();
            }, 100);
          }
        }
      }
    }
  });
}
/*if(document.getElementById("vuegallery")){
  var galeria = new Vue({
    el:'#vuegallery',
    data:{
      items:[],
      load:[]
    },
    mounted: function () {
      console.log('galeria cargada');     
      Delighters.config({    
        classNames: ['animated', 'fadeIn'],
        start:1.2,
        end:0
      })
      
    },
    methods:{    
      getItems:function(num){
        this.$http.get('https://api.myjson.com/bins/q4ag5').then(function(response){         
          this.load = response.data;      
          for(var i = 0;i < 4;i++) {
            this.items.push(this.load.shift());           
          } 
          setTimeout(function() {
            Delighters.reset();
        }, 100);
        
        });
      },
      loadMore: function(){
        for(var i = 0;i < 4;i++) {
          if(this.load.length > 0){
            this.items.push(this.load.shift());
            console.log(this.load.length);
            setTimeout(function() {
              Delighters.reset();
          }, 100);
          }
        }             
      }
    }
  });
}*/


//https://api.myjson.com/bins/q4ag5
document.getElementById("hamburguer").addEventListener("click", showMenu);
var count = 0;
var mm = document.getElementsByClassName("menu");
var icon = document.getElementById("status");

function showMenu() {
  if (count == 0) {
    count++;
    mm[0].style.transform = "translate(0, 0)";
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    count = 0;
    mm[0].style.transform = "translate(-100%, 0)";
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}