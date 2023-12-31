# **Лабораторная работа №2 по дисциплине "Веб-технологии"**

[![Workflow1](https://github.com/valeriveledara/WebLab2/actions/workflows/workflow1.yml/badge.svg?branch=dev)](https://github.com/valeriveledara/WebLab2/actions/workflows/workflow1.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Telegram](https://img.shields.io/badge/Telegram-RomanTsitsunov-2CA5E0?style=social&logo=telegram)](https://t.me/RomanTsitsunov)
[![Telegram](https://img.shields.io/badge/Telegram-bloody_marr-2CA5E0?style=social&logo=telegram)](https://t.me/bloody_marr)
[![VKontakte](https://img.shields.io/badge/VKontakte-iowa63-9cf?style=flat&logo=vk)](https://vk.com/iowa63)


![Birja](https://thumb.tildacdn.com/tild6338-6533-4332-b832-383730366662/-/format/webp/photo_2022-11-09_13-.jpg)

## **Описание задачи**

**Цель:**

Cоздать сервис, который обращается к сервису курсов валют, и отображает gif:
<ul>
    <li>если курс по отношению к USD за сегодня стал выше вчерашнего, то отдаем случайную отсюда https://giphy.com/search/rich
    <li>если курс по отношению к USD за сегодня стал ниже вчерашнего, то отдаем случайную отсюда https://giphy.com/search/broke
</ul>

**Результатом работы должен стать монорепозиторий, с настроенным CI CD**

**Стек:**

1. NestJS

>NestJS — это фреймворк, который ускоряет и упрощает разработку масштабируемых серверных приложений на основе программной платформы Node.js. Он использует прогрессивный JavaScript, полностью поддерживает TypeScript и совмещает в себе три парадигмы (концепции) программирования: объектно-ориентированную, функциональную, функционально-реактивную.
Официальный сайт: https://nestjs.com/

2. React

>React.js — это библиотека для языка программирования JavaScript с открытым исходным кодом для разработки пользовательских интерфейсов. Она помогает быстро и легко реализовать реактивность — явление, когда в ответ на изменение одного элемента меняется все остальное.  
Официальный сайт: https://react.dev/

3. MongoDB

>MongoDB — это документоориентированная система управления базами данных, которая не требует описания схемы таблиц. Считается одним из классических примеров NoSQL-систем, использует JSON-подобные документы и схему базы данных. Написана на языке C++. MongoDB имеет открытый исходный код, она бесплатная и доступна любому разработчику. СУБД подходит для операционных систем семейства Linux, Windows и macOS. Ей можно пользоваться в облаке.  
Официальный сайт: https://www.mongodb.com/

**Реализация по этапам**

1. Создан проект на Github ( https://github.com/valeriveledara/WebLab2).

2. Написан скелет серверного приложения (реализован на NestJS). Проект инициализирован и запущен. 

3. Налажена интеграция с сервисами курсов валют и giphy.

4. Настроена интеграция с СУБД MongoDB (реализовано сохранение вызова API с параметрами: исходная валюта, целевая валюта, значение). Написаны end to end тесты и тесты для бд.  Сохранялись в бд дата обращения.

5. Написан сваггер через аннотирование. 

6. Реализована фронтовая часть с использованием React, а именно:

a. Создан grid с двумя столбцами, где первый это dt (дебит, валюта списания, ИЗ), kt (кредит, валюта зачисления, В).

b. В качестве наполнения бралась совокупность dt и kt - валютная пара, где представителями являются:
<ul>
    <li>USD JPY
    <li>USD EUR
    <li>USD RUB
    <li>USD KZT
</ul>

с. Реализован вызов API при нажатии на строку в гриде двойным кликом, а в диалоговом окне отображение результирующего GIF-изображения.

7. Реализовано CI.

8. Описан ReadME файл в репозитории (Цель, стек, реализация), добавлены соответствующие bages.


## **Установка и запуск**
1. Клонируйте репозиторий или скачайте исходный код
   ```
   git clone /https://github.com/valeriveledara/WebLab2.git
   ```
2. Установите всех зависимостей
   ```
   npm install
   ```
3. Запустите локальный сервер разработки для вашей бэкенд-части проекта
   ```
   nx serve backend
   ```
4. Запустите react для вашей фронтенд-части проекта
   ```
   nx serve react-frontend
   ```
5. Для тестирования проекта
   ```
   nx test nest-backend
   nx e2e nest-backend-e2e
   nx e2e nest-backend-e2e
   ```
## **Используемая литература**
<ul>
    <li>Документация NestJS (https://docs.nestjs.com/)
    <li>Введение в API (https://docs.openexchangerates.org/reference/api-introduction)
    <li>Библиотека контента GIF-файлов и стикеров (https://developers.giphy.com/docs/api/)
    <li>Интеграция с СУБД (https://dicem228.medium.com-nest-js-mongodb-%D0%B8-vue-js-b33a9cbbab5b)
    <li>Реализация React (https://habr.com/ru/companies/domclick/articles/672546/)
    <li>Введение в Nx (https://nx.dev/getting-started/intro)
</ul>

## **Авторы**
**Цицунов Роман Алексанрович** - студент 4 курса направления МОАИС Самарского университета. 
> *Знает как настроить Ваш сервис*

> *Ответит на любые Ваши вопросы*

> *Трудолюбивый и находчивый парень*

**Явир Валерия Сергеевна** - студентка 4 курса направления МОАИС Самарского университета. 
> *Знает как подключить СУБД*

> *Оформит красиво Ваш проект, если Вам лень писать и подбирать картиночки*

> *Гитхаб ее не любит...*

**Тарасов Лев Михайлович** - студент 4 курса направления МОАИС Самарского университета. 
> *Знает как написать CI*

> *Готов углубиться в любую тему и написать с Вами вместе интересный проект*

> *Знает толк в прикольчиках*
