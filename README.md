# OKX Whitelist Address Adder

Этот репозиторий содержит скрипт `script.js`, предназначенный для автоматического добавления списка кошельков и их названий в белый список для вывода средств с биржи OKX. Скрипт позволяет добавить до 20 адресов за один раз.

## Как использовать

- Перейдите на страницу https://www.okx.com/ru/balance/withdrawal
- Выберите валюту и способ вывода, затем нажмите на иконку человечка и "Добавить группами"

![](https://github.com/Eazer1/OKX_whitelist/blob/main/src/gif01.gif)
- Нажмите ПКМ на любом месте экрана и выберите "Просмотреть код"

![](https://github.com/Eazer1/OKX_whitelist/blob/main/src/gif02.gif)

- У вас приостановится отладчик, поэтому в правом верхнем углу экрана нажимаем на "Отключить точки остановки" или просто нажимаем CTRL + F8

![](https://github.com/Eazer1/OKX_whitelist/blob/main/src/gif03.gif)

- Вверху экрана нажимаем на треугольник или просто жмем F8

![](https://github.com/Eazer1/OKX_whitelist/blob/main/src/gif04.gif)

- В файле `scrypt.js` изменяем адреса кошельков и названия на собственные в формате `0xAddress Name`
- Открываем вкладку "Консоль" и вписываем код из файла `scrypt.js`
- Нажимаем на Enter и дожидаемся сообщения об окончании выполнения скрипта в консоли
- Вы великолепны!

Скрипт автоматически добавит указанные вами адреса и названия кошельков в белый список.

## Предупреждение о безопасности

Использование скриптов, которые взаимодействуют с вашим аккаунтом на бирже, может представлять собой риск для безопасности. Убедитесь, что вы полностью понимаете, что делает этот скрипт, прежде чем использовать его.

**Разработчики не несут ответственности за любой возможный ущерб, вызванный использованием или неправильным использованием этого скрипта**.

# Примечание

- Создатель скрипта [Qirensi](https://t.me/qirensi)
- Оформил и опубликовал [Eazer](https://t.me/eazer)
- Код создан для канала https://t.me/Eazercrypto

## Если у вас возникло желание отблагодарить [Qirensi](https://t.me/qirensi):

- `0x564dbe43b511c8b99705ec90cb8a3d071f15e946` - Любая сеть EVM
