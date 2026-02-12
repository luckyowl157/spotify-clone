export interface DropDownItem {
  title: string
  href: string
  external?: boolean
}

const dropDownData: DropDownItem[] = [
  { title: 'Account', href: '/', external: true },
  { title: 'Profile', href: '/'},
  { title: 'Support', href: '/', external: true  },
  { title: 'Download', href: '/', external: true  },
  { title: 'Settings', href: '/'},
]

export default dropDownData
