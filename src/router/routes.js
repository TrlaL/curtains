import About from '@/views/About'
import Contacts from '@/views/Contacts'
import Location from '@/views/Location'
import Portfolio from '@/views/Portfolio'
import Prices from '@/views/Prices'

export default [
  {
    component: About,
    name: 'about',
    path: '/about'
  },
  {
    component: Contacts,
    name: 'contacts',
    path: '/contacts'
  },
  {
    component: Location,
    name: 'location',
    path: '/location'
  },
  {
    component: Portfolio,
    name: 'portfolio',
    path: '/'
  },
  {
    component: Prices,
    name: 'prices',
    path: '/prices'
  }
]