<template>

  <InputSwitch :id='props.context.id' @input='handleInput' v-model='props.context._value'
               :placeholder='props.context.attrs.placeholder' :binary="true"
               :class="props.context.attrs.class"/>
</template>

<script setup lang='ts'>
const props = defineProps({
  context: Object,
});

function handleInput(e: any) {
  props.context?.node.input(e);
}
</script>
