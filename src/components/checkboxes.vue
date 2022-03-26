<template>
    <div class="checkboxes">
    Elige los Sabores del Bizcocho:&ensp;<br>
    <input type="checkbox" v-model="$store.state.sabores"  value="Vainilla">
    <label for="sabor1"> Vainilla&emsp;&emsp;&emsp;</label>
    <input type="checkbox" v-model="$store.state.sabores" name="sabor2" id="sabor2" value="Chocolate">
    <label for="sabor2">Chocolate&emsp;&emsp;&emsp;</label>
    <input type="checkbox" v-model="$store.state.sabores" name="sabor3" id="sabor3" value="Naranja">
    <label for="sabor3">Naranja&emsp;&emsp;&emsp;</label>
    <input type="checkbox" v-model="$store.state.sabores" name="sabor4" id="sabor4" value="Limon">
    <label for="sabor4">Limon&emsp;&emsp;&emsp;</label><br>
</div>
</template>

<script>
export default {

}
</script>

<style>
input:checked + label{
  color: #EED3D9;
  background-color: #5C2751;
}
</style>