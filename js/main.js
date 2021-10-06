class Note {
  constructor(title, content, date) {
    this.title = title;
    this.content = content;
    this.date = date;
  }

}

function compare (a, b) {
  if (a.date > b.date){
    return -1;
  }
  if (a.date < b.date){
    return 1;
  }
  return 0;
}

class NoteBook {
  
  static notes = [];

  static listAll() {
    NoteBook.notes = NoteBook.notes.sort(compare);

    const listHook = document.querySelector('#notes');
    var allNotes = ""
    for (const note of NoteBook.notes) {
      allNotes += `
      <div class="note">
        <h3>${note.title}</h3>
        <p class="content">${note.content}</p>
        <p class="date">${note.date}</p>
      </div>
      `;
    }
    listHook.innerHTML = allNotes;
  }

  static create(title, content, date) {
    let note = new Note(title, content, date);
    NoteBook.notes.push(note);
  
    localStorage.setItem(`${note.date}`, JSON.stringify(note));
  }

  static allStorage() {
    let values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( JSON.parse(localStorage.getItem(keys[i])) );
    }
    for (const value of values) {
      NoteBook.create(value.title, value.content, value.date);
    };
    NoteBook.listAll();
  }

  static dateFormat() {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;
    return dateTime;
  }
}

NoteBook.allStorage();