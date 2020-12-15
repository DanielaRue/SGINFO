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
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Productos",
  data() {
    return {
      productos: []
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
