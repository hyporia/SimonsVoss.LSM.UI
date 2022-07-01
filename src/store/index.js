import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import config from "../config.json";
import { ENTITY_TYPES } from "../constants/entityTypes";
import api from "../api/api";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {},
  state: {
    currentEntityPage: null,
    entityPages: [
      { name: "Buildings", id: ENTITY_TYPES.BUILDING },
      { name: "Locks", id: ENTITY_TYPES.LOCK },
      { name: "Groups", id: ENTITY_TYPES.GROUP },
      { name: "Media", id: ENTITY_TYPES.MEDIUM },
    ],
    isLoading: false,
    term: null,
    buildings: [],
    media: [],
    locks: [],
    groups: [],
  },
  mutations: {
    SET_TERM: (state, term) => {
      state.term = term;
    },
    SET_CURRENT_ENTITY_TYPE: (state, entityType) => {
      state.currentEntityPage = entityType;
    },
    SET_IS_LOADING: (state, isLoading) => {
      state.isLoading = isLoading;
    },
    SET_BUILDINGS: (state, buildings) => {
      state.buildings = buildings;
    },
    SET_LOCKS: (state, locks) => {
      state.locks = locks;
    },
    SET_GROUPS: (state, groups) => {
      state.groups = groups;
    },
    SET_MEDIA: (state, media) => {
      state.media = media;
    },
  },
  actions: {
    setCurrentEntityType: (context, entityType) => {
      context.commit("SET_CURRENT_ENTITY_TYPE", entityType);
      context.commit("SET_TERM", null);
      context.dispatch("loadEntities");
    },
    setIsLoading: (context, isLoading) => {
      context.commit("SET_IS_LOADING", isLoading);
    },
    loadEntities: (context) => {
      switch (context.state.currentEntityPage) {
        case ENTITY_TYPES.BUILDING:
          context.dispatch("getBuildings");
          break;
        case ENTITY_TYPES.GROUP:
          context.dispatch("getGroups");
          break;
        case ENTITY_TYPES.LOCK:
          context.dispatch("getLocks");
          break;
        case ENTITY_TYPES.MEDIUM:
          context.dispatch("getMedia");
          break;
      }
    },
    getBuildings: async (context) => {
      const buildings = await api.getBuildings(context.state.term);
      context.commit("SET_BUILDINGS", buildings);
    },
    getLocks: async (context) => {
      const locks = await api.getLocks(context.state.term);
      context.commit("SET_LOCKS", locks);
    },
    getGroups: async (context) => {
      const groups = await api.getGroups(context.state.term);
      context.commit("SET_GROUPS", groups);
    },
    getMedia: async (context) => {
      const media = await api.getMedia(context.state.term);
      context.commit("SET_MEDIA", media);
    },
    setTerm: (context, term) => {
      context.commit("SET_TERM", term);
    },
  },
  getters: {
    currentEntityPage: (state) => state.currentEntityPage,
    isLoading: (state) => state.isLoading,
    entityPages: (state) => state.entityPages,
    buildings: (state) => state.buildings,
    media: (state) => state.media,
    groups: (state) => state.groups,
    locks: (state) => state.locks,
    term: (state) => state.term,
  },
});
