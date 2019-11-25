<template>
  <div class="hello">
    <img src="../assets/vortex.jpeg">
    <div class="text">{{msg}}</div>
    <vp-button @click="onClick" type="primary" class="button-item">组件库</vp-button>
  </div>
</template>

<script>
import { Button } from 'vortex-pc';
export default {
  name: 'HelloPcTemplate',
  components: {
    [Button.name]: Button,
  },
  methods: {
    onClick() {
      window.location.href = 'http://vortex.zj.chinamobile.com/pccomponents';
    },
  },
  data() {
    return {
      msg: 'Welcome to vortex',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: center;
}
img {
  width: 200px;
  text-align: center;
  padding-top: 100px;
}
.text {
  margin-top: 100px;
  text-align: center;
  font-size: 32px;
}
.button-item {
  margin-top: 50px;
}
</style>
