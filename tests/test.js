let note = new Note('title', 'content');
let noteBook = new NoteBook();
NoteBook.notes.push(note);

it ('returns the title of the note object', () => {
  expect(note.title).toEqual('title');
});

it ('returns the content of the note object', () => {
  expect(note.content).toEqual('content');
});

it ('returns the class of the note object', () => {
  expect(note).toBe('Note');
});

it ('returns the class of the notebook object', () => {
  expect(noteBook).toBe('NoteBook');
});

it ('returns the class of the notebook notes is an array', () => {
  expect(NoteBook.notes).toBe('Array');
});

it('creates a new note', () => {
  let originalArray = NoteBook.notes.length;
  NoteBook.notes.push(new Note('title', 'content'));
  expect(NoteBook.notes.length).toEqual(originalArray + 1);
});

function expect(actual) {
  return {
    toEqual: function(expected) {
      if (actual === expected) {
        console.log('%c Pass', 'color: green');
      } else {
        console.log('%c Fail', 'color: red');
      }
    },
    toBe: function(expected) {
      if (actual.constructor.name == expected) {
        console.log('%c Pass', 'color: green');
      } else {
        console.log('%c Fail', 'color: red');
      }
    }
  }
}

function it(label, callback) {
  console.log(`Test: ${label}`);
  callback();
}

NoteBook.notes.pop();
NoteBook.notes.pop();

