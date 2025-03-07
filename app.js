const createNotes=()=>{
    const notesContainer =document.getElementById('notes-container');
    notesContainer.style.display='block';

}

document.getElementById('submit-btn').addEventListener('click',function(){
    const textArea = document.getElementById('text-area');
    const text =textArea.value;
    textArea.value = '';
    if (!(text ==='')) {
        const notesList = document.getElementById('notes-list');
    const list = document.createElement('li');
    notesList.style.cssText='font-size:1.2rem; color: #ebfffc; margin-top:5px'
    list.innerText=text;
    notesList.appendChild(list);
    }
    else{
        alert('Input Can not be Empty!!')
        return 0;
    }
    
    

})