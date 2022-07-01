<template>
  <div class="container">
    <div>
      <div class="entities-list">
        <div class="list-item" v-for="(lock, index) in locks" :key="index">
          <div class="list-item-type">Type: {{ lock.type }}</div>
          <div class="list-item-name">Name: {{ lock.name }}</div>
          <div class="list-item-name">Serial No: {{ lock.serialNumber }}</div>
          <div class="list-item-name">Floor: {{ lock.floor }}</div>
          <div class="list-item-name">Room No: {{ lock.roomNumber }}</div>
          <div v-if="lock.description" class="list-item-description">
            Description: {{ lock.description || "None" }}
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
    ...mapGetters(["locks"]),
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
