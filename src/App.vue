<template>
  <div id="app">
    <div class="d-flex">

      <div class="shadow-sm p-1 rounded sidebar">
        <div>
          <div>
            <b-button-group vertical class="menu my-5">
              <b-button v-on:click="client" class="menu text-left">
                <b-icon icon="person" aria-hidden="true"></b-icon>
                Clientes
              </b-button>
              <b-button v-on:click="produc" class="menu text-left">
                <b-icon icon="bag" aria-hidden="true"></b-icon>
                Productos
              </b-button>
              <b-button v-on:click="repor" class="menu text-left">
                <b-icon icon="graph-up" aria-hidden="true"></b-icon>
                Reporte
              </b-button>
            </b-button-group>
          </div>
        </div>
      </div>

      <div class="custom">
        <div class="main-component">
          <router-view></router-view>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},
    methods: {

      client: function(){
        if(this.$route.name != "clientes"){
          let username = localStorage.getItem("current_username")
          this.$router.push({name: "clientes"})
        }
      },
      produc: function(){
        if(this.$route.name != "productos"){
          let username = localStorage.getItem("current_username")
          this.$router.push({name: "productos"})
        }
      },
      repor: function(){
        if(this.$route.name != "reporte"){
          let username = localStorage.getItem("current_username")
          this.$router.push({name: "reporte"})
        }
      }
    }
  }
</script>

<style>
  body{
    margin: 0 0 0 0;
  }
  .d-flex{
    margin:0 0 0 0;
    display: flex;
  }
  .sidebar{
    width: 210px;
    height: 100vh;
    background-color: #031926;
    color:#f9f9fa;
  }
  .btn-secondary:hover {
    color: #fff;
    background-color:#254D58;
    border-color:#254D58;
    width: 200px;
  }
  .menu{
    width: 200px;
    background-color: #031926;
    border-color: #031926;
  }
  .custom{
    flex-grow: 1;
  }

</style>