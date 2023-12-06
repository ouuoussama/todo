document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector('.container');

    container.addEventListener("click", function (event) {
        var checkbox = event.target.closest('.rectangle-one');
        var todoch = document.querySelector('.todo-one');
        var isChecked = checkbox.classList.toggle("checked");
        var myImage = checkbox.querySelector(".checkimg");
        var textchange = checkbox.closest('.todo-one').querySelector(".textchange");        
            if (isChecked) {
                todoch.classList.add('.filter3');
                checkbox.style.background = 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))';
                myImage.style.display = 'block';
                textchange.style.textDecoration = 'line-through';
                textchange.style.color = 'hsl(236, 9%, 61%)';
            } else {
                todoch.classList.remove('.filter3');
                myImage.style.display = 'none';
                checkbox.style.background = 'none';
                textchange.style.textDecoration = 'none';
                textchange.style.color = 'black';
            }
            
        
    });

    
});

document.addEventListener("DOMContentLoaded", function(){
    
    var checkboxes = document.querySelectorAll(".rectangle-one");
    var typingArea = document.getElementById("typing-area");
    var listContainer = document.querySelector('.container');
    var addtext = document.querySelector('.addtext');
    var crossImages = document.querySelectorAll('.cross');
    var noitem = document.querySelector('.todo-two')

    listContainer.addEventListener("click", function (event) {
        var checkbox = event.target.closest('.rectangle-one');
        var cross = event.target.closest('.cross');

        if (checkbox) {
            //toggleTask(checkbox);
            checkListEmpty();
        } else if (cross) {
            removeTask(cross);
            
        }
    });

    typingArea.addEventListener("keypress", function (event) {
        // Code for handling the keypress event goes here
        

        if (event.key === "Enter") {

            if (!this.value.trim()) {
                event.preventDefault();
                alert('Text area is empty.');
              }else{
                event.preventDefault();
                addnewTask();
              }
            
           
            checkListEmpty();
        }
    });
    addtext.addEventListener("click", function(event){
       
        if(typingArea.value.trim()){
            
            addnewTask();   
        }else{
            alert('Text area is empty.');
        }
       
        checkListEmpty();
        
        
    })

    crossImages.forEach(function (cross) {
        cross.addEventListener("click", function () {
            
            removeTask(cross);
            checkListEmpty();
            
        });
        
    });
    


        function addnewTask(){
            
            //creat new div in html and add to the div class todo-one
            var newTodo = document.createElement("div");
            newTodo.classList.add("todo-one");

            //creat new rectangle with th class rectangle one and checkbox
            var newCheckbox = document.createElement("div");
            newCheckbox.classList.add("rectangle-one", "checkbox");

            //craet chack img icon
            var newCheckImg = document.createElement("img");
            newCheckImg.classList.add("checkimg");
            newCheckImg.src = "/images/icon-check.svg";
            newCheckbox.appendChild(newCheckImg);

            //creat the text that created in the text area 
            var newTextChange = document.createElement("p");
            newTextChange.classList.add("textchange");
            newTextChange.textContent = typingArea.value;

            // creat the cross img
            var newCross = document.createElement("img");
            newCross.classList.add("cross");
            newCross.src = "/images/icon-cross.svg";

            newTodo.appendChild(newCheckbox);
            newTodo.appendChild(newTextChange);
            newTodo.appendChild(newCross);

            listContainer.appendChild(newTodo);

            typingArea.value="";

            checkListEmpty();
        }
        function removeTask(cross) {
            var todo = cross.closest('.todo-one');
            if (todo) {
                todo.remove();
                console.log("Task removed. Checking list...");
                checkListEmpty(); // Call checkListEmpty after removing the task
            } else {
                console.error("Parent todo element not found!");
            }
        }
        
        
        Completed.addEventListener("click", function () {
            filterTasks("completed");
        });
    
        active.addEventListener("click", function () {
            filterTasks("active");
        });
    
        all.addEventListener("click", function () {
            filterTasks("all");
        });
        
        function checkListEmpty() {
            var todoTwo = document.querySelector('.todo-two');
            var listContainer = document.querySelector('.container');
            var thechangr= document.querySelector('.thechangr');

            

            
            if (listContainer.children.length <= 1) {
               
                todoTwo.style.display = 'block';
                thechangr.innerHTML =listContainer.children.length -1;
                  
            } else if (listContainer.children.length > 1){
             
                 todoTwo.style.display = 'none';
                 thechangr.innerHTML =listContainer.children.length -1;
                
            }
            
        }
        
        //var Completed = document.querySelector('.Completed');
        var active = document.querySelector('.active');
        var all = document.querySelector('.all');
        var list = document.querySelector('.list');
        var todoqq = document.querySelectorAll('.todo-one');
        //Completed.addEventListener("click", function () {
            var checkboxes = document.querySelectorAll('.list .filter3');
            
            console.log('2');
            if(todoqq.classList.contains('filter3')){
                console.log('1');
            }
        });

        function filterTasks(filter) {
            var checkboxes = document.querySelectorAll('.list .rectangle-one');
            var listItems = document.querySelectorAll('.todo-one');
    
            checkboxes.forEach(function (checkbox, index) {
                var listItem = listItems[index];
    
                if (filter === "all") {
                    listItem.style.display = 'block';
                } else if (filter === "active" && !checkbox.classList.contains("filter3")) {
                    listItem.style.display = 'block';
                } else if (filter === "completed" && checkbox.classList.contains("filter3")) {
                    listItem.style.display = 'block';
                } else {
                    listItem.style.display = 'none';
                }
            });
        }
    
    
})




//document.addEventListener("DOMContentLoaded", function(){
    var Completed = document.querySelector('.Completed');
    var active = document.querySelector('.active');
    var all = document.querySelector('.all');
    var list = document.querySelector('.list');
    
    
    all.addEventListener("click", function () {
        console.log('3');

        filterTasks("all");
    });

    active.addEventListener("click", function () {
        console.log('2');

        filterTasks("active");
    });

    Completed.addEventListener("click", function () {
        var checkboxes = document.querySelectorAll('.list .rectangle-one');
        var listItems = document.querySelectorAll('.todo-one');
    
        checkboxes.forEach(function (checkbox, index) {
            var listItem = listItems[index];
    
            if (checkbox.classList.contains("filter3")) {
                console.log('1');
                listItem.style.display = 'block';
            } else {
                listItem.style.display = 'none';
            }
        });
    });
    
    
//})

