// AppWrapper.jsx
import React, { useState, useLayoutEffect } from "react";
import './AppWrapper.css';

function AppWrapper({ children }) {
    const [ready, setReady] = useState(false);

    useLayoutEffect(() => {
        const waitForAssets = async () => {
            // Wait for fonts to load
            await document.fonts.ready;

            // Wait for hero image (optional: only if critical)
            const heroImg = document.querySelector("img.hero");
            if (heroImg && !heroImg.complete) {
                await new Promise((resolve) => {
                    heroImg.addEventListener("load", resolve);
                });
            }

            // Now it's ready to show the app
            setReady(true);
        };

        waitForAssets();
    }, []);

    if (!ready) {
        return (
            <div style={loaderStyle}>
                <span>Loading...</span>
            </div>
        );
    }

    return children;
}

const loaderStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5rem",
    fontFamily: "sans-serif",
};

export default AppWrapper;
