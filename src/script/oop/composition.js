// Вместо наследования создаем отдельные функции
const createSpeaker = (name) => ({
    speak: (sound) => console.log(`${name} ${sound}`)
});

