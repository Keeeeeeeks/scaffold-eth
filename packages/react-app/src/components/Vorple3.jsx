import React, { useEffect, useRef } from 'react';
import vorple from "vorple";
import { Row } from "antd";
import { Address, AddressInput } from "../components";

import "vorple/lib/css/vorple.css";
//May need to delete this file. Ideally Vorple should be a view but still trying to
//Get it to work as component first

export default function Vorple2( props, address, vorpAddress, userProvider, mainnetProvider, localProvider) {
    // Reference to the element we use as the interpreter container
    const containerRef = useRef(null);
    let isRightAddress = true;
    let userAddress = props.address;

    useEffect(() => {
        if( containerRef ) {
            vorple.options = {
                // URL to the game file
                story: "mar11.ulx",

                // Container for the interpreter
                container: containerRef.current
            };
            
            //vorple.init();
        } 
    }, [ containerRef ])

    function AccessGranted() {
        <div>
            <Row align="middle">
                succeeded!
                vorple.init();
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
        </div>;
    }

    function AccessDenied() {
        <div>
            <Row align="middle">
                <section>
                    failed
                </section>
            </Row>
        </div>;
    }

    if (userAdress = vorpAddress) {
        
        return (
            {AccessGranted}
        )

    } else {
        isRightAddress = false;
            return (
            {AccessDenied}
            )
    };


    //if (userAddress == vorpAddress) {
    if (isRightAddress = true) {    
        //isRightAddress = true;
        
    } else { 
        
    }

    /*
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


    //if (userAddress == vorpAddress) {
    if (isRightAddress = true) {    
        //isRightAddress = true;
        vorple.init();
        return (
            <Row align="middle">
                succeeded!
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
                    <section>
                        failed
                    </section>
            </Row>
        )
    }*/
    
}
