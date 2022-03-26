<template>
    <div class="radios">
    <h2>Elige tu topping</h2>
    <br>
    
    <br>
    <input type="radio" v-model="$store.state.pastel" name="topping" id="Arcoiris" value= "Arcoiris">
    <label for="Arcoiris">Arcoiris</label><br>

    <input type="radio"  v-model="$store.state.pastel"  name="topping" id="Macaron" value="Macaron">
    <label for="Macaron">Macaron</label><br>
    
    <input type="radio"  v-model="$store.state.pastel"  name="topping" id="Fresa" value="Fresa">
    <label for="Fresa">Fresa</label><br>
    
    <input type="radio"  v-model="$store.state.pastel" name="topping" id="4th" value="4th">
    <label for="4th">4th of July</label><br>
    
    <input type="radio"  v-model="$store.state.pastel" name="topping" id="Rosas" value="Rosas">
    <label for="Rosas">Rosas</label><br>

    <input type="radio"  v-model="$store.state.pastel" name="topping" id="Fruta" value="Fruta">
    <label for="Fruta">Fruta Devastadora</label><br>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.radios{
  text-align: left;
  margin-left: 50px;
  margin-bottom: 10px;
}
</style>