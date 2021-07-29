<template>
  <v-navigation-drawer app permanent dark src="@/assets/tv-tower-6139241_1920.jpg">
    <router-link to="/about" exact>
      <img src="@/assets/clouds-6352673_1920.jpg" alt="Error" width="100%" />
    </router-link>
    <v-list shaped>
      <v-list-item-group v-model="selectedMenu" mandatory color="primary">
        <v-list-item
          class="tile"
          v-for="([icon, title, route], index) in menus"
          :key="index"
          @click="onClickMenu(route)"
        >
          <v-list-item-icon>
            <v-icon color="black">{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  methods: {
    onClickMenu(link) {
      this.$router.push(link).catch(() => {});
    },
  },
  mounted() {
    this.selectedMenu = this.menus.findIndex(
      (menu) => menu[2] == this.$route.path
    );
  },
  data() {
    return {
      selectedMenu: 0,
      menus: [
        ["mdi-apps-box", "Stock", "/stock"],
        ["mdi-chart-areaspline", "Report", "/report"],
        ["mdi-apps-box", "About", "/about"],
      ],
    };
  },
  watch: {
    $route(to) {
      this.selectedMenu = this.menus.findIndex((menu) => menu[2] == to.path);
    },
  },
};
</script>

<style>


.v-list-item-group .v-list-item--active{
  color: #fff !important;
  font-weight: bold;
}

.theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled){
  opacity: 0.7;
}

.tile{
  color: white;
}

.tile:hover {
  background: lightskyblue;
}

.tile:active {
  background: lightskyblue;
}
</style>

