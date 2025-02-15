import React from "react";

/**
 * Documentation Component
 *
 * Displays the full documentation for React Dashboard Kit including
 * installation instructions, detailed component APIs, and usage examples.
 */
function Documentation() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 text-gray-100">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-5xl font-bold mb-4">React Dashboard Kit</h1>
        <p className="text-lg text-gray-400">
          React Dashboard Kit is a collection of reusable, customizable, and
          responsive components designed to help you build modern dashboards and
          admin panels quickly.
        </p>
      </header>

      {/* Installation */}
      <section id="installation" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Installation</h2>
        <pre className="bg-gray-800 p-4 rounded-md text-sm overflow-auto">
          <code>npm i react-dashboard-kit</code>
        </pre>
      </section>

      {/* 1. Card Component */}
      <section id="card-component" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">
          1. Card Component (Card.jsx)
        </h2>
        <p className="mb-4">
          The Card component is a reusable UI element designed to display
          information in a structured and visually appealing manner. It can be
          used for various purposes such as displaying blog posts, products,
          user profiles, etc.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Props</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <code>image</code>: (String) URL of the image to display. Falls back
            to a placeholder if not provided.
          </li>
          <li>
            <code>title</code>: (String) Main heading of the card.
          </li>
          <li>
            <code>subtitle</code>: (String, Optional) Subheading under the title,
            useful for extra context like a category or price.
          </li>
          <li>
            <code>content</code>: (String, Optional) The main text or description
            inside the card. Truncated to 5 lines using <code>line-clamp-5</code>.
          </li>
          <li>
            <code>tags</code>: (Array of Strings, Optional) Displayed as small
            labels under the content.
          </li>
          <li>
            <code>onEdit</code>: (Function, Optional) Callback for the edit
            action. An edit button appears if provided.
          </li>
          <li>
            <code>onDelete</code>: (Function, Optional) Callback for the delete
            action. A delete button appears if provided.
          </li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2">Usage</h3>
        <pre className="bg-gray-800 p-4 rounded-md text-sm overflow-auto mb-4">
          <code>{`import { Card } from 'react-dashboard-kit';

<Card
  image="https://example.com/image.jpg"
  title="Card Title"
  subtitle="Subtitle"
  content="This is the main content of the card."
  tags={["Tag1", "Tag2"]}
  onEdit={() => console.log("Edit clicked")}
  onDelete={() => console.log("Delete clicked")}
/>`}</code>
        </pre>
      </section>

      {/* 2. Sidebar Component */}
      <section id="sidebar-component" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">
          2. Sidebar Component (DashboardSidebar.jsx)
        </h2>
        <p className="mb-4">
          A responsive navigation bar that adapts to screen size, displaying as a
          vertical sidebar on desktop and a bottom navigation bar on mobile.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Props</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <code>isOpen</code>: (Boolean) Controls whether the sidebar is
            expanded or collapsed.
          </li>
          <li>
            <code>items</code>: (Array of Objects) Represents the sidebar items
            with <code>title</code> and <code>Icon</code> properties.
          </li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2">Usage</h3>
        <pre className="bg-gray-800 p-4 rounded-md text-sm overflow-auto mb-4">
          <code>{`import { Sidebar } from 'react-dashboard-kit';

const items = [
  { title: "Dashboard", Icon: DashboardIcon },
  { title: "Settings", Icon: SettingsIcon },
];

<Sidebar isOpen={true} items={items} />`}</code>
        </pre>
      </section>

      {/* 3. Navbar Component */}
      <section id="navbar-component" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">
          3. Navbar Component (DashboardNavbar.jsx)
        </h2>
        <p className="mb-4">
          A top navigation bar that includes a logo, a menu button to toggle the
          sidebar, and a logout button.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Props</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <code>logo</code>: (String) URL of the custom logo. Falls back to a
            placeholder if not provided.
          </li>
          <li>
            <code>isSidebarOpen</code>: (Boolean) Indicates whether the sidebar is
            open or closed.
          </li>
          <li>
            <code>setIsSidebarOpen</code>: (Function) Function to toggle the
            sidebar visibility.
          </li>
          <li>
            <code>onLogout</code>: (Function) Callback triggered when the logout
            button is clicked.
          </li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2">Usage</h3>
        <pre className="bg-gray-800 p-4 rounded-md text-sm overflow-auto mb-4">
          <code>{`import { Navbar } from 'react-dashboard-kit';

<Navbar
  logo="https://example.com/logo.png"
  isSidebarOpen={true}
  setIsSidebarOpen={setIsSidebarOpen}
  onLogout={() => console.log("Logged out")}
/>`}</code>
        </pre>
      </section>

      {/* 4. TableDetailedView Component */}
      <section id="table-detailed-view-component" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">
          4. TableDetailedView Component (TableDetailedView.jsx)
        </h2>
        <p className="mb-4">
          Displays a list of contact requests in a table format with detailed view
          and deletion functionality.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Usage</h3>
        <pre className="bg-gray-800 p-4 rounded-md text-sm overflow-auto mb-4">
          <code>{`import { TableDetailedView } from 'react-dashboard-kit';

<TableDetailedView />`}</code>
        </pre>
      </section>

      {/* 5. ArrayField Component */}
      <section id="array-field-component" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">
          5. ArrayField Component (ArrayField.jsx)
        </h2>
        <p className="mb-4">
          A reusable form field that allows users to input multiple values in a
          list format with options to add or remove items.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Props</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <code>fieldName</code>: (String) Name of the field.
          </li>
          <li>
            <code>values</code>: (Array) Array of values to display.
          </li>
          <li>
            <code>onChange</code>: (Function) Callback to handle changes.
          </li>
          <li>
            <code>onAdd</code>: (Function) Callback to add a new field.
          </li>
          <li>
            <code>onRemove</code>: (Function) Callback to remove a field.
          </li>
          <li>
            <code>placeholder</code>: (String) Placeholder text for the input.
          </li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2">Usage</h3>
        <pre className="bg-gray-800 p-4 rounded-md text-sm overflow-auto mb-4">
          <code>{`import { ArrayField } from 'react-dashboard-kit';

<ArrayField
  fieldName="tags"
  values={tags}
  onChange={(index) => (e) => handleChange(index, e)}
  onAdd={handleAdd}
  onRemove={(index) => () => handleRemove(index)}
  placeholder="Tag"
/>`}</code>
        </pre>
      </section>

      {/* 6. DateInputField Component */}
      <section id="date-input-field-component" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">
          6. DateInputField Component (DateInputField.jsx)
        </h2>
        <p className="mb-4">
          A reusable date input field that can be integrated into forms.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Props</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <code>id</code>: (String) ID of the input field.
          </li>
          <li>
            <code>name</code>: (String) Name of the input field.
          </li>
          <li>
            <code>value</code>: (String) Current value.
          </li>
          <li>
            <code>onChange</code>: (Function) Callback for changes.
          </li>
          <li>
            <code>placeholder</code>: (String) Placeholder text.
          </li>
          <li>
            <code>required</code>: (Boolean) Marks the field as required.
          </li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2">Usage</h3>
        <pre className="bg-gray-800 p-4 rounded-md text-sm overflow-auto mb-4">
          <code>{`import { DateInputField } from 'react-dashboard-kit';

<DateInputField
  id="date"
  name="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  placeholder="Select Date"
  required={true}
/>`}</code>
        </pre>
      </section>

      {/* 7. Modal Component */}
      <section id="modal-component" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">
          7. Modal Component (Modal.jsx)
        </h2>
        <p className="mb-4">
          A reusable modal dialog for confirmations, forms, or important alerts.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Props</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <code>isOpen</code>: (Boolean) Whether the modal is visible.
          </li>
          <li>
            <code>onClose</code>: (Function) Callback to close the modal.
          </li>
          <li>
            <code>title</code>: (String) Title in the modal header.
          </li>
          <li>
            <code>children</code>: (React Node) Content inside the modal.
          </li>
          <li>
            <code>ariaLabelClose</code>: (String, Optional) Accessible label for
            the close button (default: "Close modal").
          </li>
          <li>
            <code>maxWidth</code>: (String, Optional) Maximum modal width
            (default: <code>sm</code>).
          </li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2">Usage</h3>
        <pre className="bg-gray-800 p-4 rounded-md text-sm overflow-auto mb-4">
          <code>{`import { Modal } from 'react-dashboard-kit';

<Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="Modal Title"
  ariaLabelClose="Close modal"
  maxWidth="md"
>
  <p>Modal content goes here.</p>
</Modal>`}</code>
        </pre>
      </section>

      {/* 8. Tabs Component */}
      <section id="tabs-component" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">
          8. Tabs Component (Tabs.jsx)
        </h2>
        <p className="mb-4">
          A reusable tabbed interface that allows switching between different
          content sections.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Props</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <code>content</code>: (Array of Objects) Each object should include:
            <ul className="list-disc list-inside ml-4">
              <li>
                <code>title</code>: (String) Title of the tab.
              </li>
              <li>
                <code>content</code>: (React Node) Content when active.
              </li>
              <li>
                <code>icon</code>: (React Node, Optional) Icon beside the title.
              </li>
            </ul>
          </li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2">Usage</h3>
        <pre className="bg-gray-800 p-4 rounded-md text-sm overflow-auto mb-4">
          <code>{`import { Tabs } from 'react-dashboard-kit';

const tabsContent = [
  { title: "Tab 1", content: <p>Content for Tab 1</p>, icon: <Tab1Icon /> },
  { title: "Tab 2", content: <p>Content for Tab 2</p>, icon: <Tab2Icon /> },
];

<Tabs content={tabsContent} />`}</code>
        </pre>
      </section>

      {/* 9. Dashboard Component */}
      <section id="dashboard-component" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">
          9. Dashboard Component (Dashboard.jsx)
        </h2>
        <p className="mb-4">
          Serves as the primary layout for displaying key metrics and statistics.
          It renders a grid of StatCard components and optionally fetches data
          dynamically.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Props</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <code>stats</code>: (Array of Objects) Each object should include:
            <ul className="list-disc list-inside ml-4">
              <li>
                <code>title</code>: (String) Statistic title.
              </li>
              <li>
                <code>count</code>: (Number or String) The displayed value.
              </li>
              <li>
                <code>icon</code>: (React Node) Icon for the statistic.
              </li>
              <li>
                <code>bg</code>: (String) Background class for the StatCard.
              </li>
              <li>
                <code>url</code>: (String, Optional) API endpoint for data.
              </li>
              <li>
                <code>setter</code>: (Function, Optional) Function to update data.
              </li>
              <li>
                <code>requiresData</code>: (Boolean, Optional) Indicates if data
                fetching is needed.
              </li>
              <li>
                <code>redirectUrl</code>: (String, Optional) URL to redirect when
                clicked.
              </li>
              <li>
                <code>setActiveContent</code>: (Function) Callback when a StatCard
                is clicked.
              </li>
            </ul>
          </li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2">Usage</h3>
        <pre className="bg-gray-800 p-4 rounded-md text-sm overflow-auto mb-4">
          <code>{`import React from "react";
import { Dashboard } from 'react-dashboard-kit';
import { FaUsers, FaChartLine, FaBox, FaMoneyBill } from "react-icons/fa";

const stats = [
  {
    title: "Total Users",
    count: 1500,
    icon: <FaUsers />,
    bg: "bg-blue-500",
    url: "/api/users",
    setter: (data) => setUserCount(data.count),
    requiresData: true,
  },
  {
    title: "Sales",
    count: "$50,000",
    icon: <FaChartLine />,
    bg: "bg-green-500",
    redirectUrl: "/sales",
  },
  {
    title: "Products",
    count: 120,
    icon: <FaBox />,
    bg: "bg-purple-500",
  },
  {
    title: "Revenue",
    count: "$75,000",
    icon: <FaMoneyBill />,
    bg: "bg-yellow-500",
  },
];

function App() {
  const setActiveContent = (content) => {
    console.log("Active content:", content);
  };

  return (
    <Dashboard stats={stats} setActiveContent={setActiveContent} />
  );
}

export default App;`}</code>
        </pre>
      </section>

      {/* 10. DataFetcher Component */}
      <section id="data-fetcher-component" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">
          10. DataFetcher Component (DataFetcher.jsx)
        </h2>
        <p className="mb-4">
          A utility component to fetch data from a specified API endpoint and
          update state using a provided setter function.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Props</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <code>url</code>: (String) API endpoint.
          </li>
          <li>
            <code>setter</code>: (Function) State updater for the fetched data.
          </li>
          <li>
            <code>requiresData</code>: (Boolean, Optional) If <code>true</code>,
            extracts <code>result.data</code>; otherwise, passes the full response.
          </li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2">Usage</h3>
        <pre className="bg-gray-800 p-4 rounded-md text-sm overflow-auto mb-4">
          <code>{`import React, { useState } from "react";
import { DataFetcher } from 'react-dashboard-kit';

function App() {
  const [userData, setUserData] = useState([]);

  return (
    <div>
      <DataFetcher
        url="/api/users"
        setter={setUserData}
        requiresData={true}
      />
      <ul>
        {userData.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;`}</code>
        </pre>
      </section>

      {/* 11. RemovableFieldGroup Component */}
      <section id="removable-field-group-component" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">
          11. RemovableFieldGroup Component (RemovableFieldGroup.jsx)
        </h2>
        <p className="mb-4">
          A reusable component that renders a removable section with a title input
          and description textarea. Useful for managing lists such as FAQs,
          features, or testimonials.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Props</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <code>data</code>: (Object) Contains the <code>title</code> and{" "}
            <code>description</code> fields.
          </li>
          <li>
            <code>onChange</code>: (Function) Callback that handles input changes.
          </li>
          <li>
            <code>onRemove</code>: (Function) Callback to remove the field group.
          </li>
          <li>
            <code>index</code>: (Number) The index of the field group.
          </li>
          <li>
            <code>titlePlaceholder</code>: (String, Optional) Placeholder for the
            title input (default: "Enter title").
          </li>
          <li>
            <code>descriptionPlaceholder</code>: (String, Optional) Placeholder
            for the description textarea (default: "Enter description").
          </li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2">Usage</h3>
        <pre className="bg-gray-800 p-4 rounded-md text-sm overflow-auto mb-4">
          <code>{`import { RemovableFieldGroup } from 'react-dashboard-kit';
import { useState } from 'react';

const MyComponent = () => {
  const [items, setItems] = useState([{ title: '', description: '' }]);

  const handleChange = (index) => (field) => (e) => {
    const newItems = [...items];
    newItems[index][field] = e.target.value;
    setItems(newItems);
  };

  const handleRemove = (index) => () => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      {items.map((item, index) => (
        <RemovableFieldGroup
          key={index}
          data={item}
          onChange={handleChange(index)}
          onRemove={handleRemove(index)}
          index={index}
          titlePlaceholder="Enter feature title"
          descriptionPlaceholder="Describe your feature"
        />
      ))}
    </div>
  );
};

export default MyComponent;`}</code>
        </pre>
      </section>
    </div>
  );
}

export default Documentation;
