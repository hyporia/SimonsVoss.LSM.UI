<template>
  <div class="container">
    <div>
      <div class="entities-list">
        <div class="list-item" v-for="(group, index) in groups" :key="index">
          <div class="list-item-name">Name: {{ group.name }}</div>
          <div v-if="group.description" class="list-item-description">
            Description: {{ group.description }}
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
    ...mapGetters(["groups"]),
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
