function asyncOperationDemo(callback: (operation: string) => void) {
        console.log("Перший виклик");
        process.nextTick(() => {
            try {
                console.log("Виконується nextTick");
                callback("nextTick");
            } catch(err) {
                console.error("Помилка в nextTick"); 
            }    
    });

        setImmediate(() => {
            try {
                console.log("Виконується setImmediate");;
                callback("setImmediate");
            } catch(err) {
                console.error("Помилка в setImmediate"); 
            }
    });
        setTimeout(() => {
            try {
                console.log("Виконується setTimeout");
                callback("setTimeout");
            } catch(err) {
                console.error("Помилка в setTimeout"); 
            }
    }, 0);
        console.log("Останній виклик");
}

    asyncOperationDemo(operation => {
    console.log(`Завершено виконання: ${operation}`);
    });