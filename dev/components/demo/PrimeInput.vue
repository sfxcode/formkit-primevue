<script setup lang='ts'>
import JsonEditorVue from 'json-editor-vue'
import { FormKitDataEdit } from 'my-library'
import { ref } from 'vue'
import { useMessages } from '../../composables/messages'

const props = defineProps<{
  header: string
  schema: object
  data: object
  primeAttributes?: string
  customAttributes?: string
  formClass?: string
  hideTabs?: boolean
}>()

const { showSuccessMessage } = useMessages()

const formSchema = ref(props.schema)
const formData = ref(props.data)

const documentationLink = `https://primevue.org/${props.header.replace('Prime', '').toLowerCase()}`

async function submitHandler() {
  showSuccessMessage('Form Submitted ...', `${props.header} submitted successfully`)
}
</script>

<template>
  <div>
    <h2 class="text-color-[var(--p-primary-color)] pb-2">
      {{ header }}
    </h2>
    <slot />
    <div class="flex gap-8 flex-wrap">
      <div class="min-w-32rem basis-1/2 xl:basis-1/3">
        <div>
          <FormKitDataEdit :data="formData" :schema="formSchema" debug-data @data-saved="submitHandler" />
        </div>
      </div>
      <div class="basis-1/2 xl:basis-1/3">
        <Tabs v-if="!hideTabs" value="0">
          <TabList>
            <Tab value="0">
              Schema Editor
            </Tab>
            <Tab value="1">
              Data Editor
            </Tab>
            <Tab v-if="primeAttributes || customAttributes" value="2">
              Supported Attributes
            </Tab>
          </TabList>
          <TabPanels class="">
            <TabPanel value="0" class="w-full max-w-200">
              <JsonEditorVue v-model="formSchema" v-bind="{ mode: 'tree' }" class="jse-theme-dark" />
            </TabPanel>
            <TabPanel value="1">
              <JsonEditorVue v-model="formData" v-bind="{ mode: 'tree' }" class="jse-theme-dark" />
            </TabPanel>
            <TabPanel v-if="primeAttributes || customAttributes" value="2">
              <h4>Base Attributes</h4>
              <div>
                <span>disabled, readonly, style, class, tabindex, ariaLabel, ariaLabelledby, pt, ptOptions, unstyled</span>
              </div>
              <h4>PrimeVue Attributes</h4>
              <div>
                <a :href="documentationLink" target="_blank" class="text-xl">Open Documentation</a>
              </div>
              <div class="mt-2">
                <span>{{ primeAttributes }}</span>
              </div>
              <h4 v-if="customAttributes">
                Custom Attributes
              </h4>
              <div>
                <span v-if="customAttributes">{{ customAttributes }}</span>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.jse-theme-dark {

 /* over all fonts, sizes, and colors */
  --jse-theme-color: #383e42;
  --jse-theme-color-highlight: #687177;
  --jse-background-color: #1e1e1e;
  --jse-text-color: #d4d4d4;

  /* main, menu, modal */
  --jse-main-border: 1px solid #4f4f4f;
  --jse-menu-color: #fff;
  --jse-modal-background: #2f2f2f;
  --jse-modal-overlay-background: rgba(0, 0, 0, 0.5);
  --jse-modal-code-background: #2f2f2f;

  /* tooltip in text mode */
  --jse-tooltip-color: var(--jse-text-color);
  --jse-tooltip-background: #4b4b4b;
  --jse-tooltip-border: 1px solid #737373;
  --jse-tooltip-action-button-color: inherit;
  --jse-tooltip-action-button-background: #737373;

  /* panels: navigation bar, gutter, search box */
  --jse-panel-background: #333333;
  --jse-panel-background-border: 1px solid #464646;
  --jse-panel-color: var(--jse-text-color);
  --jse-panel-color-readonly: #737373;
  --jse-panel-border: 1px solid #3c3c3c;
  --jse-panel-button-color-highlight: #e5e5e5;
  --jse-panel-button-background-highlight: #464646;

  /* navigation-bar */
  --jse-navigation-bar-background: #656565;
  --jse-navigation-bar-background-highlight: #7e7e7e;
  --jse-navigation-bar-dropdown-color: var(--jse-text-color);

  /* context menu */
  --jse-context-menu-background: #4b4b4b;
  --jse-context-menu-background-highlight: #595959;
  --jse-context-menu-separator-color: #595959;
  --jse-context-menu-color: var(--jse-text-color);
  --jse-context-menu-button-background: #737373;
  --jse-context-menu-button-background-highlight: #818181;
  --jse-context-menu-button-color: var(--jse-context-menu-color);

  /* contents: json key and values */
  --jse-key-color: #9cdcfe;
  --jse-value-color: var(--jse-text-color);
  --jse-value-color-number: #b5cea8;
  --jse-value-color-boolean: #569cd6;
  --jse-value-color-null: #569cd6;
  --jse-value-color-string: #ce9178;
  --jse-value-color-url: #ce9178;
  --jse-delimiter-color: #949494;
  --jse-edit-outline: 2px solid var(--jse-text-color);

  /* contents: selected or hovered */
  --jse-selection-background-color: #464646;
  --jse-selection-background-light-color: #333333;
  --jse-hover-background-color: #343434;
  --jse-active-line-background-color: rgba(255, 255, 255, 0.06);
  --jse-search-match-background-color: #343434;

  /* contents: section of collapsed items in an array */
  --jse-collapsed-items-background-color: #333333;
  --jse-collapsed-items-selected-background-color: #565656;
  --jse-collapsed-items-link-color: #b2b2b2;
  --jse-collapsed-items-link-color-highlight: #ec8477;

  /* contents: highlighting of search results */
  --jse-search-match-color: #724c27;
  --jse-search-match-outline: 1px solid #966535;
  --jse-search-match-active-color: #9f6c39;
  --jse-search-match-active-outline: 1px solid #bb7f43;

  /* contents: inline tags inside the JSON document */
  --jse-tag-background: #444444;
  --jse-tag-color: #bdbdbd;

  /* controls in modals: inputs, buttons, and `a` */
  --jse-input-background: #3d3d3d;
  --jse-input-border: var(--jse-main-border);
  --jse-button-background: #808080;
  --jse-button-background-highlight: #7a7a7a;
  --jse-button-color: #e0e0e0;
  --jse-a-color: #55abff;
  --jse-a-color-highlight: #4387c9;

  /* svelte-select */
  --background: #3d3d3d;
  --border: 1px solid #4f4f4f;
  --listBackground: #3d3d3d;
  --itemHoverBG: #505050;
  --multiItemBG: #5b5b5b;
  --inputColor: #d4d4d4;
  --multiClearBG: #8a8a8a;
  --listShadow: 0 2px 6px 0 rgba(0, 0, 0, 0.24);

  /* color picker */
  --jse-color-picker-background: #656565;
  --jse-color-picker-border-box-shadow: #8c8c8c 0 0 0 1px;
}
</style>
