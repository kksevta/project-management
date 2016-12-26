const generateUUID = () => {
    let dateTime = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
        dateTime += performance.now();
    }
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (str) => {
        let random = (dateTime + Math.random() * 16) % 16 | 0;
        dateTime = Math.floor(dateTime / 16);
        return (str == 'x' ? random : (random & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};
export { generateUUID }