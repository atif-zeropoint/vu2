Vue.component('task-list', {
    template: '<div><task v-for="task in tasks" v-text="task.description"></task></div>',

    data() {
        return {
            tasks: [
                {description: 'Go to Gym', completed: false},
                {description: 'Go to the bank', completed: false},
                {description: 'Go to work', completed: false},
                ]
        }
    }
})


Vue.component('task', {
    template: '<li><slot>Foobar</slot></li>'
})

var app = new Vue({
    el: '#root',
});


