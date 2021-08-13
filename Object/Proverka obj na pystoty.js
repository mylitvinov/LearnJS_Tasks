function isEmpty(obj) {
    for (let prop in obj) {
        // если тело цикла начнет выполняться - значит в объекте есть свойства
        return false;
    }
    return true

}

let shedule = {};
console.log(isEmpty(shedule)) // true