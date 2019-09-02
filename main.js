Vue.component('task', {
    template: '<li><slot>Foobar</slot></li>'
})

var app = new Vue({
    el: '#root',
});


