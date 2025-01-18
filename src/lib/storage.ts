// Local storage keys
const STORAGE_KEYS = {
  USER: 'student_desk_user',
  BOOKS: 'student_desk_books',
  LINKS: 'student_desk_links',
  NOTES: 'student_desk_notes'
};

// User management
export const getUser = () => {
  const user = localStorage.getItem(STORAGE_KEYS.USER);
  return user ? JSON.parse(user) : null;
};

export const setUser = (user: any) => {
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
};

export const removeUser = () => {
  localStorage.removeItem(STORAGE_KEYS.USER);
};

// Generic CRUD operations
const getItems = (key: string) => {
  const items = localStorage.getItem(key);
  return items ? JSON.parse(items) : [];
};

const setItems = (key: string, items: any[]) => {
  localStorage.setItem(key, JSON.stringify(items));
};

// Books
export const getBooks = () => getItems(STORAGE_KEYS.BOOKS);

export const addBook = (book: any) => {
  const books = getBooks();
  const newBook = {
    ...book,
    id: crypto.randomUUID(),
    created_at: new Date().toISOString(),
    is_returned: false
  };
  books.push(newBook);
  setItems(STORAGE_KEYS.BOOKS, books);
  return newBook;
};

// Links
export const getLinks = () => getItems(STORAGE_KEYS.LINKS);

export const addLink = (link: any) => {
  const links = getLinks();
  const newLink = {
    ...link,
    id: crypto.randomUUID(),
    created_at: new Date().toISOString()
  };
  links.push(newLink);
  setItems(STORAGE_KEYS.LINKS, links);
  return newLink;
};

// Notes
export const getNotes = () => getItems(STORAGE_KEYS.NOTES);

export const addNote = (note: any) => {
  const notes = getNotes();
  const newNote = {
    ...note,
    id: crypto.randomUUID(),
    created_at: new Date().toISOString()
  };
  notes.push(newNote);
  setItems(STORAGE_KEYS.NOTES, notes);
  return newNote;
};
