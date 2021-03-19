import React, { useEffect, useRef } from 'react';
import vorple from "vorple";
import { Row } from "antd";
import { Address, AddressInput } from "../components";

import "vorple/lib/css/vorple.css";
//May need to delete this file. Ideally Vorple should be a view but still trying to
//Get it to work as component first

export default function Vorple2( address, vorpAddress, userProvider, mainnetProvider, localProvider) {
    // Reference to the element we use as the interpreter container
    const containerRef = useRef(null);
    let isRightAddress = false;
    let userAddress = Address;

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


    if (userAddress == vorpAddress) {
        isRightAddress = true;
        return (
            <Row align="middle">
                    <vorple-section>
                        <div class="vorple-content">
                            <div class="vorple-box">
                                <section>                                    
                                    <div ref={containerRef} />
                                </section>
                            </div>
                        </div>
                    </vorple-section>
            </Row>
        )
    } else { 
        isRightAddress = false;
        return (
            <Row align="middle">
                console.log("failed")
                    <section>
                        failed
                    </section>
            </Row>
        )
    }

    
}
