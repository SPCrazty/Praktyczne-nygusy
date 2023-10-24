import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles


const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

const TextEditor = () => {
  const [content, setContent] = useState('');


  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      [{ align: [] }],
      [{ color: [] }],
      ['code-block'],
      ['clean'],
    ],
  };


  const quillFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'align',
    'color',
    'code-block',
  ];


  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };


  return (
    <div className="h-screen w-screen flex items-center flex-col">
    <div className="m-10  flex flex-col items-center">
     <span className="text-2xl text-center">
      
    Quill Rich Text Editor
    </span> 
    </div>
    <div className="h-full w-[90vw]">
      <QuillEditor
        value={content}
        onChange={handleEditorChange}
        modules={quillModules}
        formats={quillFormats}
        className="w-full h-[70%] mt-10 bg-white"
      />
    </div>
  </div>
  );
}

export default TextEditor;