const listHook = document.querySelector('#notes');
createHook = document.getElementById('add-note');

let noteBook1 = new NoteBook();

createHook.addEventListener('click', (event) => {
  event.preventDefault(); 
  noteBook1.notes.push(new Note(document.getElementById('note-title').value, (document.getElementById('note-content').value)));
});

