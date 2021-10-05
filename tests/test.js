let note = new Note('title', 'content', 'date');
let noteBook = new NoteBook();

it ('returns the title of the note object', () => {
  expect(note.title).toEqual('title');
});

it ('returns the content of the note object', () => {
  expect(note.content).toEqual('content');
});

it ('returns the date of the note object', () => {
  expect(note.date).toEqual('date');
});

it ('returns the class of the note object', () => {
  expect(note).toBe('Note');
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

console.log(note.constructor.name)