<template>
  <v-app-bar app color="light-green">
    <v-toolbar flat="flat" color="light-green">
      <v-toolbar-title>#Logo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/" text color="white">Domov</v-btn>
        <v-btn to="/cases" text color="white">Prípady</v-btn>
      </v-toolbar-items>
      <v-divider class="mx-4" inset vertical></v-divider>
      <v-btn color="lime lighten-2" to="/new-case">
        <v-icon dark left>mdi-plus</v-icon>Nový prípad
      </v-btn>
    </v-toolbar>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MyHeader extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
