<template>
  <div class="container">
    <div class="sidebar">
      <EntityPageSelector />
    </div>
    <div class="content">
      <SearchBar />
      <div class="content-search-results">
        <Preloader v-if="isLoading" />
        <div v-else>
          <div v-if="currentEntityPage == ENTITY_TYPES.BUILDING">
            <BuildingList />
          </div>
          <div v-if="currentEntityPage == ENTITY_TYPES.GROUP">
            <GroupsList />
          </div>
          <div v-if="currentEntityPage == ENTITY_TYPES.LOCK">
            <LocksList />
          </div>
          <div v-if="currentEntityPage == ENTITY_TYPES.MEDIUM">
            <MediaList />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Preloader from "./Preloader.vue";
import EntityPageSelector from "./EntityPageSelector.vue";
import BuildingList from "./building/BuildingsList.vue";
import LocksList from "./lock/LocksList.vue";
import GroupsList from "./group/GroupsList.vue";
import MediaList from "./medium/MediaList.vue";
import SearchBar from "./search/SearchBar.vue";
import { mapGetters } from "vuex";
import { ENTITY_TYPES } from "../constants/entityTypes";
export default {
  components: {
    Preloader,
    EntityPageSelector,
    BuildingList,
    SearchBar,
    LocksList,
    GroupsList,
    MediaList,
  },
  created() {
    this.$store.dispatch("setCurrentEntityType", ENTITY_TYPES.BUILDING);
  },
  computed: {
    ...mapGetters(["isLoading", "currentEntityPage"]),
    term: {
      set(value) {
        this.$store.dispatch("setTerm", value);
      },
      get() {
        return this.$store.state.term;
      },
    },
  },
  destroyed() {},
  mounted() {},
  data() {
    return { ENTITY_TYPES };
  },
  methods: {},
};
</script>

<style lang="sass" scoped>
.container
  display: flex
  .sidebar
    max-width: 300px
  .content
    width: 100%
    display: flex
    flex-direction: column
    margin: 15px
    align-items: center
    .content-search-results
      margin-top: 15px
</style>
