<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <Loader v-if="loading"></Loader>
      <div class="row" v-else>
        <CategoryCreate @created="addNewCategory"></CategoryCreate>
        <CategoryEdit
          v-if="categories.length"
          :categories="categories"
          :key="categories.length + updateCount"
          @updated="updateCategories"
        ></CategoryEdit>
        <p class="center" v-else>Категорий пока нет</p>
      </div>
    </section>
  </div>
</template>

<script>
import CategoryCreate from "@/components/CategoryCreate";
import CategoryEdit from "@/components/CategoryEdit";
export default {
  data() {
    return {
      categories: [],
      loading: true,
      updateCount: 0,
    };
  },
  async mounted() {
    this.categories = await this.$store.dispatch("fetchCategories");
    this.loading = false;
  },
  methods: {
    addNewCategory(category) {
      this.categories.push(category);
      console.log(this.categories);
    },
    updateCategories(category) {
      const index = this.categories.findIndex((c) => c.id === category.id);
      this.categories[index].title = category.title;
      this.categories[index].limit = category.limit;
      this.updateCount++;
    },
  },
  components: {
    CategoryCreate,
    CategoryEdit,
  },
};
</script>
