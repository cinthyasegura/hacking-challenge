import React, { useState } from 'react';

const RadioButton = ({
    preferenceSelected
}) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = event => {
        setChecked(event.target.value);
      };

return (
    <input type="checkbox" id="cbox2" value="second_checkbox" checked={checked}
    onChange={handleCheckboxChange}/>

)
}
export default RadioButton
