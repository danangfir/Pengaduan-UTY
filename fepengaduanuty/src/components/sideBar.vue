<template>
  <div>
    <div
      class="sidebar w-56 h-screen fixed top-0 left-0 bg-[white] shadow-[#eaeff9] shadow-xl float-left ease-in duration-300"
      :class="{ sideActive: isSide }"
    >
      <header class="p-9">
        <img class="w-10" src="../assets/logo/uty.png" alt="" />
      </header>
      <nav class="navbar w-full p-3">
        <ul class="text-[#5A5A5A] text-[19px] cursor-pointer">
          <li
            class="mb-5 p-2 pl-5 hover:bg-[#f6f7ff] rounded-sm"
            :class="{ 'pl-0 ease-in duration-300': isSide }"
          >
            {{ isSide ? "🔊" : "Utama" }}
          </li>
          <li
            class="p-2 pl-5 hover:bg-[#f6f9ff] rounded-sm"
            :class="{ 'pl-0 ease-in duration-300': isSide }"
          >
            {{ isSide ? "📢" : "Aduan" }}
          </li>
        </ul>
      </nav>
    </div>
    <div
      class="bar static flex justify-between p-4 ml-[224px] bg-[white] shadow-[#eaeff9] shadow-md ease-in duration-300"
      :class="{ sideActive: isSide }"
    >
      <div class="side cursor-pointer" @click="toggleSide">
        <i class="bi bi-list text-[25px]"></i>
      </div>

      <div class="profil" @click="popUpLogout">
        <div class="img-profil w-10 cursor-pointer">
          <img class="rounded-full" src="../assets/img/profil.jpg" alt="" />
        </div>
      </div>

      <div
        class="logout absolute right-5 top-[80px] bg-[white] p-5 rounded-md shadow-sm ease-in duration-300"
        :class="{ block: isboxLogout, hidden: !isboxLogout }"
      >
        <a href="#">Logout</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      isSide: false,
      isboxLogout: false,
    };
  },
  methods: {
    toggleSide() {
      this.isSide = !this.isSide;
      this.$emit("toggleSide");
    },
    popUpLogout() {
      this.isboxLogout = !this.isboxLogout;
    },
  },
};
</script>

<style>
.sidebar.sideActive {
  width: 60px;
}
.bar.sideActive {
  margin-left: 60px;
}
</style>
