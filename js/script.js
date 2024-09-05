// Fase di preparazione

const app = Vue.createApp({
    name: "Vue To Do List",
    data: () => ({
        newTask: {
            txt: "",
            done: false
        },
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
    }),
    methods: {
        addTask(newTask) {
            this.toDoList.push(newTask);
            this.clearNewTask();
        },
        clearNewTask() {
            this.newTask = {
                txt: "",
                done: false
            }
        },
        deleteTask(task) {
            this.toDoList.splice(task, 1);
        }
    }
});

app.mount("#app");