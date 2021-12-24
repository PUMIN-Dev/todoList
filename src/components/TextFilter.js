

// function TextFilter({ setSearchText }) {
//  const [input, setInput] = useState("");

import { useState } from "react";

//  useEffect(() => {
//   const timeoutId = setTimeout(() => {
//    setSearchText(input);
//    console.log("input changed");
//   }, 1500);
//   return () => {
//    clearTimeout(timeoutId);
//   };
//  }, [input, setSearchText]);

//  const handleChangeText = event => {
//   setInput(event.target.value);
//  };

//  return (
//   <div className="input-group">
//    <input
//     type="text"
//     className="form-control rounded-0"
//     onChange={handleChangeText}
//     value={input}
//    />
//    <button
//     className="btn btn-secondary rounded-0"
//     onClick={() => setSearchText}>
//     <i className="fas fa-times"> </i>
//    </button>
//   </div>
//  );
// }

function TextFilter(props){

   
    const handeleSearchText = (e) => {
       props.setSearchTerm(prev => ({...prev, text : e.target.value}))
       
    }
    // console.log(props.text)
    return(
        <div className="input-group">
            <input type="text" className="form-control rounded-0" value={props.text} onChange={handeleSearchText} />
            <button  className="btn btn-secondary rounded-0" > <i className="fas fa-times"> </i> </button>
        </div>
    )
}

export default TextFilter;