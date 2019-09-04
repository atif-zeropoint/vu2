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


Vue.component('modal', {
    template: `
                <div class="modal is-active" >
                        <div class="modal-background"></div>
                        <div class="modal-content">
                           <div class="box">
                                <slot></slot>      
                           </div>
                        </div>
                        <button class="modal-close is-large" aria-label="close" @click="$emit(\'close\')"></button>
                    </div>
                </div>
    `,
});

Vue.component('task', {
    template: '<li><slot>Foobar</slot></li>'
})

Vue.component('tabs', {
    template: `
            <div>
                <div class="tabs">
                  <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }"> 
                        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                    </li>                    
                  </ul>
                </div>    
                <div class="tabs-details">
                    <slot></slot>
                </div>
            </div>
    `,

    data() {
        return {
            tabs: []
        }
    },

    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab){
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
});

Vue.component('tab', {
    template: `
        <div><slot></slot></div>
    `,
    props: {
        name: {required: true},
        selected: {default: false},
    },

    data() {
        return {
            isActive: false,
        }
    },

    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted() {
        this.isActive = this.selected;
    }


})

Vue.component('coupon', {
    template: '<input type="text" placeholder="Enter your coupon code" @blur="onCouponApplied">',

    methods: {
        onCouponApplied() {
            this.$emit('applied');
        }
    }


})

var app = new Vue({
    el: '#root',
    data: {
        showModal: false,
        isCouponApplied: false,
    },

    methods: {
        onCouponApplied() {
            this.isCouponApplied = true;
        }
    }
});


