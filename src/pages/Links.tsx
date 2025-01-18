import React, { useState } from 'react';
import { Link as LinkIcon, Plus, ExternalLink } from 'lucide-react';
import { getLinks, addLink } from '../lib/storage';
import type { UsefulLink } from '../types';

export default function Links() {
  const [links, setLinks] = useState<UsefulLink[]>(getLinks());
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  async function addNewLink(e: React.FormEvent) {
    e.preventDefault();
    addLink({
      title,
      url,
      category,
      description
    });
    
    setLinks(getLinks());
    setTitle('');
    setUrl('');
    setCategory('');
    setDescription('');
  }

  const categories = Array.from(new Set(links.map(link => link.category)));

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Useful Links</h1>
        <button
          onClick={() => document.getElementById('addLinkForm')?.classList.toggle('hidden')}
          className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          <Plus className="h-5 w-5" />
          <span>Add Link</span>
        </button>
      </div>

      <form id="addLinkForm" className="hidden space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
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
          <label htmlFor="url" className="block text-sm font-medium text-gray-700">
            URL
          </label>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            rows={3}
          />
        </div>

        <button
          type="submit"
          onClick={addNewLink}
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Add Link
        </button>
      </form>

      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category} className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {links
                .filter((link) => link.category === category)
                .map((link) => (
                  <div key={link.id} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {link.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">{link.description}</p>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-indigo-600 hover:text-indigo-500 mt-2"
                        >
                          <span>Visit</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                      <LinkIcon className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
