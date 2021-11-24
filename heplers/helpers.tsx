import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import GoodsIcon from './icons/goods.svg';
import { TopLevelCategory } from '../interfaces/page.interface';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';


export const firstLevelMenu:FirstLevelMenuItem[] = [
  {
    route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses
  },
  {
    route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services
  },
  {
    route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books
  },
  {
    route: 'goods', name: 'Товары', icon: <GoodsIcon />, id: TopLevelCategory.Goods
  },
]

export const priceRU = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');
}