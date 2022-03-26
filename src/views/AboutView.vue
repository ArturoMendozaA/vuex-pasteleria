<template>
  <div class="pedido">
    <img src="../assets/logo.png" alt="Cake Fantastic logo">
    <h1>Elige tu Pastel</h1>
  <section>
  <div class="cajaBordeExterior">

  <imagenPastelIzq />

<div class="formularioDerecha">
  
  <radios/>

<checkboxes/>
<ul>    
      <br><p class="precio">Precio $145.00</p><hr>
    Sabores de Bizcocho elegidos: <br>

      <li v-for="sabor in $store.state.sabores" v-bind:key="sabor">{{sabor}}</li>
      </ul>

</div>
</div>
</section>

<tusdatos/>

<button >Hacer Pedido</button>
<br><br><br>
<!-- @click="$store.commit('setPas')" -->

</div>
</template>

<script>

export default {
  name:'pedido',
data(){
        return{
          // sabores:[],
          // pastel: 'Arcoiris'
        }
     
        },

  components:{
   'imagenPastelIzq': require('@/components/ImagenPastelIzquierda.vue').default,

    'radios': require('@/components/radios.vue').default,
    'checkboxes': require('@/components/checkboxes.vue').default,
    'tusdatos': require('@/components/tusdatos.vue').default,




    
  }
}
</script>
<style>
div{
  margin-bottom: 20px;
  color: #577590;
}
h1, h3{
  color: #C96480;
}
h2{
  color: #577590;
}

.pedido{
  width: 100%;
}

.formularioDerecha{
  width: 70%;
  margin-left: 30%;
  font-weight: bold;
}

li{
  display:inline-table;
  margin-right: 10px;
}
input{
  cursor: pointer;
}


.cajaBordeExterior{
  border: 5px solid #B389AA;
}
.precio{
  border: 5px solid #B389AA;
  width: 20%;
  align-content: center;
  margin-left: 45%;
}
   section::after {
    content: "";
    display: table;
    clear: both;
    }
button{
  color: #5C2751;
  font-size: 130%;
  font-weight: bolder;
  border-radius: 8px;
  padding: 2%;
  padding-top: 1%;
  cursor: pointer;
  padding-bottom: 1%;
  background-color: #B389AA;
  margin: 20px;
}
button:hover{
  color: #EED3D9;
  background-color: #aab9a1;
}
</style>