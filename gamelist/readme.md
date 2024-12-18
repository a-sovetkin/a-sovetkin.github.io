## Задание "Создать страницу для визуализации данных об играх с использованием открытого API."

https://a-sovetkin.github.io/gamelist/ 

Одностраничное приложение, использующее открытое API для получения информации об играх. 
В качестве API используется [RAWG Video Games Database](https://rawg.io/apidocs). 
На странице  отображается список игр с возможностью фильтрации (в работе) и поиска.
Разработано с использованием фреймворка vue3.

Приложение адаптивное - брекпоинты 1280, 768, 480 px.

Главная страница по умолчанию загружает список игр отсортированнх по рейтингу

<img width="1201" alt="gamelist_main" src="https://github.com/user-attachments/assets/804ea790-cbb4-4dda-96b3-178202642bce">

Каждая карточка содержит данные об игре 
- обложка
- название
- жанр
- рейтинг (отображается если есть)

<img width="390" alt="gamelist_card" src="https://github.com/user-attachments/assets/52428fa7-1906-4d70-94e6-02036ffa23af">

В шапке размещен блок поиска. 
- поиск ведется по названию игры
- сортируется по рейтингу
- на странице отображается 30 'карточек'

Структурно состоит из трех компонентов 
- шапка со строкой поиска
- основная часть - список карточек
- footer


<img width="590" alt="gamelist_structure" src="https://github.com/user-attachments/assets/a02b8912-64d6-407f-a4c4-bd00342e1bce">

## Скриншоты адаптивных версий
<img width="600" alt="gamelist_adaptive_1" src="https://github.com/user-attachments/assets/751aae47-434f-4811-89cc-883156fea35a">
<img width="360" alt="gamelist_adaptive_2" src="https://github.com/user-attachments/assets/756cd8dc-9798-42c4-99d8-7daacbfe59d9">
<img width="200" alt="gamelist_adaptive_3" src="https://github.com/user-attachments/assets/0f5541e5-a4b1-4fa3-8fe9-d558451fe0db">




### TODO
- постраничная навигация (подгрузка)
- фильтрация по  платформам \ жанру 
- доделать роутинг
- добавить детальную страницу
