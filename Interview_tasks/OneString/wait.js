/*В этом разделе займемся асинхронным программированием. Идея проста: если при
 выполнении кода нужно определенное время подождать, то решением становится однострочник wait:
 */


const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

/*В однострочнике wait мы создаем промис и выполняем его по прошествии заданного промежутка
 времени, используя функцию setTimeout. 
 */