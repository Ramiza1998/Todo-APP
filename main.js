//variables
 const todoInput = document.queryselector("#todo-input");
 const addBtn = document.queryselector("#add-btn");
 const todoList = document.queryselector("ul");

 let todoArray = new Set();
 let user;

 //function to do new todo item
 const addTodo = () => {
     
     if (todoArray.size != 5) {
         if (todoInput.value !="") {
        todoInput.parentElement.classList.remove("error")
        todoArray.add(todoInput.value)


             if(user){
                 let db = [...todoArray]
                 let _db = (JSON.stringify(db))
                 localStorage.setItem(user, _db)
                 settodo(todoArray)
                }else{
             settodo(todoArray)
            }}
            else{
                todoInput.parentElement.classList.add("error")
            }
            
        todoInput.value = ''
    }
         else {
             alert ('you have five things todo')
         }      

         }

        //Event handlers
        addBtn.addEventlistner("click,addtodo")
        const settodo = (arr) => {
            let htmlarr = '';

            for(el of arr){
                let html = 
                `<li id=${el}>
                <div class ="todo">
                <p>${el}</p>
                <input type="test" class="hide"/>
                </div>
                </li>`
                htmlarr +=html
            }
        todoList.innerHTML =htmlarr
        // informText()

        }
