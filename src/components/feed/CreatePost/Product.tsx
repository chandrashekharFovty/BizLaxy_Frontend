import React from 'react';

function Product({ onClose }) {
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 z-50 flex w-[770px] ml-[245px] items-center justify-center bg-black/30"
      onClick={onClose}
    >
      <div
        onClick={stopPropagation}
      className="relative  bg-white rounded-lg p-0 flex flex-col h-[100vh] w-[200vw]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute flex  text-lg ml-[20px]  text-black hover:text-black z-10"
        >
         &lt; <span className='text-sm ml-2 mt-1'>Basic Product Information</span>
        </button>

        {/* Fixed Header */}
        <div className="pl-[20px] ml-[20px] mt-6 sticky bg-white ">
          <h1 className="text-lg font-bold text-gray-700 ">Basic Product Information</h1>
        </div>

        {/* Scrollable Form */}
        <div className="pl-[20px] mt-4 overflow-scroll scrollbar-hide space-y-4 flex-1 w-[700px] ml-[20px]">
            <h3 className="text-sm font-semibold mt-4 text-gray-700">Feature Product Title</h3>
          <p className="text-xs text-gray-600">This is how your product appears to others.</p>
          {[
             {placeholder: 'Enter brand name' },
            { label: 'Brand Name', placeholder: 'Enter brand name' },
            { label: 'Product Name', placeholder: 'Enter product name' },
            { label: 'Description', placeholder: 'Write a detailed description of the product' },
            { label: 'Hashtag', placeholder: 'Add hashtag (e.g., #summer)' },
            { label: 'Category', placeholder: 'Select product category' },
            { label: 'Product Code/ID', placeholder: 'Enter product code/ID' },
            { label: 'HSN/SAC Code', placeholder: 'Enter HSN/SAC code' },
          ].map((field, index) => (
            <div key={index} className="space-y-1">
              <label className="block text-gray-700 font-medium text-xs">{field.label}</label>
              <input
                type="text"
                placeholder={field.placeholder}
                 className="w-full border border-gray-200 px-3 text-xs py-2 rounded-xl shadow-sm bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
              />
            </div>
          ))}

          <button className="mt-4 w-full bg-blue-800 text-white px-6 py-2 rounded-xl hover:bg-blue-700">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
