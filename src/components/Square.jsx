// eslint-disable-next-line react/prop-types
export default function Square({ value, onSquareClick }) {
    return (
      <button
        className="w-20 h-20 text-4xl font-bold text-white bg-gradient-to-r from-[#01FF8E] to-[#DD02D0] border-2 border-[#380546] rounded-lg shadow-lg transition-transform hover:scale-105"
        onClick={onSquareClick}
      >
        {value}
      </button>
    );
  }