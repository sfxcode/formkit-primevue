<template>
  <span class="formkit-prime-left" v-if="props.context.attrs.labelLeft" >{{ props.context.attrs.labelLeft }}</span>
  <Checkbox :id='props.context.id' @input='handleInput' v-model='props.context._value'
            :placeholder='props.context.attrs.placeholder' :binary="true"
            :class="props.context.attrs.class"/>
  <span class="formkit-prime-right" v-if="props.context.attrs.labelRight" >{{ props.context.attrs.labelRight }}</span>
</template>

<script setup lang='ts'>
const props = defineProps({
  context: Object,
});

function handleInput(e: any) {
  props.context?.node.input(e);
}
</script>
