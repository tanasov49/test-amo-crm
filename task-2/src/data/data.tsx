import { ILinks, IIconsLinks, IDescriptions } from "../modules/interfaces";
import TelegramSvg from '../images/svg/telegram.svg';
import ViberSvg from '../images/svg/viber.svg';
import WhatsAppSvg from '../images/svg/whatsapp.svg';
export const linksNav: ILinks[] = [
    {title: 'Услуги', url: '#', id: 1},
    {title: 'Виджеты', url: '#', id: 2},
    {title: 'Интеграции', url: '#', id: 3},
    {title: 'Кейсы', url: '#', id: 4},
    {title: 'Сертификаты', url: '#', id: 5}
]

export const linksIcons: IIconsLinks[] = [
    {title: 'telegram', url: 'https://telegram.me/@75555555555', Svg: TelegramSvg, id: 1},
    {title: 'viber', url: 'viber://chat?number=%2B75555555555', Svg: ViberSvg, id: 2},
    {title: 'whatsapp', url: 'whatsapp://send?text=Hello&phone=+75555555555&abid=+75555555555', Svg: WhatsAppSvg, id: 3}
]
export const textDescriptions: IDescriptions[] = [
    {title: 'Виджеты', subtitle: '30 готовых решений', titleMobile: '30 виджетов'},
    {title: 'Dashboard', subtitle: 'с показателями вашего бизнеса', titleMobile: 'Dashboard'},
    {title: 'Skype Аудит', subtitle: 'отдела продажи CRM системы', titleMobile: 'Skype Аудит'},
    {title: '35 дней', subtitle: 'использования CRM', titleMobile: 'Месяц аmoCRM'},
]
export const aboutFooterLinks:ILinks[] = [
    {title: 'Партнёрская программа', url: '#', id: 1},
    {title: 'Вакансии', url: '#', id: 2},
]
export const menuFooterLinks:ILinks[] = [
    {title: 'Расчёт стоимости', url: '#', id: 1},
    {title: 'Кейсы', url: '#', id: 2},
    {title: 'Услуги', url: '#', id: 3},
    {title: 'Благодарственные письма', url: '#', id: 4},
    {title: 'Виджеты', url: '#', id: 5},
    {title: 'Сертификаты', url: '#', id: 6},
    {title: 'Интеграции', url: '#', id: 7},
    {title: 'Блог на Youtube', url: '#', id: 8},
    {title: 'Наши клиенты', url: '#', id: 9},
    {title: 'Вопрос / Ответ', url: '#', id: 10},
]
