<script setup lang='ts'>
function redirectToGithub() {
  window.open('https://github.com/sfxcode/formkit-primevue', '_blank')
}

function redirectToFormKit() {
  window.open('https://formkit.com/', '_blank')
}

function redirectToPrimeVue() {
  window.open('https://primevue.org', '_blank')
}

function redirectToDocs() {
  window.open('https://sfxcode.github.io/formkit-primevue/', '_blank')
}

const items = ref([
  {
    label: 'Demo -> ',
    class: '',
  },
  {
    label: 'Components',
    icon: 'pi pi-box',
    class: 'ml-2',
    items: [
      [
        {
          label: 'Edit',
          items: [
            { label: 'InputText', icon: 'pi pi-fw pi-user-edit', route: '/inputs/inputText' },
            { label: 'Textarea', icon: 'pi pi-fw pi-user-edit', route: '/inputs/textArea' },
            { label: 'InputNumber', icon: 'pi pi-fw pi-user-edit', route: '/inputs/inputNumber' },
            { label: 'InputOtp', icon: 'pi pi-fw pi-user-edit', route: '/inputs/inputOtp' },
            { label: 'InputMask', icon: 'pi pi-fw pi-user-edit', route: '/inputs/inputMask' },
            { label: 'DatePicker', icon: 'pi pi-fw pi-user-edit', route: '/inputs/datePicker' },
            { label: 'Editor', icon: 'pi pi-fw pi-user-edit', route: '/inputs/editor' },
            { label: 'Password', icon: 'pi pi-fw pi-user-edit', route: '/inputs/password' },
          ],
        },
      ],
      [
        {
          label: 'Select',
          items: [
            { label: 'CascadeSelect', icon: 'pi pi-fw pi-user-edit', route: '/inputs/cascadeSelect' },
            { label: 'Select', icon: 'pi pi-fw pi-user-edit', route: '/inputs/select' },
            { label: 'Listbox', icon: 'pi pi-fw pi-user-edit', route: '/inputs/listbox' },
            { label: 'MultiSelect', icon: 'pi pi-fw pi-user-edit', route: '/inputs/multiSelect' },
            { label: 'RadioButton', icon: 'pi pi-fw pi-user-edit', route: '/inputs/radioButton' },
            { label: 'SelectButton', icon: 'pi pi-fw pi-user-edit', route: '/inputs/selectButton' },
            { label: 'ToggleButton', icon: 'pi pi-fw pi-user-edit', route: '/inputs/toggleButton' },
            { label: 'TreeSelect', icon: 'pi pi-fw pi-user-edit', route: '/inputs/treeSelect' },
          ],
        },
      ],
      [
        {
          label: 'Check',
          items: [
            { label: 'Checkbox', icon: 'pi pi-fw pi-user-edit', route: '/inputs/checkBox' },
            { label: 'ToggleSwitch', icon: 'pi pi-fw pi-user-edit', route: '/inputs/toggleSwitch' },
          ],
        },
      ],
      [
        {
          label: 'Misc',
          items: [
            { label: 'AutoComplete', icon: 'pi pi-fw pi-user-edit', route: '/inputs/autoComplete' },
            { label: 'ColorPicker', icon: 'pi pi-fw pi-user-edit', route: '/inputs/colorPicker' },
            { label: 'Knob', icon: 'pi pi-fw pi-user-edit', route: '/inputs/knob' },
            { label: 'Slider', icon: 'pi pi-fw pi-user-edit', route: '/inputs/slider' },
            { label: 'Rating', icon: 'pi pi-fw pi-user-edit', route: '/inputs/rating' },
          ],
        },
      ],
    ],
  },
  {
    label: 'More',
    icon: 'pi pi-box',
    class: 'ml-2',
    items: [
      [
        {
          label: 'Output Components',
          items: [
            { label: 'Output Text', icon: 'pi pi-fw pi-user-edit', route: '/outputs/outputText' },
            { label: 'Output Number', icon: 'pi pi-fw pi-user-edit', route: '/outputs/outputNumber' },
            { label: 'Output Date', icon: 'pi pi-fw pi-user-edit', route: '/outputs/outputDate' },
            { label: 'Output Link', icon: 'pi pi-fw pi-user-edit', route: '/outputs/outputLink' },
            { label: 'Output List', icon: 'pi pi-fw pi-user-edit', route: '/outputs/outputList' },
            { label: 'Output Boolean', icon: 'pi pi-fw pi-user-edit', route: '/outputs/outputBoolean' },
            { label: 'Output Duration', icon: 'pi pi-fw pi-user-edit', route: '/outputs/outputDuration' },
            { label: 'Output Reference', icon: 'pi pi-fw pi-user-edit', route: '/outputs/outputReference' },
          ],
        },
      ],
      [
        {
          label: 'Styling',
          items: [
            { label: 'Basic', icon: 'pi pi-fw pi-user-edit', route: '/styling/base' },
            { label: 'Pass Through', icon: 'pi pi-fw pi-user-edit', route: '/styling/passThrough' },
            { label: 'FormKit Class', icon: 'pi pi-fw pi-user-edit', route: '/styling/class' },
            { label: 'Grid', icon: 'pi pi-fw pi-user-edit', route: '/styling/grid' },
            { label: 'Horizontal', icon: 'pi pi-fw pi-user-edit', route: '/styling/horizontal' },
          ],
        },
      ],
      [
        {
          label: 'Data',
          items: [
            { label: 'Edit', icon: 'pi pi-fw pi-user-edit', route: '/data/edit' },
            { label: 'View', icon: 'pi pi-fw pi-user-edit', route: '/data/view' },
            { label: 'Without Schema', icon: 'pi pi-fw pi-user-edit', route: '/data/withoutSchema' },
            { label: 'Slots', icon: 'pi pi-fw pi-user-edit', route: '/data/slots' },
          ],
        },
        {
          label: 'Samples',
          items: [
            { label: 'Repeater', icon: 'pi pi-fw pi-user-edit', route: '/samples/repeater' },
            { label: 'Input Editor', icon: 'pi pi-fw pi-user-edit', route: '/samples/inputEditor' },
            { label: 'Form Editor', icon: 'pi pi-fw pi-user-edit', route: '/samples/formEditor' },
            { label: 'MultiStep', icon: 'pi pi-fw pi-user-edit', route: '/samples/multiStep' },
          ],
        },
      ],
    ],
  },

])
</script>

<template>
  <nav class="pb-4">
    <Toolbar>
      <template #start>
        <router-link to="/" class="">
          <span class="text-3xl">Formkit PrimeVue Demo</span>
        </router-link>
      </template>  <template #center>
        <div class="text-lg">
          <span class="text-yellow-600 font-bold">New: </span>
          <router-link to="/samples/multiStep" class="">
            <span class="">MultiStep</span>
          </router-link>
        </div>
      </template>  <template #end>
        <Button label="FormKit" class="mr-2" @click="redirectToFormKit" />
        <Button icon="pi pi-prime" label="PrimeVue" class="mr-2" @click="redirectToPrimeVue" />
        <Button icon="pi pi-book" label="Docs" class="mr-2" @click="redirectToDocs" />
        <Button icon="pi pi-github" @click="redirectToGithub" />
      </template>
    </Toolbar>
  </nav>
  <div>
    <MegaMenu :model="items" class="w-134">
      <template #item="{ item }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" class="" @click="navigate">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </template>
    </MegaMenu>
  </div>
</template>

<style scoped lang='scss'>
a {
  color: var(--p-primary-color);
}
</style>
