var header = new Vue({
  el: '#global-nav',
  components:{
    'mn-header':{
      props: ['active'],
      template:  `<div v-once>
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
  el:'#footer',
  components:{
    'mn-footer':{
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
Vue.component('mn-panel-left',{
  props:{
    url:'',
    img:{
      type:Object,
      default:function(){
        return {
          url:'http://via.placeholder.com/350x150',
          alt:'Imagen no disponible'
        }
      }
    }
  },
  template:`
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
Vue.component('mn-panel-right',{
  props:{
    url:'',
    img:{
      type:Object,
      default:function(){
        return {
          url:'http://via.placeholder.com/350x150',
          alt:'Imagen no disponible'
        }
      }
    }
  },
  template:`
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
if(document.getElementsByClassName("inicio")[0]){
new Vue({
  el:'.inicio'
})
}
if(document.getElementsByClassName("rest")[0]){
new Vue({
  el:'.rest'
})
}
if(document.getElementsByClassName("instalaciones")[0]){
  new Vue({
    el:'.instalaciones'
  })
}
if(document.getElementsByClassName("eventos")[0]){
  new Vue({
    el:'.eventos'
  })
}
if(document.getElementsByClassName("accesibilidad")[0]){
  new Vue({
    el:'.accesibilidad'
  })
}
if(document.getElementsByClassName("contacto")[0]){
  new Vue({
    el:'.contacto'
  })
}
if(document.getElementsByClassName("entorno")[0]){
  new Vue({
    el:'.entorno',
    data:{
      images:[]
    },
    mounted(){
        this.loadImages();
    },
    methods:{
      imgLoaded(data){
        console.log(data)
        data.show = true;
      },
      loadImages(){
        let img = {desc:'Image #',alt:'Lorem ipsum', url:''};

        for(let a = 0; a < 12; a++){
          if(a % 2 == 0){
            img.url = 'https://placem.at/people?w=500';
            console.log("HA SALIDO PAR "+img.url);
          }else{
            img.url = 'https://placeimg.com/640/480/any';
            console.log("HA SALIDO IMPAR "+img.url);
          }
          img.show = false;
          console.log("HABIA ESTO: "+this.images[a]);
          this.images.push(img);
          console.log("AHORA HAY ESTO ESTO: "+this.images[a].url);      
          console.log("----------");      
        }
        console.log(this.images)
        for(let a = 0; a < this.images.length; a++){
          console.log("HAY ESTO: "+this.images[a].url);
         }
      }
    }
  })
}
var coockie = new Vue({
  el:'.coockie',
  data:{
    accepted: localStorage.getItem('aceptoCoockie')
  },
  mounted:function(){
    if(localStorage.getItem('aceptoCoockie') == null) this.accepted = 'false';    
  },
  methods:{
    acepto:function(){
      this.accepted = localStorage.setItem('aceptoCoockie', 'true');
      console.log(this.accepted);
    },
    borrar:function(){   
      this.accepted = localStorage.setItem('aceptoCoockie', 'false');
      console.log(this.accepted);
    }
  }
})
if(document.getElementById("loader")){
  var loader = new Vue({
    el:'.loader',
    mounted: function () {
      console.log('Loader cargado');
  }
  });
}
  //https://api.myjson.com/bins/15y03n
  //https://placem.at/
  //https://placeimg.com/


if(document.getElementById("vuegallery")){
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
        start:1,
        end:0
      });
      this.$http.get('https://api.myjson.com/bins/q4ag5').then(function(response){         
        this.load = response.data;      
        for(var i = 0;i < this.load.length;) {
          this.items.push(this.load.shift());           
        } 
        setTimeout(function() {
          Delighters.reset();
      }, 200);
      
      });
      
    },
    methods:{    
      getItems:function(){
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
function showMenu(){
  if(count == 0){
    count++;
    mm[0].style.transform = "translate(0, 0)";
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  }else{
    count=0;
    mm[0].style.transform = "translate(-100%, 0)";
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}