<template>
  <div id="Productos">
    <div>
      <b-navbar variant="faded" type="light">
        <b-navbar-brand tag="h1" class="mb-0">
          <b-icon icon="bag" aria-hidden="true"></b-icon>
          Productos
        </b-navbar-brand>
      </b-navbar>
    </div>
    <hr />
    <div>
      <b-table striped hover :items="productos"></b-table>
      <b-button class="ml-1" variant="success" v-on:click="isAdding = !isAdding"
        >Agregar Producto</b-button
      >
    </div>
    <div v-if="isAdding">
      Acá quiero poner el formulario para agregar 1 producto. (cuando sepa como
      jaja)
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Productos",
  data() {
    return {
      productos: [],
      isAdding: false
    };
  },
  created() {
    let self = this;
    this.getAllProducts()
      .then(result => {
        self.productos = result.data;
      })
      .catch(error => alert("Error de Servidor"));
  },
  methods: {
    getAllProducts() {
      return axios.get("http://127.0.0.1:8000/productos");
    }
  }
};
</script>
<style></style>
