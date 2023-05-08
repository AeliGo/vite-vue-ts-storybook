<template>
  <div class="header">
    <div class="title">{{ newType }}</div>
    <div class="go-github" @click="goGitHub">
      <i class="icon el-icon-s-promotion"></i> GitHub
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, reactive } from "vue";

const props = defineProps<{
  type?: string;
}>();

const { newType } = reactive<{
  newType: string;
}>({
  newType: props.type || "",
});

function goGitHub() {
  window.open("https://github.com");
}
</script>
