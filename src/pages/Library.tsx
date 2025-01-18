import React, { useState } from 'react';
import { format } from 'date-fns';
import { BookOpen, Plus } from 'lucide-react';
import { getBooks, addBook } from '../lib/storage';
import type { Book } from '../types';

export default function Library() {
  const [books, setBooks] = useState<Book[]>(getBooks());
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [dueDate, setDueDate] = useState('');

  async function addNewBook(e: React.FormEvent) {
    e.preventDefault();
    const newBook = addBook({
      title,
      author,
      due_date: dueDate
    });
    
    setBooks(getBooks());
    setTitle('');
    setAuthor('');
    setDueDate('');
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Library</h1>
        <button
          onClick={() => document.getElementById('addBookForm')?.classList.toggle('hidden')}
          className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          <Plus className="h-5 w-5" />
          <span>Add Book</span>
        </button>
      </div>

      <form id="addBookForm" className="hidden space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Book Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          onClick={addNewBook}
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Add Book
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
                <p className="text-gray-600">{book.author}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Due: {format(new Date(book.due_date), 'MMM dd, yyyy')}
                </p>
              </div>
              <BookOpen className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
