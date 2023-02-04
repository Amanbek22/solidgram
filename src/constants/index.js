import home from "./../assets/home.png"
import search from "./../assets/search.png"
import message from "./../assets/message.png"


export const sideBarElements = [
    {
        title: 'Главная',
        icon: home,
        to: '/'
    },
    {
        title: 'Поисковый запрос',
        icon: search,
        to: '/#'
    },
    {
        title: 'Интересное',
        icon: 'https://cdn-icons-png.flaticon.com/512/1946/1946488.png',
        to: '/interesting'
    },
    {
        title: 'Reels',
        icon: 'https://cdn-icons-png.flaticon.com/512/1946/1946488.png',
        to: '/reels'
    },
    {
        title: 'Сообщения',
        icon: message,
        to: '/chat'
    },
];
