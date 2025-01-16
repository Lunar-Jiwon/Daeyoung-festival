<template>
    <div v-if="!isV">
        <div style="width: 100%; height: 1px; background: #9c9c9c; margin-top: 10px; margin-bottom: 10px"></div>
    </div>
    <div v-else>
        <div style="width: 1px; height: 100%; background: #9c9c9c; margin-left: 10px; margin-right: 10px"></div>
    </div>
</template>

<script setup>

defineProps({
  isV: {
    type:Boolean,
    default:false
  }
})

</script>