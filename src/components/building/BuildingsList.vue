<template>
  <div class="container">
    <div>
      <div class="entities-list">
        <div
          class="list-item"
          v-for="(building, index) in buildings"
          :key="index"
        >
          <div class="list-item-name">Name: {{ building.name }}</div>
          <div class="list-item-shortcut">
            Short Cut: {{ building.shortCut }}
          </div>
          <div class="list-item-description">
            Description: {{ building.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  created() {},
  computed: {
    ...mapGetters(["buildings"]),
  },
  destroyed() {},
  mounted() {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="sass" scoped>
.entities-list
  .list-item
    margin-top: 20px
</style>
