new Vue({
  el: '#container',
  data: {
    taskInput: '',
    tasks: [],
    toggler: 'Hide',
    tbtn: false,
  },
  methods: {
    addTasks(){
      this.tasks.push(this.taskInput)
    },
    toggleBtn(){
      this.tbtn = !this.tbtn

      if(this.tbtn === true){
        this.toggler = 'Show List'
      }else{
        this.toggler = 'Hide'
      }
    }
  },

})