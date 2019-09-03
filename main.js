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

Vue.component('message', {
    props: ['title', 'body'],

    data(){
        return {
            isVisible: true
        }
    },

    template: '    <article class="message" v-show="isVisible">\n' +
        '        <div class="message-header">\n' +
        '            <p>{{ title }}</p>\n' +
        '            <button class="delete" aria-label="delete" @click="isVisible = false"></button>\n' +
        '        </div>\n' +
        '        <div class="message-body">\n' +
        '            {{ body }}\n' +
        '        </div>\n' +
        '    </article>\n' ,
});


Vue.component('task', {
    template: '<li><slot>Foobar</slot></li>'
})

var app = new Vue({
    el: '#root',
});


