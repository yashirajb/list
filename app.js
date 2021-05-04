//reference form

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos')
const search = document.querySelector('.search input');

//reusable function 

const generateTemplate = (todo) => {
    //html template using template string
    const html = `   
    
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <!-- i tags are from fontawesome website -->
    <i class="far fa-trash-alt delete"></i>
    </li>`;
    list.innerHTML += html;
}

addForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    //.trim removes any white space user may accidentally type
    const todo = addForm.add.value.trim();
    if(todo.length){
        generateTemplate(todo);
        addForm.reset()
    }
});

//delete todos
list.addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

//search and filter todos

const filterTodos = (term) =>{
    //an array of all the elements that DONT match
    Array.from(list.children)
    .filter((todo)=> !todo.textContent.includes(term))
    .forEach((todo)=> todo.classList.add('filtered'));  

    //array of all of the elements the DO match 
    Array.from(list.children)
    .filter((todo)=> !todo.textContent.includes(term))
    .forEach((todo)=> todo.classList.add('filtered'));    
};

//keyup event, but first get input field reference
search.addEventListener('keyup', ()=>{
    const term = search.value.trim();
    filterTodos(term);
});
