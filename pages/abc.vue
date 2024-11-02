<template>
  <!-- 直接从 store 中访问 state -->
   <div>
    <!-- {{ foo }} -->
      <xl-el />
    {{ store.count }}
   </div>
</template>

<!-- <script setup>
const foo = useFoo()
</script> -->

<script setup>
import { useCounterStore } from "@/stores/count"

const store = useCounterStore()

if (process.client) {
  console.log(MyElement);
  
}
</script>