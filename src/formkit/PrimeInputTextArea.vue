<template>

  <Textarea :id='props.context.id' @input='handleInput' v-model='props.context._value'
                      :placeholder='props.context.attrs.placeholder'  :rows="rows()"/>
</template>

<script setup lang='ts'>
const props = defineProps({
  context: Object,
});

const rows = () => {
  if (props.context?.rows)
    return props.context?.rows
  else
    return 5;
};

function handleInput(e: any) {
  console.log(e.target.value);
  props.context?.node.input(e.target.value);
}
</script>
