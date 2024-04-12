import React from 'react';
import { Home, FilePlus, CheckCircle, Package, User, Box } from 'react-feather';

const SidePanel = () => {
  return (
    <div className="outline-black flex flex-col justify-between h-screen bg-slate-800 text-white w-1/5 p-4">
      <div className="py-4 ">
        {/* Deploy */}
        <div className="flex items-center mb-6 text-xl">
          <Box className="h-6 w-6 mr-2" />
          <span>BlockIDEa</span>
        </div>
        {/* Home */}
        <div className="flex items-center p-4 cursor-pointer hover:bg-slate-400 hover:text-black">
          <Home className="h-6 w-6 mr-2" />
          <span>Create Contract</span>
        </div>

        {/* Create Contract */}
        <div className="flex items-center p-4 cursor-pointer hover:bg-slate-400 hover:text-black">
          <FilePlus className="h-6 w-6 mr-2"/>
          <span>Search</span>
        </div>

        {/* Test */}
        <div className="flex items-center p-4 cursor-pointer hover:bg-slate-400 hover:text-black">
          <CheckCircle className="h-6 w-6 mr-2" />
          <span>Solidity Compiler</span>
        </div>

        {/* Deploy */}
        <div className="flex items-center p-4 cursor-pointer hover:bg-slate-400 hover:text-black">
          <Package className="h-6 w-6 mr-2" />
          <span>Deploy</span>
        </div>
      </div>
      <div className='pb-6'>
        {/* Deploy */}
        <div className="flex items-center p-4 cursor-pointer hover:bg-slate-400 hover:text-black">
          <User className="h-6 w-6 mr-2" />
          <span>Username</span>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;

