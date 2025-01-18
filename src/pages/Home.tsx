import React from 'react';
import { Link } from 'react-router-dom';
import { BookMarked, Link as LinkIcon, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Welcome to StudentDesk</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/library"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center space-x-4">
            <BookMarked className="h-8 w-8 text-indigo-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Library</h2>
              <p className="text-gray-600">Manage your borrowed books</p>
            </div>
          </div>
        </Link>

        <Link
          to="/links"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center space-x-4">
            <LinkIcon className="h-8 w-8 text-indigo-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Useful Links</h2>
              <p className="text-gray-600">Access important resources</p>
            </div>
          </div>
        </Link>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <Clock className="h-8 w-8 text-indigo-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Quick Stats</h2>
              <p className="text-gray-600">Track your activities</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Notes</h2>
        <div className="space-y-4">
          {/* Notes will be populated here */}
          <p className="text-gray-600">No notes yet. Start creating!</p>
        </div>
      </div>
    </div>
  );
}
