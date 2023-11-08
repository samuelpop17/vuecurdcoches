<template>
  <div><h1>Detalles</h1>
      <img src="./../assets/images/loading.gif" alt="" v-if="status == false" />

    <ul class="">

        <li>{{coche.idCoche}}</li>
        <li>{{coche.marca}}</li>
        <li>{{coche.modelo}}</li>
        <li>{{coche.conductor}}</li>
        <li><img :src="coche.imagen" alt=""></li>

    </ul>
  </div>
</template>

<script>
import ServiceCoches from './../services/ServiceCoches';

const service = new ServiceCoches();

export default {
  name: "DetallesCoche",
  mounted() {
    var id=this.$route.params.id
    service.getCochesDetalles(id).then((result) => {
      this.coche = result;
      this.status=true
    });
  },
  data(){
    return{
      coche:[],
      status:false
    }
  }
};
</script>

<style>

</style>