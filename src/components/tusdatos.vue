<template>
<div class="tusDatos">
    <h1 id="tus-datos" class="Head1">Tus datos</h1>

    <label  for="nombre">Nombre:</label><br>
    <input v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Nombre Completo"><br>
    <label for="telefono">Telefono:</label><br>
    <input v-model="telefono" type="tel" name="telefono" id="telefono" placeholder="Num a 10 dígitos" maxlength="10"><br>
    <label  for="correoe">Correo Electrónico</label><br>
    <input v-model="correo" type="email" name="correoe" id="correoe" placeholder="Tu dirección de correo"><br>
    <label for="commenta">Instrucciones Especiales:</label><br>
    <input v-model="instrucciones" type="text" name="commenta" id="commenta" placeholder="Comentarios Sobre el Pastel" maxlength="200">
</div>
</template>

<script>
export default {
  computed:{
    nombre:{
      get(){
          return this.$store.state.nombre
      },
      set(nombreIn){
          this.$store.commit('setNombre', nombreIn)
      }
    },
    telefono:{
      get(){
          return this.$store.state.telefono
      },
      set(telIn){
        this.$store.commit('setTel', telIn)
      }
    },

    correo:{
      get(){
          return this.$store.state.correo
      },

      set(corrIn){
        this.$store.commit('setCorr', corrIn)
      }
    },

    instrucciones:{
      get(){
          return this.$store.state.instrucciones
      },
      set(insIn){
          this.$store.commit('setIns', insIn)
      }
    },
  },
}
</script>

<style>

</style>