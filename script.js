const todoInput = document.querySelector(".input-vezife")
const addTodoBtn = document.querySelector(".btn-vezife-elaveet")

const todoList=document.querySelector(".vezife-siyahisi")



addTodoBtn.addEventListener("click", addTodo)
 todoList.addEventListener("click" , tamamlaSil )


 function addTodo(){


        const todoDiv=document.createElement("div")
        todoDiv.classList.add("vezife-item")
      

        const todoLi=document.createElement("li")
        todoLi.classList.add("vezife-tanitim")
      
todoLi.innerText=todoInput.value


        todoDiv.appendChild(todoLi)
  
  
      const editBtn=document.createElement("button")
      editBtn.className="vezife-btn vezife-btn-tamamlandi"
      
editBtn.innerHTML='<i class="fa-solid fa-check"></i>'
todoDiv.appendChild(editBtn)


const deleteBtn=document.createElement("button")
deleteBtn.className="vezife-btn vezife-btn-sil"
deleteBtn.innerHTML='<i class="fa-solid fa-trash"></i>'

todoDiv.appendChild(deleteBtn)
todoList.appendChild(todoDiv)

todoInput.value=""

 }

function tamamlaSil(e){

const kliklediyimElement=e.target

if(kliklediyimElement.classList.contains("vezife-btn-tamamlandi")){
kliklediyimElement.parentElement.classList.toggle("vezife-tamamlandi")

}
if(kliklediyimElement.classList.contains("vezife-btn-sil")){

kliklediyimElement.parentElement.classList.add("delete")
}


}
