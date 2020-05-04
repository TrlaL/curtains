import About from '@/views/About'
import Contacts from '@/views/Contacts'
import Location from '@/views/Location'
import Portfolio from '@/views/Portfolio'
import Prices from '@/views/Prices'

export default [
  {
    component: About,
    meta: { title: 'О НАС' },
    name: 'about',
    path: '/about'
  },
  {
    component: Contacts,
    meta: { title: 'КОНТАКТЫ' },
    name: 'contacts',
    path: '/contacts'
  },
  {
    component: Location,
    meta: { title: 'МЕСТОПОЛОЖЕНИЕ' },
    name: 'location',
    path: '/location'
  },
  {
    component: Portfolio,
    meta: { title: 'ПОРТФОЛИО' },
    name: 'portfolio',
    path: '/'
  },
  {
    component: Prices,
    meta: { title: 'ПРАЙС-ЛИСТ' },
    name: 'prices',
    path: '/prices'
  }
]