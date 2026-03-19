import { FolderClosed, Sun, Moon, X, CircleUserRound, FileBadge2, Linkedin, Github, Languages, DatabaseZap, Wrench, FolderGit2, SplinePointer, BookUser, Waypoints, University, CodeXml, FolderCode  } from 'lucide-react';

function NotepadViewer({ text, setShowNotepad }) {
  const closeNotepad = () => {
    setShowNotepad(false);
  }

  return (
    <div className="w-[850px] bg-[#2a1a1f] shadow-sm rounded-xl ">
      <div className="bg-[#1e0108] text-xs rounded-t-lg">
        <div className="flex flex-row gap-2 items-center">
          <img src={require("../../assets/icons/notepad.png")} alt="" className="h-5 w-5 my-2 ml-2" />
          <div className="rounded-sm ">
            About me
          </div>

          <button
            className="ml-auto bg-[#1e0108] text-gray-400 hover:text-[#fff] hover:bg-[#c52a1c] text-xs px-4 py-3 rounded-tr-lg"
            onClick={closeNotepad}
          >
            <X size={14}/>
          </button>
        </div>

      </div>
      <div className="w-full min-h-[320px] p-4 text-sm font-mono bg-[#272727] text-[#fff] rounded-sm overflow-y-auto whitespace-pre-wrap rounded-b-lg">
        <img
          src={require("../../assets/me/Selfie.jpg")}
          alt=""
          className="float-right ml-4 mb-2 w-32 rounded-xl rotate-3"
        />
        {text}
      </div>
    </div>
  );
};

export default NotepadViewer;