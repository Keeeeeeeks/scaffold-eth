import React, { useEffect, useRef } from 'react';
import vorple from "vorple";
import "vorple/lib/css/vorple.css";

export default function VorpleInit() {
    // Reference to the element we use as the interpreter container
    const containerRef = useRef(null);
  
    useEffect(() => {
        if( containerRef ) {
            vorple.options = {
                // URL to the game file
                story: "mar11.ulx",

                // Container for the interpreter
                container: containerRef.current
            };
            vorple.init();
        }
    }, [ containerRef ]);

    return (
        <div ref={containerRef} />
    );
}