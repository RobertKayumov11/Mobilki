let vue = new Vue (
    {
    el: '#app',
    data:{
        valInput: '',
        tasks: [],
        completeTasks: []

    },
    methods:
    {
        handleInput (event) 
        {
            this.valInput = event.target.value;
        },
        add: function()
        {    
            if(this.valInput === '') { return };
            this.tasks.push({
                title: this.valInput,
                id: Math.random()
            });
            this.valInput = '';
        },
        del: function(taskid, type)
        {
            if (type === 'work' ) this.tasks.splice(taskid, 1);
            else this.completeTasks.splice(taskid, 1);
        },
        check: function(taskid)
        {    
            this.completeTasks.push(...this.tasks.splice(taskid, 1));
        }
    }
})