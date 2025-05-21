import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-t-4 border-b-4 border-purple-700 rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-gray-700">Carregando...</p>
      </div>
    </div>
  );
}