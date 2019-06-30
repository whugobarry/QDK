<template>
  <div id="app">
    <router-view name="login"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
   var code = this.ajax('user/register',{
      mobile:"17600740311",
      invitation_code:"123456",
      password:"wang0426",
      code:'1'
    }).then((data)=>{
      console.log(data)
      this.$dialog.alert({
        message:data.msg
      })
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
