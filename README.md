Библиотека UID.
Предоставляет возможность получать уникальные идентификаторы для объектов (уже существующих).
Написана на JavaScript, поддерживается как браузерная реализация так и Node.js.

Использование:

require([uidFile], function(uid) {
    //Обязательная инициализация - устанавливает имя св-ва, для хранения идентификатора
    uid.setUidProp('_$yourId');

    var obj = {};
    console.log(uid.getUid(obj)); // > 0
    console.log(uid.getUid(window)); // > 1
    // Далее, следующий вызовы getUid будут возвращать для тех же объектов - те же числа.
});
require(['uid'], function(uid) {
  



API.

