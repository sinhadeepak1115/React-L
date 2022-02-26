import React from "react";

const d = new Date();
let year = d.getFullYear()

function Footer(){
    return(
        <footer>
            © {year}            
        </footer>
    );
}
export default Footer