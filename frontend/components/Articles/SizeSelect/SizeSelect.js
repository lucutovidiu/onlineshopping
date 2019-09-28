import React from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Select, MenuItem } from "@material-ui/core"
import uuidv1 from 'uuid/v1';

function getFirstAvailableSize(sizes) {
    return sizes.find(size => size.available === true)
}

const SizeSelect = ({ sizes }) => {
    const [selectedSize, setSelectedSize] = React.useState(getFirstAvailableSize(sizes).size);
    function notifyWhenAvailable(size) {
        console.log(size)
    }
    function handleSelectChange(e) {
        // console.log(e)
        setSelectedSize(e.target.value)
    }
    return (
        <>
            <div className="size_select_wrapper">
                <Select
                    value={selectedSize}
                    onChange={handleSelectChange}
                    style={{ width: "99%" }}
                // inputProps={{
                //     name: 'age',
                //     id: 'age-helper',
                // }}
                >
                    {
                        sizes.map(size => {
                            return <MenuItem disabled={!size.available} key={uuidv1()} value={size.size}>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "99%" }}>
                                    <span>{size.available ? size.size : <strike>{size.size}</strike>}</span>
                                    {
                                        !size.available && (
                                            <div style={{ display: "flex", alignItems: "center", position: "absolute", right: "10px" }} onClick={() => notifyWhenAvailable(size.size)}>
                                                <MailOutlineIcon />&nbsp;Get Notified
                                             </div>
                                        )
                                    }
                                </div>
                            </MenuItem>
                        })
                    }
                </Select>
            </div>
            <style jsx>{`
                .size_select_wrapper{
                    padding:0.5rem 0 0 0;
                    
                }
            `}
            </style>
        </>
    )
}

export default SizeSelect
