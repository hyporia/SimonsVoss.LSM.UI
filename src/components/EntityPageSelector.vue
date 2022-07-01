<template>
  <div>
    <div
      v-for="entityPage in entityPages"
      :key="entityPage.id"
      class="entityPage-selector-container"
    >
      <input
        type="radio"
        :id="entityPage.id"
        :value="entityPage.id"
        :checked="currentEntityPage === entityPage.id"
        @change="setCurrentEntityType"
        name="entityPage"
        class="entityPage-selector-input"
      />
      <label :for="entityPage.id" class="entityPage-selector-label">{{
        entityPage.name
      }}</label>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  created() {},
  computed: {
    ...mapGetters(["entityPages", "currentEntityPage"]),
  },
  destroyed() {},
  mounted() {},
  data() {
    return {};
  },
  methods: {
    setCurrentEntityType(event) {
      this.$store.dispatch("setCurrentEntityType", event.target.value);
    },
  },
};
</script>

<style lang="sass" scoped>
$accentcolor: #b69d7b
.entityPage-selector-container
  position: relative
  display: block
  margin: 15px;
  .entityPage-selector-label
    display: block
    background: lighten($accentcolor, 30%)
    color: #444
    border-radius: 5px
    padding: 10px 20px
    margin-bottom: 5px
    cursor: pointer

  .entityPage-selector-input
    display: none
    &:checked + .entityPage-selector-label
      background: lighten($accentcolor, 15%)
      animation-name: blink
      animation-duration: 1s
</style>
