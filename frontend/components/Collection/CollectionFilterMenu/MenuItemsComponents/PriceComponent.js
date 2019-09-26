import React from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormGroup from '@material-ui/core/FormGroup';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const PriceComponent = ({ componentName, componentValues, classes, openComponentMenu, menuIsOpen }) => {
    // const [menuIsOpen, setMenuIsOpen] = React.useState(false);
    // console.log(componentValues)
    return (
        <div className={classes.default_custom_component}>
            <div onClick={() => openComponentMenu("PriceComponent")} className={`btnWrapper  ${menuIsOpen ? classes.addBorders : ""}`}>
                {componentName.en}
                <ExpandMoreIcon className={menuIsOpen ? classes.rotateExpandBtnUp : ""} />
            </div>
            <div className={`menu_list ${!menuIsOpen ? classes.hideComponent : ""}`}>
                <div style={{ marginRight: "1rem" }}>
                    <FormGroup>
                        <TextField
                            id="standard-number"
                            label={componentValues.labelFrom.en}
                            // value={values.age}
                            // onChange={handleChange('age')}
                            type="number"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                        />
                        <TextField
                            id="standard-number"
                            label={componentValues.labelTo.en}
                            // value={values.age}
                            // onChange={handleChange('age')}
                            type="number"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                        />
                        <Button variant="outlined" className="filterBtn">
                            {componentValues.filterBtn.en}
                        </Button>
                    </FormGroup>
                </div>
            </div>

        </div>
    )
}

export default PriceComponent
