<template>
  <v-app>
    <MyHeader></MyHeader>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyHeader from '@/components/MyHeader.vue'; // @ is an alias to /src

@Component({
  components: {
    MyHeader,
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">

</style>
