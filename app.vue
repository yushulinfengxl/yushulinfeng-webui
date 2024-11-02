<template>
  <div id="app">
    <NuxtRouteAnnouncer />
    <YushuHeader>
      Header ...
    </YushuHeader>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <YushuFooter>
      Footer ...
    </YushuFooter>
  </div>
</template>

<script lang="js" setup>
if (process.client) {
  // customInit()
}
// import {} from "@/custom-element/test"
// onMounted(() => {
//   // customElementInit()
//   console.log(process.client, "jjj");
// import {customElementInit  } from "@/custom-element/index"
// })
</script>
