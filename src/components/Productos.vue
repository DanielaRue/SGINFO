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

    <div class="shadow-sm p-3 mb-5 m-3 bg-white rounded">
      <div>
        <b-table striped hover :items="productos"></b-table>
        <b-button pill class="ubication mt-3" variant="outline-success" v-on:click="isAdding = !isAdding">
          Agregar Producto
        </b-button>
      </div>

      <div class="shadow-sm p-2 mb-5 m-4 bg-white rounded form">
        <b-form class="ml-2" v-if="isAdding" @submit.prevent="processForm">
          <b-form-group label="Nombre" label-for="nombre">
            <b-form-input
              id="nombre"
              placeholder="Nombre del producto"
              v-model="nuevoProducto.nombre"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Descripción" label-for="descripcion">
            <b-form-input
              id="descripcion"
              placeholder="Descripción del producto"
              v-model="nuevoProducto.descripcion"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Cantidad" label-for="cantidad">
            <b-form-input
              id="cantidad"
              v-model="nuevoProducto.cantidad"
              type="number"
              min="0"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Precio" label-for="precio">
            <b-form-input
              id="precio"
              v-model="nuevoProducto.precio"
              type="number"
              min="0"
              required
            ></b-form-input>
          </b-form-group>

          <!-- <b-form-group label="Costo:" label-for="costo">
            <b-form-input
              id="costo"
              v-model="nuevoProducto.costo"
              type="number"
              required
            ></b-form-input>
          </b-form-group> -->
        
          <b-button pill class="ubication_button mt-2" type="submit" variant="outline-primary">
            Enviar
          </b-button>
        </b-form>
      </div>
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
      isAdding: false,
      nuevoProducto: {
        nombre: "",
        descripcion: "",
        cantidad: 0,
        precio: 0
        // costo: 0,
      }
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
      return axios.get("https://sixginfo-rest-api.herokuapp.com/productos");
    },
    processForm() {
      axios
        .post(
          "https://sixginfo-rest-api.herokuapp.com/productos",
          this.nuevoProducto
        )
        .then(dbProduct => {
          this.productos = [...this.productos, dbProduct.data];
          this.isAdding = !this.isAdding;
        })
        .catch(err => console.log(err.message));
    }
  }
};
</script>
<style>
  .ubication{
    margin-left: 900px;
    width:180px;
  }
  .ubication_button{
    margin-left: 900px;
    width:100px;
  }
</style>
