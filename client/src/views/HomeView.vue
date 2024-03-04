<template>
  <div>
    <SideBar :isSide="isSide" @toggleSide="toggleSide" />
    <div
      class="main-content w-auto ml-56 bg-[#f6f7ff] ease-in duration-300"
      :class="{ 'ml-[50px]': isSide }"
    >
      <h1>content</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from "@/components/sideBar.vue";

export default {
  name: "HomeView",
  components: {
    SideBar,
  },
  data() {
    return {
      isSide: false,
    };
  },
  methods: {
    toggleSide() {
      this.isSide = !this.isSide;
    },
  },
};
</script>
