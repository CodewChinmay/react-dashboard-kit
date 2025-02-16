// Components.jsx
import React, { useState } from 'react';
import { Card, Sidebar, Navbar } from 'react-dashboard-kit';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { LayoutDashboard, TrendingUp, Settings, Trash2, Edit } from 'lucide-react';

const codeSamples = {
  Card: `
import { Card } from 'react-dashboard-kit';
import { Edit, Trash2 } from 'lucide-react';

<Card
  image="https://via.placeholder.com/300x200"
  title="Card Title"
  subtitle="Card Subtitle"
  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
  tags={["React", "Dashboard"]}
  onEdit={() => console.log("Edit clicked")}
  onDelete={() => console.log("Delete clicked")}
  editIcon={<Edit size={20} />}
  deleteIcon={<Trash2 size={20} />}
/>
  `.trim(),
  Sidebar: `
import { Sidebar } from 'react-dashboard-kit';
import { LayoutDashboard, TrendingUp, Settings } from 'lucide-react';

const items = [
  { title: "Dashboard", Icon: LayoutDashboard },
  { title: "Analytics", Icon: TrendingUp },
  { title: "Settings", Icon: Settings },
];

<Sidebar 
  isOpen={true} 
  items={items}
  logo="https://via.placeholder.com/150x50"
  theme="dark"
  className="text-gray-200"
/>
  `.trim(),
  Navbar: `
import { Navbar } from 'react-dashboard-kit';

<Navbar
  logo="https://via.placeholder.com/150x30"
  isSidebarOpen={true}
  setIsSidebarOpen={setIsSidebarOpen}
  onLogout={() => console.log("Logged out")}
  user={{ name: "John Doe", avatar: "https://via.placeholder.com/40" }}
/>
  `.trim(),
};

function Components() {
  const [activeComponent, setActiveComponent] = useState('Card');
  const [isPreviewSidebarOpen, setIsPreviewSidebarOpen] = useState(true);
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(codeSamples[activeComponent]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  // Renders a live preview for the currently selected component.
  const renderPreview = () => {
    switch (activeComponent) {
      case 'Card':
        return (
          <Card
            image="https://via.placeholder.com/300x200"
            title="Card Title"
            subtitle="Interactive Component"
            content="This is a fully functional Card component with click actions and tags."
            tags={["React", "Component", "Demo"]}
            onEdit={() => alert('Edit clicked')}
            onDelete={() => alert('Delete clicked')}
            editIcon={<Edit size={20} />}
            deleteIcon={<Trash2 size={20} />}
            className="w-full max-w-md mx-auto"
          />
        );
      case 'Sidebar': {
        const items = [
          { title: 'Dashboard', Icon: LayoutDashboard },
          { title: 'Analytics', Icon: TrendingUp },
          { title: 'Settings', Icon: Settings },
        ];
        return (
          <div className="relative h-64 border border-gray-700 rounded-xl overflow-hidden shadow-xl">
            <Sidebar
              isOpen={true}
              items={items}
              logo="https://via.placeholder.com/150x50"
              theme="dark"
              className="absolute h-full text-gray-200"
            />
            <div className="ml-64 p-4 h-full bg-gray-700 flex items-center justify-center">
              <p className="text-gray-300 font-medium">Main Content Area</p>
            </div>
          </div>
        );
      }
      case 'Navbar':
        return (
          <div className="border border-gray-700 rounded-xl overflow-hidden shadow-xl">
            <Navbar
              logo="https://via.placeholder.com/150x30"
              isSidebarOpen={isPreviewSidebarOpen}
              setIsSidebarOpen={setIsPreviewSidebarOpen}
              onLogout={() => alert('Logged out')}
              user={{ 
                name: "Jane Doe", 
                avatar: "https://via.placeholder.com/40x40" 
              }}
            />
            {/* <div className="h-32 bg-gray-800 p-4 flex items-center justify-center">
              <p className="text-gray-300 font-medium">Main Page Content</p>
            </div> */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-white">Component Playground</h1>
          <p className="mt-2 text-gray-300">
            Explore and interact with our <strong>react-dashboard-kit</strong> components.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
              <nav className="space-y-3">
                {Object.keys(codeSamples).map((comp) => (
                  <button
                    key={comp}
                    onClick={() => setActiveComponent(comp)}
                    className={`w-full px-5 py-3 rounded-lg transition-colors duration-300 font-medium shadow-sm
                      ${activeComponent === comp 
                        ? 'text-white bg-gradient-to-r from-yellow-400 to-orange-500'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-700'}`}
                  >
                    {comp}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-grow space-y-10">
            {/* Preview Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                {activeComponent} Preview
              </h2>
              <div className="p-8 bg-gray-800 rounded-xl shadow-xl border border-gray-700">
                {renderPreview()}
              </div>
            </section>

            {/* Code Section */}
            <section className="relative">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-white">
                  Implementation Code
                </h2>
                <button 
                  onClick={copyCode}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors duration-300"
                >
                  {copied ? 'Copied!' : 'Copy Code'}
                </button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <SyntaxHighlighter 
                  language="jsx" 
                  style={okaidia}
                  customStyle={{ padding: '1.5rem', borderRadius: '0.5rem', margin: 0 }}
                >
                  {codeSamples[activeComponent]}
                </SyntaxHighlighter>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Components;
