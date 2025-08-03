'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './MenuBar/MenuBar';


function TextEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal ml-4',
          },
        }
      })],
    content: '<p>Hello World! 🌎️</p>',
    shouldRerenderOnTransaction: true, // Enable re-rendering on every transaction
    editorProps: {
      attributes: {
        class: "min-h-100 bg-white rounded-b-md py-1 px-3 focus:outline-none"
      }
    },
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  })



  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}

export default TextEditor;
