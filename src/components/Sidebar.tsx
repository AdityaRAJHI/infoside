import React from 'react';
    import { NavLink } from 'react-router-dom';
    import { BookOpen, Link, Home, BookMarked, LogOut } from 'lucide-react';
    import { useAuth } from '../hooks/useAuth';

    export default function Navbar() {
      const { logout } = useAuth();

      return (
        <nav className="bg-indigo-600 text-white p-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <NavLink to="/" className="flex items-center space-x-2 text-xl font-bold">
                <BookOpen className="h-6 w-6" />
                <span>StudentDesk</span>
              </NavLink>

              <div className="flex items-center space-x-6">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center space-x-1 hover:text-indigo-200 ${
                      isActive ? 'text-indigo-200' : ''
                    }`
                  }
                >
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </NavLink>

                <NavLink
                  to="/library"
                  className={({ isActive }) =>
                    `flex items-center space-x-1 hover:text-indigo-200 ${
                      isActive ? 'text-indigo-200' : ''
                    }`
                  }
                >
                  <BookMarked className="h-5 w-5" />
                  <span>Library</span>
                </NavLink>

                <NavLink
                  to="/links"
                  className={({ isActive }) =>
                    `flex items-center space-x-1 hover:text-indigo-200 ${
                      isActive ? 'text-indigo-200' : ''
                    }`
                  }
                >
                  <Link className="h-5 w-5" />
                  <span>Useful Links</span>
                </NavLink>
              </div>
            </div>

            <button
              onClick={logout}
              className="flex items-center space-x-1 hover:text-indigo-200"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      );
    }
