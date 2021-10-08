// Classes

class Note {
  constructor(title, content, date) {
    this.title = title;
    this.content = content;
    this.date = date;
  }
}

class NoteBook {
  
  static notes = [];

  static listAll() {
    NoteBook.notes = NoteBook.notes.sort(compare);

    const listHook = document.querySelector('#notes');
    let allNotes = ""
    for (const note of NoteBook.notes) {
      allNotes += `
      <div class="note">
        <a id="${noteId(note.title, note.content, note.date)}">
          <h3>${note.title}</h3>
          <p class="content">${snippetOf20(note.content)}</p>
          <p class="date">${note.date}</p>
        </a>
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
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+('0'+today.getDate()).slice(-2);
    let time = ('0'+today.getHours()).slice(-2) + ":" + ('0'+today.getMinutes()).slice(-2) + ":" + ('0'+today.getSeconds()).slice(-2);
    let dateTime = date+' '+time;
    return dateTime;
  }
}

// functions

function compare (a, b) {
  if (a.date > b.date){
    return -1;
  }
  if (a.date < b.date){
    return 1;
  }
  return 0;
}

function clearText(text) {
  document.getElementById(text).value = "";
}

function snippetOf20(text) {
  if (text.length > 20) {
  return text.substring(0, 20) + "...";
  } else {
    return text;
  }
}

function noteId(title, content, date) {
  return title.substring(0,2) + content.substring(0, 4) + date.substring(11, 19);
}

// Calls

NoteBook.allStorage();