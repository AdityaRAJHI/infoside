import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Navbar from './components/Navbar';
    import Home from './pages/Home';
    import Library from './pages/Library';
    import Links from './pages/Links';
    import Sidebar from './components/Sidebar';

    function App() {
      return (
        <Router>
          <div className="min-h-screen bg-gray-50 flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Navbar />
              <main className="container mx-auto px-4 py-8">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/library" element={<Library />} />
                  <Route path="/links" element={<Links />} />
                </Routes>
              </main>
            </div>
          </div>
        </Router>
      );
    }

    export default App;
