
// js
const taskField = document.getElementById('taskField');
const addTaskBtn =  document.getElementById('addTaskBtn');
const allTaskParent = document.getElementById('allTask');

taskField.addEventListener('keypress', function(event){
    if(event.keyCode === 13){
        createNewTask(allTaskParent, event.target.value)
        this.value = ''
    }
})


function createNewTask(parent, task){
    
    /*
     div create করতে হইলে document.createElement লিখা লাগে না
     এই ভাবে লিখলে ও হবে ।
    */
    let col = document.createElement('div')
    col.className = 'col-sm-3'

    let singleTask = document.createElement('div')
    singleTask.className = 'single-task d-flex justify-content-between'

    let singleTaskP = document.createElement('p')
    singleTaskP.innerHTML = task;
    singleTask.appendChild(singleTaskP)


    let span = document.createElement('span')
    span.className = 'ml-auto'
    span.style.cursor = 'pointer'
    span.innerHTML =`<i class="fas fa-times-circle"></i>`
    span.addEventListener('click', function(){
        parent.removeChild(col);
    })
    singleTask.appendChild(span)


    // cursor div color change variable drclear and function create
    let taskControler = createTaskControler(singleTask)
    singleTask.appendChild(taskControler)
    taskControler.style.visibility = 'hidden'
    
    singleTask.onmouseenter = function(){
        taskControler.style.visibility = 'visible'
    }

    singleTask.onmouseleave = function(){
        taskControler.style.visibility = 'hidden'
    }



    
    col.appendChild(singleTask)
    parent.appendChild(col);
}


    // cursor div color change
    function createTaskControler(parent){
        let controlPanel = document.createElement('div')
        controlPanel.className = 'task-control-panel'

        // color pallate variable declear and function create
        let colorpallete =  createColorPallete()
        controlPanel.appendChild(colorpallete)


        // edit btn for text
        let editBtn = createEditBtn(parent)
        controlPanel.appendChild(editBtn);



        return controlPanel;
    }


    // edit btn for text
    function createEditBtn(parent){
        let span = document.createElement('span')
        span.classList = ('ml-auto mr-2')
        span.innerHTML = `<i class="fa-light fa-pen-to-square"></i>`
        span.style.color = '#fff'
        span.addEventListener('click', function(){

            let p = parent.querySelector('p')
            let textArea = document.createElement('textarea')
            textArea.className = ('inner-textarea')
            textArea.style.width = parent.offsetWidth
            textArea.style.height = parent.offsetHeight
            textArea.innerHTML = p.innerHTML

            parent.appendChild(textArea);
        })
    }


    //color pallete function
    function createColorPallete (parent){
        const colors = ['palegreen', 'skyBlue', 'powderblue', 'salmon', 'gray', 'red']

         let colorDiv = document.createElement('div')
         colorDiv.className = ('d-flex')

         colors.forEach(color => {
             let div = document.createElement('div')
             div.className = ('color-circle')
             div.style.background = color
             div.addEventListener('click', function(){
                 parent.style.background = color;
             })
             colorDiv.appendChild(div)
         });
         return colorDiv;
    }