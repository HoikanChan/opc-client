<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import WebSocket  from 'ws' 
export default {
  name: "system-info",
  data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
    },
    mounted(){
      const ws = new WebSocket(config.wsHost);
      ws.on('message', function incoming(data) {
        console.log(data);
      });
    }
};
</script>
