// import the default export and the named export `useState` from the 'react' library
import React, {useState} from 'react';

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

export function ColorPicker() {
  // call useState and assign its return values to `color` and `setColor`
    const [color, setColor] = useState('Tomato');
 const divStyle = {backgroundColor: color, padding: "20vh"};

  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      {colorNames.map(colorName=>(
        <button key={colorName} onMouseOver={()=>setColor(colorName)}>{colorName}</button>
      ))}
    </div>
  );
}