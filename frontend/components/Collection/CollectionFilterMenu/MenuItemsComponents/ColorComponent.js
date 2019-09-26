import React from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from '@material-ui/core/Button';
import uuidv1 from 'uuid/v1';

const ColorComponent = ({ componentName, componentValues, classes, openComponentMenu, menuIsOpen }) => {
    // const [menuIsOpen, setMenuIsOpen] = React.useState(false);
    // console.log(openComponentMenu)
    return (
        <div className={classes.default_custom_component}>
            <div onClick={() => openComponentMenu("ColorComponent")} className={`btnWrapper  ${menuIsOpen ? classes.addBorders : ""}`}>
                {componentName.en}
                <ExpandMoreIcon className={menuIsOpen ? classes.rotateExpandBtnUp : ""} />
            </div>
            <div className={`menu_list ${!menuIsOpen ? classes.hideComponent : ""}`}>
                <div>
                    <FormGroup>
                        {
                            componentValues.map(item => {
                                return (
                                    <FormControlLabel
                                        key={uuidv1()}
                                        control={
                                            <Checkbox
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                                value={item.en}
                                            />
                                        }
                                        label={item.en}
                                    />
                                )
                            })
                        }
                        <Button variant="outlined" className="filterBtn">
                            Filter
                        </Button>
                    </FormGroup>
                </div>
            </div>

        </div>
    )
}

export default ColorComponent
