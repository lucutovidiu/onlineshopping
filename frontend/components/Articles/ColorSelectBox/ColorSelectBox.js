import React from 'react';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import uuidv1 from 'uuid/v1';

function getColorsReacyArray(colors) {
    return colors.map((item, key) => {
        if (key === 0) return { colorName: item, isSelected: true }
        else return { colorName: item, isSelected: false }
    })
}

const ColorSelectBox = ({ colors }) => {
    const [selectedColor, setSelectedColor] = React.useState(getColorsReacyArray(colors))

    function handleDifferentColor(colorName) {
        setSelectedColor(color => {
            return color.map(item => {
                if (item.colorName === colorName) {
                    item.isSelected = true;
                    return item;
                } else {
                    item.isSelected = false;
                    return item;
                }
            })
        })
    }

    return (
        <div className="main_wrapper" >
            {
                selectedColor.map(color => {
                    return (
                        <div onClick={() => handleDifferentColor(color.colorName)} key={uuidv1()} className="color_box_wrapper"><div className="color_inner" style={{ backgroundColor: color.colorName }}></div>
                            {
                                color.isSelected && <div className="cheking_box"><CheckBoxIcon /></div>
                            }
                        </div>
                    )
                })
            }


            <style jsx>{`
                .main_wrapper{
                    display:flex;
                }
                .color_box_wrapper{
                    position:relative;
                    outline:1px solid gray;
                    width:34px;
                    height:34px;
                    margin:0.5rem 0.5rem;
                    display:flex;
                    justify-content:center;
                    align-items:center;                    
                }
                .color_inner{                    
                    width:24px;
                    height:24px;
                    border:1px solid gray;
                }
                .cheking_box{
                    position:absolute;
                    // border:1px solid gray;
                    width:15px;
                    height:15px;
                    bottom:5px;
                    right:5px;
                }
            `}
            </style>
        </div>
    )
}

export default ColorSelectBox
