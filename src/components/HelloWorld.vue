<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <button @click="handlerMsg">修改message</button>
    {{ location }}
    <button @click="updateUserLocation">点击发送事件</button>
  </div>
</template>

<script lang="ts">
import { Data, SetupContext } from "@/store/types";
import { defineComponent, inject, reactive, toRefs } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    message: {
      type: Number,
      required: true
    }
  },
  setup(props: Data, context: SetupContext) {
    const data = reactive({
      updateUserLocation: inject("updateLocation"),
      location: inject("location"),
      handlerMsg(): void {
        context.emit("handlerMsg", props.message);
      }
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang="scss"></style>
