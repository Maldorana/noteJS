const listHook = document.querySelector('#notes');
const createHook = document.getElementById('add-note');

createHook.addEventListener('click', (event) => {
  event.preventDefault(); 
  
  NoteBook.create(document.getElementById('note-title').value, document.getElementById('note-content').value, NoteBook.dateFormat())
  NoteBook.listAll();
});

const noteMaker = (title, content) => {
  const p1 = document.createElement('p')
  const p2 = document.createElement('p')
  p1.textContent = title
  p2.textContent = content
  listHook.appendChild(p1).append(p2)
}


