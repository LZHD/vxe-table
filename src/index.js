import Table from '../packages/table'
import TableColumn from '../packages/table-column'
import TableConfig from '../packages/table-config'
import ExcelTable from '../packages/excel'
import GlobalConfig from './conf'

import '../style/index.scss'

const components = [
  Table,
  TableColumn,
  TableConfig,
  ExcelTable
]

function setup (options = {}) {
  let { renderMap, iconMap } = GlobalConfig
  if (options.renderMap) {
    Object.assign(renderMap, options.renderMap)
  }
  if (options.iconMap) {
    Object.assign(iconMap, options.iconMap)
  }
  Object.assign(GlobalConfig, options, {
    renderMap,
    iconMap
  })
}

function install (Vue, options) {
  if (!install.installed) {
    setup(options)
    components.map(component => Vue.component(component.name, component))
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  setup,
  Table,
  TableColumn
}
