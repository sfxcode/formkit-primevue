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
    icon: 'pi pi-objects-column',
    class: 'ml-2',
    items: [
      [
        {
          label: 'Edit',
          items: [
            { label: 'InputText', icon: 'pi pi-fw pi-pencil', route: '/inputs/inputText' },
            { label: 'Textarea', icon: 'pi pi-fw pi-align-left', route: '/inputs/textArea' },
            { label: 'InputNumber', icon: 'pi pi-fw pi-hashtag', route: '/inputs/inputNumber' },
            { label: 'InputOtp', icon: 'pi pi-fw pi-shield', route: '/inputs/inputOtp' },
            { label: 'InputMask', icon: 'pi pi-fw pi-id-card', route: '/inputs/inputMask' },
            { label: 'DatePicker', icon: 'pi pi-fw pi-calendar', route: '/inputs/datePicker' },
            { label: 'Password', icon: 'pi pi-fw pi-lock', route: '/inputs/password' },
          ],
        },
      ],
      [
        {
          label: 'Select',
          items: [
            { label: 'CascadeSelect', icon: 'pi pi-fw pi-share-alt', route: '/inputs/cascadeSelect' },
            { label: 'Select', icon: 'pi pi-fw pi-chevron-down', route: '/inputs/select' },
            { label: 'Listbox', icon: 'pi pi-fw pi-list', route: '/inputs/listbox' },
            { label: 'MultiSelect', icon: 'pi pi-fw pi-check-square', route: '/inputs/multiSelect' },
            { label: 'RadioButton', icon: 'pi pi-fw pi-circle', route: '/inputs/radioButton' },
            { label: 'SelectButton', icon: 'pi pi-fw pi-stop', route: '/inputs/selectButton' },
            { label: 'ToggleButton', icon: 'pi pi-fw pi-toggle-on', route: '/inputs/toggleButton' },
            { label: 'TreeSelect', icon: 'pi pi-fw pi-sitemap', route: '/inputs/treeSelect' },
          ],
        },
      ],
      [
        {
          label: 'Check',
          items: [
            { label: 'Checkbox', icon: 'pi pi-fw pi-check-square', route: '/inputs/checkBox' },
            { label: 'ToggleSwitch', icon: 'pi pi-fw pi-power-off', route: '/inputs/toggleSwitch' },
          ],
        },
      ],
      [
        {
          label: 'Misc',
          items: [
            { label: 'AutoComplete', icon: 'pi pi-fw pi-search', route: '/inputs/autoComplete' },
            { label: 'ColorPicker', icon: 'pi pi-fw pi-palette', route: '/inputs/colorPicker' },
            { label: 'Knob', icon: 'pi pi-fw pi-sync', route: '/inputs/knob' },
            { label: 'Slider', icon: 'pi pi-fw pi-sliders-h', route: '/inputs/slider' },
            { label: 'Rating', icon: 'pi pi-fw pi-star', route: '/inputs/rating' },
            { label: 'Repeater', icon: 'pi pi-fw pi-list', route: '/inputs/repeater' },
          ],
        },
      ],
    ],
  },
  {
    label: 'More',
    icon: 'pi pi-ellipsis-h',
    class: 'ml-2',
    items: [
      [
        {
          label: 'Output Components',
          items: [
            { label: 'Output Text', icon: 'pi pi-fw pi-align-left', route: '/outputs/outputText' },
            { label: 'Output Number', icon: 'pi pi-fw pi-hashtag', route: '/outputs/outputNumber' },
            { label: 'Output Date', icon: 'pi pi-fw pi-calendar', route: '/outputs/outputDate' },
            { label: 'Output Link', icon: 'pi pi-fw pi-link', route: '/outputs/outputLink' },
            { label: 'Output List', icon: 'pi pi-fw pi-list', route: '/outputs/outputList' },
            { label: 'Output Boolean', icon: 'pi pi-fw pi-check', route: '/outputs/outputBoolean' },
            { label: 'Output Duration', icon: 'pi pi-fw pi-clock', route: '/outputs/outputDuration' },
            { label: 'Output Reference', icon: 'pi pi-fw pi-bookmark', route: '/outputs/outputReference' },
          ],
        },
      ],
      [
        {
          label: 'Styling',
          items: [
            { label: 'Basic', icon: 'pi pi-fw pi-palette', route: '/styling/base' },
            { label: 'Pass Through', icon: 'pi pi-fw pi-arrow-right-arrow-left', route: '/styling/passThrough' },
            { label: 'FormKit Class', icon: 'pi pi-fw pi-code', route: '/styling/class' },
            { label: 'Grid', icon: 'pi pi-fw pi-th-large', route: '/styling/grid' },
            { label: 'Horizontal', icon: 'pi pi-fw pi-arrows-h', route: '/styling/horizontal' },
          ],
        },
      ],
      [
        {
          label: 'Data',
          items: [
            { label: 'Edit', icon: 'pi pi-fw pi-pencil', route: '/data/edit' },
            { label: 'View', icon: 'pi pi-fw pi-eye', route: '/data/view' },
            { label: 'Without Schema', icon: 'pi pi-fw pi-file', route: '/data/withoutSchema' },
            { label: 'Slots', icon: 'pi pi-fw pi-box', route: '/data/slots' },
          ],
        },
        {
          label: 'Samples',
          items: [
            { label: 'Repeater', icon: 'pi pi-fw pi-list', route: '/samples/repeater' },
            { label: 'Input Editor', icon: 'pi pi-fw pi-code', route: '/samples/inputEditor' },
            { label: 'MultiStep', icon: 'pi pi-fw pi-forward', route: '/samples/multiStep' },
            { label: 'Listbox Transfer', icon: 'pi pi-fw pi-forward', route: '/samples/listboxTransfer' },
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
          <router-link to="/inputs/repeater" class="">
            <span class="">PrimeRepeater</span>
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
