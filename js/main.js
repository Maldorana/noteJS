class Note {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.date = this.dateFormat();
  }

  dateFormat() {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;
    return dateTime;
  }

}

class NoteBook {
  notes = [
    new Note(
      'title1',
      'content1',
    ),
    new Note(
      'title2',
      'content2',
    )
  ]

  listAll() {
    const listHook = document.querySelector('#notes');
    var allNotes = ""
    for (const note of this.notes) {
      allNotes += `
      <p>${note.title}</p>
      <p>${note.content}</p>
      <p>${note.date}</p>
      `;
    }
    listHook.innerHTML = allNotes;
  }
}

noteBook = new NoteBook();
noteBook.listAll();