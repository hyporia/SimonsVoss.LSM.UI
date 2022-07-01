<template>
  <div class="container">
    <div>
      <div class="entities-list">
        <div class="list-item" v-for="(medium, index) in media" :key="index">
          <div class="list-item-type">Type: {{ medium.type }}</div>
          <div class="list-item-name">Owner: {{ medium.owner }}</div>
          <div class="list-item-name">Serial No: {{ medium.serialNumber }}</div>
          <div v-if="medium.description" class="list-item-description">
            Description: {{ medium.description || "None" }}
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
    ...mapGetters(["media"]),
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
