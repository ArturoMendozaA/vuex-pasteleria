<template>
      <div class="infor">
    <p> Pedido:  
    <br> Topping: {{$store.state.pastel}}
    <br> sabores: {{$store.state.sabores}}
    <br><br>
    <br> Datos del cliente: 
    <br> Nombre: {{$store.state.nombre}}
    <br> Telefono:{{$store.state.telefono}}
    <br> Correo:{{$store.state.correo}}
    <br> Comentarios Especiales:{{$store.state.instrucciones}}
  </p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>