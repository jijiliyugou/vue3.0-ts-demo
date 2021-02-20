<template>
  <div class="about">
    <h1>{{ store.state.number }}</h1>
    <button @click="handlerMsg">点击</button>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useStore } from "vuex";
import { GlobalDataProps } from "@/store/types";
@Options({
  components: {}
})
export default class Home extends Vue {
  store = useStore<GlobalDataProps>();
  handlerMsg(): void {
    this.store.commit("addNumber");
  }
}
</script>
