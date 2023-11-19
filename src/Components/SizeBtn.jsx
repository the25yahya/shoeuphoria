import React,{useState} from 'react'

const SizeBtn = ({size}) => {
    const [selected, setSelected] = useState(false);

    const handleSelected = () => {
      setSelected(!selected);
    };
  
    return (
      <button
        onClick={handleSelected}
        className={`${
          selected
            ? 'px-5 py-1 m-2 border-gray-600 rounded-sm border cursor-pointer bg-black text-white'
            : 'px-5 py-1 m-2 border-gray-600 rounded-sm border cursor-pointer hover:bg-black hover:text-white transition'
        }`}
      >
        {size}
      </button>
    );
};

export default SizeBtn