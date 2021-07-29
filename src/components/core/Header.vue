<template>
  <div>
    <v-app-bar app color="primary" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Home Screen V{{ version }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <span>{{ $store.getters["username"] | capitalize }}</span>
      <v-btn icon @click="onClickLogOff"><v-icon>mdi-export</v-icon></v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  named: "Header",
  props: [],
  mounted() {},
  computed: {
    version() {
      return "1.0";
    },
  },
  methods: {
    onClickLogOff() {
      this.$store.dispatch("doLogout");
    },
  },
};
</script>

<style></style>
