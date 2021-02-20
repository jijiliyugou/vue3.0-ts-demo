<template>
  <div class="home">
    {{ count }}
    <HelloWorld :message="count" @handlerMsg="handlerMsg" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide, ref } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "@/store/types";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  components: {
    HelloWorld
  },
  setup() {
    const location = ref("测试");
    const store = useStore<GlobalDataProps>();
    const count = computed(() => store.state.count);
    function handlerMsg(number: number): void {
      store.commit("add", number);
      console.log(store.state.count);
    }
    function updateLocation() {
      location.value =
        location.value === "修改后的数据" ? "测试" : "修改后的数据";
    }
    provide("location", location);
    provide("updateLocation", updateLocation);
    return {
      count,
      handlerMsg
    };
  }
});
</script>
