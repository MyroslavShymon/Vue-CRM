<template>
  <div>
    <Loader v-if="loading"></Loader>
    <div class="app-main-layout" v-else>
      <Navbar @click="isOpen = !isOpen"></Navbar>
      <Sidebar :isOpen="isOpen"></Sidebar>
      <main class="app-content" :class="{ full: !isOpen }">
        <div class="app-page">
          <router-view></router-view>
        </div>
      </main>
      <FixedButton></FixedButton>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
import Sidebar from "@/components/app/Sidebar";
import FixedButton from "@/components/app/FixedButton";
export default {
  name: "main-layout",
  data() {
    return {
      isOpen: true,
      loading: true,
    };
  },
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
    }
    this.loading = false;
  },
  components: {
    Navbar,
    Sidebar,
    FixedButton,
  },
};
</script>
