<template>
  <div>
    <h1>CRUD Coches</h1>
    <img src="./../assets/images/loading.gif" alt="" v-if="status == false" />

    <table v-else class="table table-bordered">
      <thead>
        <tr>
          <th>Id Coche</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coche in coches" :key="coche">
          <td>{{ coche.idCoche }}</td>
          <td>{{ coche.marca }}</td>
          <td>{{ coche.modelo }}</td>
          <td>
            <router-link
              class="btn btn-info"
              :to="'/detalles/' + coche.idCoche"
            >
              Detalles
            </router-link>
            <router-link class="btn btn-danger" :to="'/delete/'+coche.idCoche">
              Delete Coche
            </router-link>
            <router-link class="btn btn-warning" :to="'/modificar/'+coche.idCoche">
              Modificar Coche
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceCoches from "./../services/ServiceCoches";

const service = new ServiceCoches();

export default {
  name: "PrincipalCoches",
  mounted() {
    service.getCoches().then((result) => {
      this.coches = result;
      this.status = true;
    });
  },
  data() {
    return {
      coches: [],
      status: false,
    };
  },
};
</script>

<style>
</style>