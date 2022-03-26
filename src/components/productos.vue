<template>
      <div class="productos">

    <h1>Estos son nuestros productos</h1>
       <hr>
    <h2>Toppings </h2>
    <ul>
      <div class="primerosTres">
        <li class="lista">Arcoiris<br><img src="..//assets/Toppings/rainbow.jpg" alt="pastel decorado tipo arcoiris" 
            class="pastelImages" title="Photo by Deva Williamson on Unsplash"><br>Precio $145.00</li>
        <li class="lista">Macaron <br><img src="..//assets/Toppings/macattack.jpg" alt="pastel decorado tipo arcoiris" 
            class="pastelImages" title="Photo by Deva Williamson on Unsplash"><br>Precio $155.00</li>
        <li class="lista">Fresa<br><img src="..//assets/Toppings/birthberry.jpg" alt="pastel decorado tipo arcoiris" 
            class="pastelImages" title="Photo by Simon Hrozian on Unsplash"><br>Precio $165.00</li>
      
      </div>
      <div class="segundosTres">
        <li class="lista">4th of July<br><img src="..//assets/Toppings/4July.jpg" alt="pastel decorado tipo arcoiris" 
            class="pastelImages" title="Photo by Deva Williamson on Unsplash"><br>Precio $168.00</li>
        <li class="lista">Rosas<br><img src="..//assets/Toppings/rosesofmay.jpg" alt="pastel decorado tipo arcoiris" 
            class="pastelImages" title="Photo by leyli sadeqian on Unsplash"><br>Precio $170.00 </li>
        <li class="lista">Fruta devastadora <br><img src="..//assets/Toppings/toomuchfruit.jpg" alt="pastel decorado tipo arcoiris" 
            class="pastelImages" title="Photo by Visual Stories || Micheile on Unsplash"><br>Precio $171.00</li></div>
    </ul>
        <br>

    </div>
</template>

<script>
export default {

}
</script>

<style>
.productos h1, h2{
  width: 100%;
  align-content: center;
  text-align: center;
  color: #C96480;
  /* font-size: larger; */
}
ul li{
  color: #577590;
  margin-bottom: 20px;

}
.pastelImages{
  width: 120px;
}
.primerosTres{
  float: left;
  width: 50%;
}
.segundosTres{
  float: right;
  width: 50%;
}

</style>