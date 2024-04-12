import React from 'react';

const MainArea = (props) => {
  return (
    <div className="p-4 mx-auto py-10">
      <div className="flex justify-between mb-4">
        <div className="text-xl font">
          <h2>Welcome</h2>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Create New Project</button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Continue Previous Projects */}
        {props.previousProjects.map(project => (
          <div key={project.id} className="bg-gray-200 p-4 rounded">
            <h3 className="font-semibold">{project.title}</h3>
            <p>Description or details of the project</p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default MainArea;
