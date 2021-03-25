<template>
  <div class="app-main-layout">
    <Navbar @click="isOpen = !isOpen"></Navbar>
    <Sidebar :isOpen="isOpen"></Sidebar>
    <main class="app-content" :class="{ full: !isOpen }">
      <div class="app-page">
        <router-view></router-view>
      </div>
    </main>
    <FixedButton></FixedButton>
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
    };
  },
  components: {
    Navbar,
    Sidebar,
    FixedButton,
  },
};
</script>
