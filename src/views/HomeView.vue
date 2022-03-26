<template>
  <div class="home">   
    <img alt="Cake Fantastic logo" src="../assets/logo.png">
    <section>
<productos/>
    </section>
<h2 class="Head2" id="Sabores">Nuestros Sabores</h2>
    <p class="parrafo">Sabor del Bizcocho</p>
<ul class="unorderedl">
    <li class="SaboresLi">Vainilla</li><br>
    <li class="SaboresLi">Chocolate</li><br>
    <li class="SaboresLi">Naranja</li><br>
    <li class="SaboresLi">Limón</li><br>
</ul>

<informacion/>
  
  </div>
</template>

<script>

export default {
components:{
    'productos': require('@/components/productos.vue').default,
    'informacion': require('@/components/informacion.vue').default,
    
}
}
</script>
<style>
body{
  background-color: #EED3D9;
}
div {
  margin-bottom: 10px;
}




   section::after {
    content: "";
    display: table;
    clear: both;
    }
</style>