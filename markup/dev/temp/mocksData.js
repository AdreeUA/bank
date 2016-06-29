/* Module data structure */

// moduleName: {
//     dataType: {
//         property: value
//     }
// }

/* Module data example */

_template: {
    big: {
        title: 'Hello world',
        age: 10,
        button: false
    }
},

'birthday': {
    defaults: [
        {
            title: "Дни рождения",
            image: "http://placehold.it/350x350",
            link: "#"
        },
        {
            title: "Дни рождения",
            image: "http://placehold.it/350x350",
            link: "#"
        },
        {
            title: "Дни рождения",
            image: "http://placehold.it/350x350",
            link: "#"
        }
    ]
}
,

'calendar': {
    defaults: [
        {
            header: "КАЛЕНДАРЬ",
            items: [
                {
                    day: "06",
                    month: "07",
                    text: "Новый выпуск корпоративного издания",
                    link: "#"
                },
                {
                    day: "13",
                    month: "07",
                    text: "Межбанковская конференция",
                    link: "#"
                },
                {
                    day: "02",
                    month: "08",
                    text: "День ВДВ",
                    link: "#"
                }
            ]

        }
    ]
}
,

'bank': {
    defaults: [
        {
            header: "НОВОСТИ БАНКА",
            news: [
                {
                    dateDay: "13",
                    dateMonth: "07",
                    title: "Открытие офиса на Малоохтинском проспекте",
                    link: "#"
                },
                {
                    dateDay: "26",
                    dateMonth: "07",
                    title: "Банк начинает эквайринг карт платежной системы МИР",
                    link: "#"
                }
            ]
        }
    ]
}
,

'unit': {
    defaults: [
        {
            header: "НОВОСТИ БАНКА",
            news: [
                {
                    dateDay: "13",
                    dateMonth: "07",
                    title: "Открытие офиса на Малоохтинском проспекте",
                    link: "#"
                },
                {
                    dateDay: "26",
                    dateMonth: "07",
                    title: "Банк начинает эквайринг карт платежной системы МИР",
                    link: "#"
                }
            ]
        }
    ]
},

'slider1': {
    defaults: [
        {
            title: "Межбанковская конференция",
            image: "http://placehold.it/350x350",
            link: "#"
        }
    ]
},

'slider2': {
    defaults: [
        {
            title: "Назначения",
            image: "http://placehold.it/350x350",
            link: "#"
        },
        {
            title: "Назначения",
            image: "http://placehold.it/350x350",
            link: "#"
        },
        {
            title: "Назначения",
            image: "http://placehold.it/350x350",
            link: "#"
        }
    ]
},

'structure': {
    defaults: [
        {
            title: "СТРАТЕГИЯ БАНКА",
            link: "#",
            active: true,
            plus: true,
            submenu: [
                {
                    title: "ГЛАВНАЯ ЦЕЛЬА",
                    link: "#"
                },
                {
                    title: "ПРИОРИТЕТЫ",
                    link: "#",
                    plus: true,
                    submenu:[
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "fjfjfj оваовоаово воа",
                            link: "#",
                            plus: true,
                            submenu:[
                                {
                                    title: "Заголовок третьего уровня 1",
                                    link: "#"
                                },
                                {
                                    title: "Заголовок третьего уровня 1",
                                    link: "#"
                                },
                                {
                                    title: "Заголовок третьего уровня 1",
                                    link: "#"
                                },
                                {
                                    title: "Заголовок третьего уровня 1",
                                    link: "#"
                                }
                            ]
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        }
                    ]
                },
                {
                    title: "НА ПУТИ РЕАЛИЗАЦИ",
                    link: "#"
                }
            ]
        },
        {
            title: "СТРАТЕГИЯ БАНКА",
            link: "#",
            plus: true,
            submenu: [
                {
                    title: "ГЛАВНАЯ ЦЕЛЬА",
                    link: "#"
                },
                {
                    title: "ПРИОРИТЕТЫ",
                    link: "#",
                    submenu:[
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        }
                    ]
                },
                {
                    title: "НА ПУТИ РЕАЛИЗАЦИ",
                    link: "#"
                }
            ]
        },
        {
            title: "СТРАТЕГИЯ БАНКА",
            link: "#",
            plus: true,
            submenu: [
                {
                    title: "ГЛАВНАЯ ЦЕЛЬА",
                    link: "#"
                },
                {
                    title: "ПРИОРИТЕТЫ",
                    link: "#",
                    plus: true,
                    submenu:[
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#",
                            plus: true,
                            submenu:[
                                {
                                    title: "Заголовок третьего уровня 1",
                                    link: "#"
                                },
                                {
                                    title: "Заголовок третьего уровня 1",
                                    link: "#"
                                },
                                {
                                    title: "Заголовок третьего уровня 1",
                                    link: "#"
                                },
                                {
                                    title: "Заголовок третьего уровня 1",
                                    link: "#",
                                    plus: true,
                                    submenu:[
                                        {
                                            title: "Заголовок третьего уровня 5",
                                            link: "#"
                                        },
                                        {
                                            title: "Заголовок третьего уровня 5",
                                            link: "#"
                                        },
                                        {
                                            title: "Заголовок третьего уровня 5",
                                            link: "#"
                                        },
                                        {
                                            title: "Заголовок третьего уровня 5",
                                            link: "#"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        }
                    ]
                },
                {
                    title: "НА ПУТИ РЕАЛИЗАЦИ",
                    link: "#"
                }
            ]
        },
        {
            title: "СТРАТЕГИЯ БАНКА",
            link: "#",
            plus: true,
            submenu: [
                {
                    title: "ГЛАВНАЯ ЦЕЛЬА",
                    link: "#"
                },
                {
                    title: "ПРИОРИТЕТЫ",
                    link: "#",
                    plus: true,
                    submenu:[
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#",
                            plus: true,
                            submenu:[
                                {
                                    title: "Заголовок третьего уровня 1",
                                    link: "#"
                                },
                                {
                                    title: "Заголовок третьего уровня 1",
                                    link: "#"
                                },
                                {
                                    title: "Заголовок третьего уровня 1",
                                    link: "#"
                                },
                                {
                                    title: "Заголовок третьего уровня 1",
                                    link: "#"
                                }
                            ]
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        }
                    ]
                },
                {
                    title: "НА ПУТИ РЕАЛИЗАЦИ",
                    link: "#"
                }
            ]
        }
    ]
}

,

'head': {
    defaults: {
        title: 'default title',
        useSocialMetaTags: true
    }
},

'mainNav': {
    defaults: [
        {
            title: "МОЙ БАНК",
            link: "#",
            submenu: [
                {
                    title: "Стратегия Банка",
                    link: "#",
                    col: true,
                    submenu:[
                        {
                            title: "Главная цель",
                            link: "#"
                        },
                        {
                            title: "Приоритеты",
                            link: "#"
                        },
                        {
                            title: "На пути реализации",
                            link: "#"
                        }
                    ]
                },
                {
                    title: "Правление Банка",
                    link: "#",
                    col: true,
                    submenu: [
                        {
                            title: "Кадровый актив",
                            link: "#"
                        },
                        {
                            title: "Наставничество",
                            link: "#"
                        },
                        {
                            title: "Дни рождения",
                            link: "#"
                        },
                        {
                            title: "Форум",
                            link: "#"
                        },
                        {
                            title: "Банк идей",
                            link: "#"
                        },
                        {
                            title: "Спецпредложения",
                            link: "#"
                        },
                        {
                            title: "Инструкции пользователей",
                            link: "#"
                        },
                        {
                            title: "Полезные сервисы",
                            link: "#"
                        },
                        {
                            title: "Новому сотруднику",
                            link: "#"
                        },
                        {
                            title: "Банк подарков",
                            link: "#"
                        }
                    ]
                },
                {
                    title: "История Банка",
                    link: "#"
                },
                {
                    title: "Головной офис Банка",
                    link: "#"
                },
                {
                    title: "Статьи о Банке",
                    link: "#"
                },
                {
                    title: "Вакансии",
                    link: "#"
                },
                {
                    title: "Мы и другие банки",
                    link: "#"
                },
                {
                    title: "Назначения в Банке",
                    link: "#"
                },
                {
                    title: "Информационные конференции",
                    link: "#"
                },
                {
                    title: "Бренд Банка",
                    link: "#"
                },
                {
                    title: "Бронирование конференц-зала",
                    link: "#"
                },
                {
                    title: "Заголовок второго уровня 5",
                    link: "#",
                    col: true,
                    submenu:[
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        }
                    ]
                },
                {
                    title: "Информационные конференции",
                    link: "#"
                },
                {
                    title: "Бренд Банка",
                    link: "#",
                    col: true,
                    submenu:[
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        }
                    ]
                },
                {
                    title: "Бронирование конференц-зала",
                    link: "#"
                },
                {
                    title: "Заголовок второго уровня 5",
                    link: "#",
                    col: true,
                    submenu:[
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        }
                    ]
                }
            ]
        },
        {
            title: "МОЯ КАРЬЕРА",
            link: "#",
            submenu: [
                {
                    title: "Стратегия Банка",
                    link: "#",
                    col: true,
                    submenu:[
                        {
                            title: "Главная цель",
                            link: "#"
                        },
                        {
                            title: "Приоритеты",
                            link: "#"
                        },
                        {
                            title: "На пути реализации",
                            link: "#"
                        }
                    ]
                },
                {
                    title: "Правление Банка",
                    link: "#",
                    col: true,
                    submenu: [
                        {
                            title: "Кадровый актив",
                            link: "#"
                        },
                        {
                            title: "Наставничество",
                            link: "#"
                        },
                        {
                            title: "Дни рождения",
                            link: "#"
                        },
                        {
                            title: "Форум",
                            link: "#"
                        },
                        {
                            title: "Банк идей",
                            link: "#"
                        },
                        {
                            title: "Спецпредложения",
                            link: "#"
                        },
                        {
                            title: "Инструкции пользователей",
                            link: "#"
                        },
                        {
                            title: "Полезные сервисы",
                            link: "#"
                        },
                        {
                            title: "Новому сотруднику",
                            link: "#"
                        },
                        {
                            title: "Банк подарков",
                            link: "#"
                        }
                    ]
                },
                {
                    title: "История Банка",
                    link: "#"
                },
                {
                    title: "Головной офис Банка",
                    link: "#"
                },
                {
                    title: "Статьи о Банке",
                    link: "#"
                },
                {
                    title: "Вакансии",
                    link: "#"
                },
                {
                    title: "Мы и другие банки",
                    link: "#"
                },
                {
                    title: "Назначения в Банке",
                    link: "#"
                },
                {
                    title: "Информационные конференции",
                    link: "#"
                },
                {
                    title: "Бренд Банка",
                    link: "#"
                },
                {
                    title: "Бронирование конференц-зала",
                    link: "#"
                }
            ]
        },
        {
            title: "ФИЛИАЛЬНАЯ СЕТЬ",
            link: "#",
            submenu: [
                {
                    title: "Стратегия Банка",
                    link: "#",
                    col: true,
                    submenu:[
                        {
                            title: "Главная цель",
                            link: "#"
                        },
                        {
                            title: "Приоритеты",
                            link: "#"
                        },
                        {
                            title: "На пути реализации",
                            link: "#"
                        }
                    ]
                },
                {
                    title: "Правление Банка",
                    link: "#"
                },
                {
                    title: "История Банка",
                    link: "#"
                },
                {
                    title: "Головной офис Банка",
                    link: "#"
                },
                {
                    title: "Статьи о Банке",
                    link: "#"
                },
                {
                    title: "Вакансии",
                    link: "#"
                },
                {
                    title: "Мы и другие банки",
                    link: "#"
                },
                {
                    title: "Назначения в Банке",
                    link: "#"
                },
                {
                    title: "Информационные конференции",
                    link: "#"
                },
                {
                    title: "Бренд Банка",
                    link: "#"
                },
                {
                    title: "Бронирование конференц-зала",
                    link: "#"
                },
                {
                    title: "Заголовок второго уровня 5",
                    link: "#",
                    col: true,
                    submenu:[
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        }
                    ]
                },
                {
                    title: "Информационные конференции",
                    link: "#"
                },
                {
                    title: "Бренд Банка",
                    link: "#",
                    col: true,
                    submenu:[
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        }
                    ]
                },
                {
                    title: "Бронирование конференц-зала",
                    link: "#"
                },
                {
                    title: "Заголовок второго уровня 5",
                    link: "#",
                    col: true,
                    submenu:[
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        }
                    ]
                }
            ]
        },
        {
            title: "ПОДПОРТАЛЫ",
            link: "#",
            submenu: [
                {
                    title: "Стратегия Банка",
                    link: "#",
                    col: true,
                    submenu:[
                        {
                            title: "Главная цель",
                            link: "#"
                        },
                        {
                            title: "Приоритеты",
                            link: "#"
                        },
                        {
                            title: "На пути реализации",
                            link: "#"
                        }
                    ]
                },
                {
                    title: "Правление Банка",
                    link: "#",
                    col: true,
                    submenu: [
                        {
                            title: "Кадровый актив",
                            link: "#"
                        },
                        {
                            title: "Наставничество",
                            link: "#"
                        },
                        {
                            title: "Дни рождения",
                            link: "#"
                        },
                        {
                            title: "Форум",
                            link: "#"
                        },
                        {
                            title: "Банк идей",
                            link: "#"
                        },
                        {
                            title: "Спецпредложения",
                            link: "#"
                        },
                        {
                            title: "Инструкции пользователей",
                            link: "#"
                        },
                        {
                            title: "Полезные сервисы",
                            link: "#"
                        },
                        {
                            title: "Новому сотруднику",
                            link: "#"
                        },
                        {
                            title: "Банк подарков",
                            link: "#"
                        }
                    ]
                },
                {
                    title: "История Банка",
                    link: "#"
                },
                {
                    title: "Головной офис Банка",
                    link: "#"
                },
                {
                    title: "Статьи о Банке",
                    link: "#"
                },
                {
                    title: "Вакансии",
                    link: "#"
                },
                {
                    title: "Мы и другие банки",
                    link: "#"
                },
                {
                    title: "Назначения в Банке",
                    link: "#"
                },
                {
                    title: "Информационные конференции",
                    link: "#"
                },
                {
                    title: "Бренд Банка",
                    link: "#"
                },
                {
                    title: "Бронирование конференц-зала",
                    link: "#"
                },
                {
                    title: "Заголовок второго уровня 5",
                    link: "#",
                    col: true,
                    submenu:[
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        }
                    ]
                },
                {
                    title: "Информационные конференции",
                    link: "#"
                },
                {
                    title: "Бронирование конференц-зала",
                    link: "#"
                },
                {
                    title: "Заголовок второго уровня 5",
                    link: "#",
                    col: true,
                    submenu:[
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        }
                    ]
                }
            ]
        },
        {
            title: "СЕРВИСЫ",
            link: "#",
            submenu: [
                {
                    title: "Стратегия Банка",
                    link: "#",
                    col: true,
                    submenu:[
                        {
                            title: "Главная цель",
                            link: "#"
                        },
                        {
                            title: "Приоритеты",
                            link: "#"
                        },
                        {
                            title: "На пути реализации",
                            link: "#"
                        }
                    ]
                },
                {
                    title: "Правление Банка",
                    link: "#",
                    col: true,
                    submenu: [
                        {
                            title: "Кадровый актив",
                            link: "#"
                        },
                        {
                            title: "Наставничество",
                            link: "#"
                        },
                        {
                            title: "Дни рождения",
                            link: "#"
                        },
                        {
                            title: "Форум",
                            link: "#"
                        },
                        {
                            title: "Банк идей",
                            link: "#"
                        },
                        {
                            title: "Спецпредложения",
                            link: "#"
                        },
                        {
                            title: "Инструкции пользователей",
                            link: "#"
                        },
                        {
                            title: "Полезные сервисы",
                            link: "#"
                        },
                        {
                            title: "Новому сотруднику",
                            link: "#"
                        },
                        {
                            title: "Банк подарков",
                            link: "#"
                        }
                    ]
                },
                {
                    title: "История Банка",
                    link: "#"
                },
                {
                    title: "Головной офис Банка",
                    link: "#"
                },
                {
                    title: "Статьи о Банке",
                    link: "#"
                },
                {
                    title: "Вакансии",
                    link: "#"
                },
                {
                    title: "Мы и другие банки",
                    link: "#"
                },
                {
                    title: "Назначения в Банке",
                    link: "#"
                },
                {
                    title: "Информационные конференции",
                    link: "#"
                },
                {
                    title: "Бренд Банка",
                    link: "#"
                },
                {
                    title: "Бронирование конференц-зала",
                    link: "#"
                },
                {
                    title: "Заголовок второго уровня 5",
                    link: "#",
                    col: true,
                    submenu:[
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        }
                    ]
                },
                {
                    title: "Информационные конференции",
                    link: "#"
                },
                {
                    title: "Бренд Банка",
                    link: "#",
                    col: true,
                    submenu:[
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        }
                    ]
                },
                {
                    title: "Бронирование конференц-зала",
                    link: "#"
                }

            ]
        }

    ]
}

,

'menuLeft': {
    defaults: [
        {
            title: "СТРАТЕГИЯ БАНКА",
            link: "#",
            active: true,
            submenu: [
                {
                    title: "ГЛАВНАЯ ЦЕЛЬА",
                    link: "#"
                },
                {
                    title: "ПРИОРИТЕТЫ",
                    link: "#",
                    submenu:[
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#",
                            submenu:[
                                {
                                    title: "Заголовок третьего уровня 1",
                                    link: "#"
                                },
                                {
                                    title: "Заголовок третьего уровня 1",
                                    link: "#"
                                },
                                {
                                    title: "Заголовок третьего уровня 1",
                                    link: "#"
                                },
                                {
                                    title: "Заголовок третьего уровня 1",
                                    link: "#"
                                }
                            ]
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        }
                    ]
                },
                {
                    title: "НА ПУТИ РЕАЛИЗАЦИ",
                    link: "#"
                }
            ]
        },
        {
            title: "СТРАТЕГИЯ БАНКА",
            link: "#",
            submenu: [
                {
                    title: "ГЛАВНАЯ ЦЕЛЬА",
                    link: "#"
                },
                {
                    title: "ПРИОРИТЕТЫ",
                    link: "#",
                    submenu:[
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        },
                        {
                            title: "Заголовок третьего уровня 1",
                            link: "#"
                        }
                    ]
                },
                {
                    title: "НА ПУТИ РЕАЛИЗАЦИ",
                    link: "#"
                }
            ]
        }
    ]
}

,

'pagination': {
    defaults: {
        pages: 6,
        active: 4,
        total: 10,
        arrows: true
    }
}

,

__pages: [{
                name: 'idea-simple',
                href: 'idea-simple.html'
             },{
                name: 'ideas',
                href: 'ideas.html'
             },{
                name: 'index',
                href: 'index.html'
             },{
                name: 'new-simple',
                href: 'new-simple.html'
             },{
                name: 'news',
                href: 'news.html'
             },{
                name: 'structure',
                href: 'structure.html'
             },{
                name: 'user',
                href: 'user.html'
             }]