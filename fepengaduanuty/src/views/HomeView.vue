<template>
  <div>
    <SideBar :isSide="isSide" @toggleSide="toggleSide" />
    <div
      class="main-content w-auto ml-56 bg-[#f6f7ff] ease-in duration-300 p-[20px] flex gap-4"
      :class="{ 'ml-[50px]': isSide }"
    >
      <div
        class="tabel-content-aduan bg-[white] rounded-md p-3 grow-[2] shadow-sm"
      >
        <h2 class="mb-2">Pengaduan Terbaru</h2>
        <table
          class="table-aduan w-full border-collapse bg-white text-left text-sm text-gray-500"
        >
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="border border-gray-300 px-4 py-3 font-medium text-gray-900"
              >
                #
              </th>
              <th
                scope="col"
                class="border border-gray-300 px-4 py-3 font-medium text-gray-900"
              >
                ID
              </th>
              <th
                scope="col"
                class="border border-gray-300 px-4 py-3 font-medium text-gray-900"
              >
                Nama
              </th>
              <th
                scope="col"
                class="border border-gray-300 px-4 py-3 font-medium text-gray-900"
              >
                Aduan
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="border border-gray-300 px-4 py-3">1</td>
              <td class="border border-gray-300 px-4 py-3">#1</td>
              <td class="border border-gray-300 px-4 py-3">candra</td>
              <td class="border border-gray-300 px-4 py-3">
                Ini contoh aduan....
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-3">2</td>
              <td class="border border-gray-300 px-4 py-3">#1</td>
              <td class="border border-gray-300 px-4 py-3">candra</td>
              <td class="border border-gray-300 px-4 py-3">
                Ini contoh aduan....
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-3">3</td>
              <td class="border border-gray-300 px-4 py-3">#1</td>
              <td class="border border-gray-300 px-4 py-3">candra</td>
              <td class="border border-gray-300 px-4 py-3">
                Ini contoh aduan....
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="total-aduan-mahasiswa grow-[0]">
        <div
          class="total-aduan bg-white mb-2 rounded-md text-center overflow-hidden shadow-sm"
        >
          <h2 class="bg-[#F6F5F5] p-5 text-[#787878]">Total Aduan</h2>
          <h1
            class="h-[100px] flex-grow flex justify-center items-center text-[#787878] text-[50px]"
          >
            20
          </h1>
        </div>
        <div
          class="total-mahasiswa bg-white rounded-md text-center overflow-hidden shadow-sm"
        >
          <h2 class="bg-[#F6F5F5] p-5 text-[#787878]">Total Mahasiswa</h2>
          <h1
            class="h-[100px] flex-grow flex justify-center items-center text-[#787878] text-[50px]"
          >
            54
          </h1>
        </div>
      </div>
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
