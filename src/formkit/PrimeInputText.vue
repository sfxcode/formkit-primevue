<template>
    <span :class='spanClass()'>
                <i v-if='hasLeftIcon()' :class='props.context.iconLeft'/>

  <InputText :id='props.context.id' @input='handleInput' v-model='props.context._value'
             :placeholder='props.context.attrs.placeholder'
             :class="props.context.attrs.class"/>
          <i v-if='hasRightIcon' :class='props.context.iconRight'/>
    </span>
</template>

<script setup lang='ts'>
const props = defineProps({
  context: Object,
});

const hasLeftIcon = () => {
  return props.context?.iconLeft && props.context?.iconLeft.length > 0;
};

const hasRightIcon = () => {
  return props.context?.iconRight && props.context?.iconRight.length > 0;
};

const spanClass = () => {
  let result = '';
  if (hasLeftIcon())
    result = result + 'p-input-icon-left ';
  if (hasRightIcon())
    result = result + 'p-input-icon-right ';
  return result;
};

function handleInput(e: any) {
  props.context?.node.input(e.target.value);
}
</script>
