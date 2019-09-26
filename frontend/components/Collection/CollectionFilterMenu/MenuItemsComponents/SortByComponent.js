import React from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox, RadioGroup, Radio } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from '@material-ui/core/Button';
import uuidv1 from 'uuid/v1';

const SortByComponent = ({ componentName, componentValues, classes, openComponentMenu, menuIsOpen }) => {
    // const [menuIsOpen, setMenuIsOpen] = React.useState(false);
    const [value, setValue] = React.useState(componentValues[2].en);
    // console.log(value)

    const handleChange = event => {
        setValue(event.target.value);
    };
    return (
        <div className={classes.default_custom_component}>
            <div onClick={() => openComponentMenu("SortByComponent")} className={`btnWrapper  ${menuIsOpen ? classes.addBorders : ""}`}>
                {componentName.en}
                <ExpandMoreIcon className={menuIsOpen ? classes.rotateExpandBtnUp : ""} />
            </div>
            <div className={`menu_list ${!menuIsOpen ? classes.hideComponent : ""}`}>
                <div>
                    <FormGroup>
                        <RadioGroup aria-label="sort" name="sort"
                            value={value}
                            onChange={handleChange}
                        >

                            {
                                componentValues.map(item => {
                                    return (
                                        <FormControlLabel
                                            key={uuidv1()}
                                            value={item.en}
                                            control={<Radio />} label={item.en}
                                        />
                                    )
                                })
                            }
                        </RadioGroup>
                        <Button variant="outlined" className="filterBtn">
                            Filter
                        </Button>
                    </FormGroup>
                </div>
            </div>

        </div>
    )
}

export default SortByComponent
