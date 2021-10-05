let note = new Note('title', 'content', 'date');
let noteBook = new NoteBook();

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
  expect(noteBook.notes).toBe('Array');
});

it ('returns the title of the first element of the notes', () => {
  expect(noteBook.notes[0].title).toEqual('title1');
});

function expect(actual) {
  return {
    toEqual: function(expected) {
      if (actual === expected) {
        console.log('Pass');
      } else {
        console.log('Fail');
      }
    },
    toBe: function(expected) {
      if (actual.constructor.name == expected) {
        console.log('Pass');
      } else {
        console.log('Fail');
      }
    }
  }
}

function it(label, callback) {
  console.log(`Test: ${label}`);
  callback();
}

it('creates a new note', () => {
  let originalArray = noteBook.notes.length;
  new Note('title', 'content', 'date');
  expect(noteBook.notes.length).toEqual(originalArray + 1);
});