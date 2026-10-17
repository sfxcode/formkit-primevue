export interface PageLink {
  label: string
  /** name of a primeicons icon, without the `pi-` prefix */
  icon: string
  route: string
}

export interface PageGroup {
  label: string
  pages: PageLink[]
}

export interface MenuSection {
  label: string
  icon: string
  /**
   * The groups of a section, by column of the menu. The `MegaMenu` of PrimeVue only sizes 2, 3, 4 or 6 columns
   * (a drop-down with any other count shows every column as wide as the whole panel), see `MENU_COLUMN_COUNTS`.
   */
  columns: PageGroup[][]
}

export const MENU_COLUMN_COUNTS = [1, 2, 3, 4, 6]

export interface Page extends PageLink {
  group: string
  section: string
}

export const sections: MenuSection[] = [
  {
    label: 'Components',
    icon: 'objects-column',
    columns: [
      [{
        label: 'Text',
        pages: [
          { label: 'InputText', icon: 'pencil', route: '/inputs/inputText' },
          { label: 'Textarea', icon: 'align-left', route: '/inputs/textArea' },
          { label: 'Password', icon: 'lock', route: '/inputs/password' },
          { label: 'InputMask', icon: 'id-card', route: '/inputs/inputMask' },
          { label: 'InputOtp', icon: 'shield', route: '/inputs/inputOtp' },
          { label: 'AutoComplete', icon: 'search', route: '/inputs/autoComplete' },
        ],
      }],
      [{
        label: 'Number & Date',
        pages: [
          { label: 'InputNumber', icon: 'hashtag', route: '/inputs/inputNumber' },
          { label: 'DatePicker', icon: 'calendar', route: '/inputs/datePicker' },
          { label: 'Slider', icon: 'sliders-h', route: '/inputs/slider' },
          { label: 'Knob', icon: 'sync', route: '/inputs/knob' },
          { label: 'Rating', icon: 'star', route: '/inputs/rating' },
        ],
      }],
      [{
        label: 'Choice',
        pages: [
          { label: 'Select', icon: 'chevron-down', route: '/inputs/select' },
          { label: 'MultiSelect', icon: 'list-check', route: '/inputs/multiSelect' },
          { label: 'Listbox', icon: 'list', route: '/inputs/listbox' },
          { label: 'CascadeSelect', icon: 'share-alt', route: '/inputs/cascadeSelect' },
          { label: 'TreeSelect', icon: 'sitemap', route: '/inputs/treeSelect' },
          { label: 'RadioButton', icon: 'circle', route: '/inputs/radioButton' },
          { label: 'SelectButton', icon: 'stop', route: '/inputs/selectButton' },
        ],
      }],
      [
        {
          label: 'Toggle',
          pages: [
            { label: 'Checkbox', icon: 'check-square', route: '/inputs/checkBox' },
            { label: 'ToggleSwitch', icon: 'power-off', route: '/inputs/toggleSwitch' },
            { label: 'ToggleButton', icon: 'circle-on', route: '/inputs/toggleButton' },
          ],
        },
        {
          label: 'Other',
          pages: [
            { label: 'ColorPicker', icon: 'palette', route: '/inputs/colorPicker' },
            { label: 'Repeater', icon: 'clone', route: '/inputs/repeater' },
          ],
        },
      ],
    ],
  },
  {
    label: 'More',
    icon: 'ellipsis-h',
    columns: [
      [{
        label: 'Output Components',
        pages: [
          { label: 'Output Text', icon: 'align-left', route: '/outputs/outputText' },
          { label: 'Output Number', icon: 'hashtag', route: '/outputs/outputNumber' },
          { label: 'Output Date', icon: 'calendar', route: '/outputs/outputDate' },
          { label: 'Output Link', icon: 'link', route: '/outputs/outputLink' },
          { label: 'Output List', icon: 'list', route: '/outputs/outputList' },
          { label: 'Output Boolean', icon: 'check', route: '/outputs/outputBoolean' },
          { label: 'Output Duration', icon: 'clock', route: '/outputs/outputDuration' },
          { label: 'Output Reference', icon: 'bookmark', route: '/outputs/outputReference' },
        ],
      }],
      [{
        label: 'Styling',
        pages: [
          { label: 'Basic', icon: 'palette', route: '/styling/base' },
          { label: 'Pass Through', icon: 'cog', route: '/styling/passThrough' },
          { label: 'FormKit Class', icon: 'code', route: '/styling/class' },
          { label: 'Grid', icon: 'th-large', route: '/styling/grid' },
          { label: 'Horizontal', icon: 'arrows-h', route: '/styling/horizontal' },
        ],
      }],
      [
        {
          label: 'Data',
          pages: [
            { label: 'Edit', icon: 'pencil', route: '/data/edit' },
            { label: 'View', icon: 'eye', route: '/data/view' },
            { label: 'Without Schema', icon: 'file', route: '/data/withoutSchema' },
            { label: 'Slots', icon: 'box', route: '/data/slots' },
          ],
        },
        {
          label: 'Samples',
          pages: [
            { label: 'Register Form', icon: 'user-plus', route: '/samples/register' },
            { label: 'Repeater', icon: 'clone', route: '/samples/repeater' },
            { label: 'Form Prefix', icon: 'tag', route: '/samples/formPrefix' },
            { label: 'Input Editor', icon: 'file-edit', route: '/samples/inputEditor' },
            { label: 'MultiStep', icon: 'forward', route: '/samples/multiStep' },
            { label: 'Listbox Transfer', icon: 'arrow-right-arrow-left', route: '/samples/listboxTransfer' },
          ],
        },
      ],
    ],
  },
]

/** every page of the menu, with the group and the section it is listed in */
export const pages: Page[] = sections.flatMap(section =>
  section.columns.flat().flatMap(group =>
    group.pages.map(page => ({ ...page, group: group.label, section: section.label })),
  ),
)

export const HOME_ROUTE = '/'

/**
 * The model of the `MegaMenu`: a home link and one drop-down per section.
 * `key` of a drop-down is the label of its section.
 */
export function toMegaMenuModel(): object[] {
  return [
    { label: 'Demo', icon: 'pi pi-home', route: HOME_ROUTE },
    ...sections.map(section => ({
      key: section.label,
      label: section.label,
      icon: `pi pi-${section.icon}`,
      class: 'ml-2',
      items: section.columns.map(column => column.map(group => ({
        label: group.label,
        items: group.pages.map(page => ({ label: page.label, icon: `pi pi-fw pi-${page.icon}`, route: page.route })),
      }))),
    })),
  ]
}

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
}

/**
 * The pages that match a search: every word has to be part of the label, the group or the section of a page.
 * Pages whose label starts with the search come first, then those whose label contains it, then the rest.
 * An empty search finds nothing.
 */
export function searchPages(query: string, limit = 12): Page[] {
  const search = normalize(query)
  if (!search)
    return []

  const words = search.split(' ')
  const compact = search.replace(/ /g, '')
  const ranked = pages.flatMap((page) => {
    const label = normalize(page.label)
    const haystack = `${label} ${normalize(page.group)} ${normalize(page.section)}`
    // `Input Text` and `inputtext` both find InputText and `outputtext` finds Output Text,
    // so the words are also compared with the spaces of the page left out
    const haystackCompact = haystack.replace(/ /g, '')
    if (!words.every(word => haystack.includes(word) || haystackCompact.includes(word)))
      return []
    const labelCompact = label.replace(/ /g, '')
    const rank = label.startsWith(search) || labelCompact.startsWith(compact) ? 0 : label.includes(search) || labelCompact.includes(compact) ? 1 : 2
    return [{ page, rank }]
  })

  return ranked
    .sort((a, b) => a.rank - b.rank || a.page.label.localeCompare(b.page.label))
    .slice(0, limit)
    .map(entry => entry.page)
}
