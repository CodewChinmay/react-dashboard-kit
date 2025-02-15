import React, { useState } from "react";

// Import your components (adjust paths as needed)
import Card from "react-dashboard-kit/Card";
import DashboardSidebar from "react-dashboard-kit/DashboardSidebar";
import TableDetailedView from "react-dashboard-kit/TableDetailedView";
import Dashboard from "react-dashboard-kit/Dashboard";


function Components() {
  // State for Modal demo
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for ArrayField demo
  const [arrayValues, setArrayValues] = useState([""]);

  // State for DateInputField demo
  const [date, setDate] = useState("");

  // State for RemovableFieldGroup demo
  const [removableItems, setRemovableItems] = useState([
    { title: "", description: "" },
  ]);

  // Handlers for ArrayField
  const handleArrayFieldChange = (index) => (e) => {
    const newValues = [...arrayValues];
    newValues[index] = e.target.value;
    setArrayValues(newValues);
  };

  const handleArrayFieldAdd = () => {
    setArrayValues([...arrayValues, ""]);
  };

  const handleArrayFieldRemove = (index) => () => {
    setArrayValues(arrayValues.filter((_, i) => i !== index));
  };

  // Handlers for RemovableFieldGroup
  const handleRemovableChange = (index) => (field) => (e) => {
    const newItems = [...removableItems];
    newItems[index][field] = e.target.value;
    setRemovableItems(newItems);
  };

  const handleRemovableRemove = (index) => () => {
    setRemovableItems(removableItems.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Components Demo</h1>

      {/* Card Component Demo */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Card Component</h2>
        <Card
          image="https://via.placeholder.com/400"
          title="Card Title"
          subtitle="Subtitle"
          content="This is the main content of the card. It is truncated to five lines of text if it exceeds the limit."
          tags={["Tag1", "Tag2"]}
          onEdit={() => alert("Edit clicked")}
          onDelete={() => alert("Delete clicked")}
        />
      </section>

      {/* Sidebar Component Demo */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sidebar Component</h2>
        <div className="flex">
          <DashboardSidebar
            isOpen={true}
            items={[
              {
                title: "Dashboard",
                Icon: () => <span className="mr-2">🏠</span>,
              },
              {
                title: "Settings",
                Icon: () => <span className="mr-2">⚙️</span>,
              },
            ]}
          />
          <div className="flex-1 p-4 bg-gray-800 ml-4">
            Main Content Area
          </div>
        </div>
      </section>

      {/* Table Detailed View Component Demo */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Table Detailed View Component
        </h2>
        <TableDetailedView />
      </section>

      {/* ArrayField Component Demo */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">ArrayField Component</h2>
        <ArrayField
          fieldName="tags"
          values={arrayValues}
          onChange={handleArrayFieldChange}
          onAdd={handleArrayFieldAdd}
          onRemove={handleArrayFieldRemove}
          placeholder="Enter tag"
        />
      </section>

      {/* DateInputField Component Demo */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">DateInputField Component</h2>
        <DateInputField
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Select Date"
          required={true}
        />
      </section>

      {/* Modal Component Demo */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Modal Component</h2>
        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Open Modal
        </button>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Demo Modal"
          ariaLabelClose="Close modal"
          maxWidth="md"
        >
          <p>This is the modal content.</p>
        </Modal>
      </section>

      {/* Tabs Component Demo */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tabs Component</h2>
        <Tabs
          content={[
            { title: "Tab 1", content: <p>Content for Tab 1</p> },
            { title: "Tab 2", content: <p>Content for Tab 2</p> },
          ]}
        />
      </section>

      {/* Dashboard Component Demo */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Dashboard Component</h2>
        <Dashboard
          stats={[
            {
              title: "Total Users",
              count: 1500,
              icon: () => <span>👥</span>,
              bg: "bg-blue-500",
              redirectUrl: "/users",
            },
            {
              title: "Sales",
              count: "$50,000",
              icon: () => <span>💰</span>,
              bg: "bg-green-500",
              redirectUrl: "/sales",
            },
            {
              title: "Products",
              count: 120,
              icon: () => <span>📦</span>,
              bg: "bg-purple-500",
            },
            {
              title: "Revenue",
              count: "$75,000",
              icon: () => <span>📈</span>,
              bg: "bg-yellow-500",
            },
          ]}
          setActiveContent={(content) =>
            console.log("Active content:", content)
          }
        />
      </section>

      {/* RemovableFieldGroup Component Demo */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Removable Field Group Component
        </h2>
        {removableItems.map((item, index) => (
          <div key={index} className="mb-4 border p-4 rounded">
            <RemovableFieldGroup
              data={item}
              onChange={handleRemovableChange(index)}
              onRemove={handleRemovableRemove(index)}
              index={index}
              titlePlaceholder="Enter title"
              descriptionPlaceholder="Enter description"
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Components;