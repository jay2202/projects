import React from 'react'

function Inpu() {
    const sty = {
        borderRadius: "25px",
         height:"2rem"
    }
    return (
        <div sytle="size:4rem;">
        <input type="text" style={sty} value="add here" />
            <button href="#" ><i class="fa fa-plus-circle" aria-hidden="true" /></button>
        </div>
    )
}

export default Inpu;