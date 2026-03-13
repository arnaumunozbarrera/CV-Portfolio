function NotepadViewer({ text }) {
  return (
    <div className="w-[850px] bg-[#2a1a1f] shadow-sm rounded-sm">
      <div className="bg-[#2a1a1f] px-3 py-1 text-xs ">
        About me
      </div>

      <textarea
        value={text}
        readOnly
        className="w-full h-auto min-h-[350px] p-4 text-sm font-mono resize-none outline-none bg-[#272727] text-[#fff] rounded-sm"
      />
    </div>
  );
};

export default NotepadViewer;