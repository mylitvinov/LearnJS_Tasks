/*Если у вас есть опыт создания реальных сайтов, то вы наверняка имели дело с логикой
 аутентификации. Например, пользователю без прав администратора не разрешается доступ 
 к маршруту /admin. Если он пытается его получить, вы должны перенаправить его на другой URL.

Как раз для такой ситуации есть один однострочник, но можно найти и много других случаев
 для его применения. 
*/

const redirect = url => location.href = url
/*
location  —  это метод для глобального объекта window, а поведение при настройке 
свойства href такое же, как при нажатии пользователем на ссылку. 
*/