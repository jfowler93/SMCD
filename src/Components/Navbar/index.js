import React from "react"
import Logo from "../../Assets/Images/SMCD logo.png"

function Navbar(props) {
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <p class="navbar-brand">
                    <img src={Logo} width="30" height="30" class="d-inline-block align-top" alt="" />
                    Sunday Morning Coming Down</p>
            </nav>
        </div>
    )
}

export default Navbar;