<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const configStore = useConfigStore()
await useAsyncData('config', () => configStore.getEnv())
</script>
