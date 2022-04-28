import Dashboard from '../assets/images/icons/dashboard.svg';
import AvailableUnits from '../assets/images/icons/available-units.svg';
import Invoices from '../assets/images/icons/invoices.svg';
import Projects from '../assets/images/icons/projects.svg';
import SocialMedia from '../assets/images/icons/social-media.svg';
import Integrations from '../assets/images/icons/integrations.svg';
import Documentation from '../assets/images/icons/documentation.svg';
import Settings from '../assets/images/icons/settings.svg';
import HelpCenter from '../assets/images/icons/help-center.svg';
import Upper from '../assets/images/icons/upper.svg';
import Lower from '../assets/images/icons/lower.svg';
import Center from '../assets/images/icons/center.svg';
import Beach from '../assets/images/beachfront-house.png';
import Boston from '../assets/images/boston-family.png';
import Hampton from '../assets/images/hampton-villa.png';
import Miami from '../assets/images/miami-house.png';
import House from '../assets/images/new-york-house.png';
import Condo from '../assets/images/san-condo.png';

export const SIDEBAR_MENUS_TOP = [
  { id: 0, label: 'Dashboard', image: Dashboard, link: '#' },
  { id: 1, label: 'Available units', image: AvailableUnits, link: '/' },
  { id: 2, label: 'Invoices', image: Invoices, link: '/' },
  { id: 3, label: 'Projects', image: Projects, link: '/projects' },
  { id: 4, label: 'Social media', image: SocialMedia, link: '/' },
  { id: 5, label: 'Integrations', image: Integrations, link: '/' },
  { id: 6, label: 'Documnetation', image: Documentation, link: '/' },
];

export const SIDEBAR_MENUS_BOTTOM = [
  { id: 0, label: 'Settings', image: Settings, link: '/' },
  { id: 1, label: 'Help center', image: HelpCenter, link: '/' },
];

export const STATISTICS = [
  {
    id: 0,
    label: 'Todays sales',
    value: '2,456',
    percent: 75,
    status: 0,
  },
  {
    id: 1,
    label: 'New Products',
    value: '221',
    percent: 75,
    status: 1,
  },
  {
    id: 2,
    label: 'Inventory',
    value: '1,425',
    status: 2,
    percent: 48,
  },
];

export const STATUS_COLOR = {
  0: { color: '#44C13C', bgColor: '#E6FBD9' },
  1: { color: '#4040F2', bgColor: '#D8D8FE' },
  2: { color: '#FF513A', bgColor: '#FFE8D7' },
};

export const STATUS_ARROW = {
  0: Upper,
  1: Center,
  2: Lower,
};

export const FAVOURITES = [
  {
    id: 0,
    title: 'Boston family home',
    description:
      'A beautiful townhouse in the heart of Miami’s downtown district. With 3 bedrooms and a heated pool.',
    bedroom: 5,
    place: 'boston',
    villa: true,
    image: Boston,
  },
  {
    id: 1,
    title: 'Miami beach house',
    description:
      'A beautiful townhouse in the heart of Miami’s downtown district. With 3 bedrooms and a heated pool.',
    bedroom: 5,
    place: 'boston',
    villa: true,
    image: Beach,
  },
  {
    id: 2,
    title: 'New York Townhouse',
    description:
      'A beautiful townhouse in the heart of Miami’s downtown district. With 3 bedrooms and a heated pool.',
    bedroom: 5,
    place: 'boston',
    villa: true,
    image: House,
  },
  {
    id: 3,
    title: 'Beachfront Mansion Miami',
    description:
      'A beautiful townhouse in the heart of Miami’s downtown district. With 3 bedrooms and a heated pool.',
    bedroom: 5,
    place: 'boston',
    villa: true,
    image: Miami,
  },
  {
    id: 4,
    title: 'Hamptons Villa',
    description:
      'A beautiful townhouse in the heart of Miami’s downtown district. With 3 bedrooms and a heated pool.',
    bedroom: 5,
    place: 'boston',
    villa: true,
    image: Hampton,
  },
  {
    id: 5,
    title: 'San Fransisco Condo',
    description:
      'A beautiful townhouse in the heart of Miami’s downtown district. With 3 bedrooms and a heated pool.',
    bedroom: 5,
    place: 'boston',
    villa: true,
    image: Condo,
  },
];
