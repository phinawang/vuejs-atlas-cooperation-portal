<script>
import { getFactsRandom } from "../../apis/index";
import Pagination from "./Pagination";
export default {
  components: { Pagination },
  data() {
    return {
      dataList: [],
      currentPage: 1,
    };
  },
  computed: {
    renderData() {
      const start = (this.currentPage - 1) * 10;
      const end = start + 10;
      return this.dataList.slice(start, end);
    },
  },
  async mounted() {
    const res = await getFactsRandom();
    this.dataList = res.data;
  },
  methods: {
    onPageClick(p) {
      this.currentPage = p;
    },
  },
};
</script>
<template>
  <div class="table-container">
    <table class="pure-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Fact</th>
          <th>Updated</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="renderData.length > 0">
          <tr v-for="item in renderData" :key="item._id">
            <td>{{ item.type }}</td>
            <td>{{ item.text }}</td>
            <td>{{ item.updatedAt }}</td>
            <td>{{ item.createdAt }}</td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td colspan="4">No Data</td>
          </tr>
        </template>
      </tbody>
    </table>
    <Pagination
      :total="dataList.length"
      :currentPage="currentPage"
      @on-page-click="onPageClick"
    />
  </div>
</template>
<style scss scoped>
.table-container {
  width: 100%;
  font-size: 12px;
}
table {
  width: 100%;
}
</style>