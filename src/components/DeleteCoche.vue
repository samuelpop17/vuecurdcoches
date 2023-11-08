<template>
  <div><h1>Delete </h1></div>
</template>

<script>
import ServiceCoches from "./../services/ServiceCoches";
const service = new ServiceCoches();
export default {
name:"DeleteCoche",
mounted(){
    var id=this.$route.params.id
service.DeleteCoche(id).then(result=>{
    console.log(result)
    this.$router.push("/")
})
}
}
</script>

<style>

</style>