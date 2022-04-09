<template>


  <Password :id='props.context.id' @input='handleInput' v-model='props.context._value' :placeholder='props.context.attrs.placeholder'
             :feedback='props.context?.feedback ?? true' :toggleMask='props.context?.toggleMask ?? false'
            :class="props.context.attrs.class"/>
</template>

<script setup lang='ts'>
const props = defineProps({
  context: Object,
});

function handleInput(e: any) {
  props.context?.node.input(e.target.value);
}
</script>
