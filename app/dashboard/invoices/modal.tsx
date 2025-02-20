// components/Modal.tsx
"use client"; // Add this line

import React from 'react';

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
   onConfirm: () => void;
   title: string;
   message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm, title, message }) => {
   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
         <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="mt-2">{message}</p>
            <div className="mt-4 flex justify-end">
               <button
                  className="mr-2 rounded-md border p-2 text-gray-600 hover:bg-gray-100"
                  onClick={onClose}
               >
                  Cancel
               </button>
               <button
                  className="rounded-md border p-2 bg-red-600 text-white hover:bg-red-500"
                  onClick={onConfirm}
               >
                  Delete
               </button>
            </div>
         </div>
      </div>
   );
};

export default Modal;