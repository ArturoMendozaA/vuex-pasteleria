<template>
  <div class="imagenIzquierda">
    <h2 >{{$store.state.pastel}}</h2><br>
    <div v-if="$store.state.pastel == 'Arcoiris'" class="arcoiris">
    <img class="pastelImage" src="../assets/Toppings/rainbow.jpg"  alt="pastel">
    </div>
        <div v-if="$store.state.pastel == 'Macaron'" class="arcoiris">
        <img class="pastelImage" src="../assets/Toppings/macattack.jpg"  alt="pastel">
    </div>
        <div v-if="$store.state.pastel == 'Fresa'" class="arcoiris">
        <img class="pastelImage" src="../assets/Toppings/fresaenvuelto.jpg"  alt="pastel">
    </div>
        <div v-if="$store.state.pastel == '4th'" class="arcoiris">
        <img class="pastelImage" src="../assets/Toppings/4July.jpg"  alt="pastel">
    </div>
        <div v-if="$store.state.pastel == 'Rosas'" class="arcoiris">
        <img class="pastelImage" src="../assets/Toppings/rosesofmay.jpg"  alt="pastel">

    </div>    
        <div v-if="$store.state.pastel == 'Fruta'" class="arcoiris">
        <img class="pastelImage" src="../assets/Toppings/toomuchfruit.jpg"  alt="pastel">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.imagenIzquierda{
  float: left;
  width: 30%;
}

.pastelImage{
  
  width: 180px;
  border: 5px solid #B389AA;
}
</style>