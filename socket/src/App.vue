<template>
  <div id="app">
    <input 
    type="text" 
    name="" 
    v-model="inputCtx"
    class="inputClass" 
    >
    <mybutton 
    :btnName="btnName"
    @handleClick="handleFunc"
    />
    <p>{{serverData}}</p>
  </div>
</template>

<script>
import mybutton from './components/mybutton'

export default {
  name: 'App',
  components: {
    mybutton
  },
  data () {
    return {
      inputCtx:'',
      btnName:'发送',
      serverData:''
    }
  },
  methods:{
    handleFunc(){
      const that = this
      let ws = new WebSocket('ws://localhost:3000')
      ws.addEventListener('open',()=>{
        ws.send(that.inputCtx)
      })
      ws.onmessage = (msg)=>{
        that.serverData+=msg.data
      }
      
    }
  }
}
</script>

<style scoped>
  #app{
    margin-top: 100px;
  }
  .inputClass{
    width: 100%;
    border:1px solid black;
  }

</style>
