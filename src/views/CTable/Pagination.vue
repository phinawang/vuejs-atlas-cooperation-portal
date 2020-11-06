<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    onPageClick: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    pageItem() {
      const count = Math.ceil(this.total / 10);
      let items = [];
      for (let i = 1; i <= count; i++) {
        items.push({
          label: i,
          id: i,
        });
      }
      return items;
    },
  },
  methods: {
    onPageClickInner(p) {
      this.$emit("on-page-click", p);
    },
  },
};
</script>
<template>
  <div class="table-pagination">
    <span
      v-for="item in pageItem"
      :key="item.id"
      @click="() => onPageClickInner(item.id)"
    >
      {{ item.label }}
    </span>
  </div>
</template>
<style lang="scss" scoped>
.table-pagination {
  margin: 12px 0;
  span {
    display: inline-block;
    width: 12px;
    height: 24px;
    padding: 0 4px;
    cursor: pointer;
    color: lightsalmon;
    text-decoration: underline;
  }
}
</style>