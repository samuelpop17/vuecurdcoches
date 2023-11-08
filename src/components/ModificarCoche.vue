<template>
  <div>
    <h1>Modificar Coche</h1>

    <form
      v-on:submit.prevent="modificarCoche()"
      style="width: 500px; margin: 0 auto"
    >
      <label>Id Coche</label>
      <input type="number" class="form-control" v-model="coche.idCoche" />
      <label>Marca</label>
      <input type="text" class="form-control" v-model="coche.marca" />
      <label>Modelo</label>
      <input type="text" class="form-control" v-model="coche.modelo" />
      <label>Conductor</label>
      <input type="text" class="form-control" v-model="coche.conductor" />
      <label>Imagen</label>
      <input type="text" class="form-control" v-model="coche.imagen" />
      <button class="btn btn-info">Modificar</button>
    </form>
  </div>
</template>

<script>
import ServiceCoches from "./../services/ServiceCoches";

const service = new ServiceCoches();
export default {
  name: "CreateCoche",
  data() {
    return {
      coche: {
        idCoche: 0,
        marca: "",
        modelo: "",
        conductor: "",
        imagen: "",
      },
    };
  },
  methods: {
    modificarCoche() {

        service.updateCoche(this.coche).then(result=>{
            console.log(result)
            this.$router.push("/");
        })
    },
  },
  mounted() {
    var id=this.$route.params.id
    service.getCochesDetalles(id).then((result) => {
      this.coche = result;
      this.status=true
    });
  },
  
};
</script>

<style>
</style>