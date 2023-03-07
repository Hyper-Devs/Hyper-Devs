import React from 'react'
import SideNavBar from '../../Components/Sidebar'

function Override() {
    const styles = {
        contentDiv: {
        display: "flex",
    },
    contentMargin: {
        marginLeft: "10px",
        width: "90%",
    },
    };
    return (
    <>
    <div style={styles.contentDiv}>
        <SideNavBar></SideNavBar>
        <div style={styles.contentMargin}>
        <h1 style={{ padding: "0%" }}>This is Content Area</h1>
        </div>
    </div>
    </>
    );
}

export default Override