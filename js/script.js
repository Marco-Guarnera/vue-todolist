// Fase di preparazione

const app = Vue.createApp({
    name: "Vue To Do List",
    data: () => ({
        toDoList: [
            {
                txt: "Eat",
                done: false
            },

            {
                txt: "Drink",
                done: false
            },

            {
                txt: "Sleep",
                done: true
            }
        ]
    })
});

app.mount("#app");