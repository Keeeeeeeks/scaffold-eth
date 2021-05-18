import React, { useEffect, useRef } from 'react';
import vorple from "vorple";
import { Row } from "antd";

import Web3Modal from "web3modal";
//import { useExchangePrice, useGasPrice, useUserProvider, useContractLoader, useContractReader, useEventListener, useBalance } from "../hooks";
import { Account, Address } from "../components";
import {wikipedia_query, jump, wiki} from "../books/everything.js"
import "vorple/lib/css/vorple.css";

/* ****TODO:********
1. [DONE, window. errthang] Figure out how to call external JS files in the story
2. Figure out how to call JS modules in the story
3. Figure out how to save and reload state to and from on-chain
4. Figure out how to replicate Snapshot
5. Fix scrolling UI issue
6. 
7. Write a good story
*/

var storyFile1 = toString("../books/3AW4.ulx");
//import "../books/everything.js";
//May need to delete this file. Ideally Vorple should be a view but still trying to
//Get it to work as component first


//window.jump = jump;
window.wikipedia_query = wikipedia_query;
window.jump = jump;
window.wiki = wiki;
window.addresss = Address.address;
window.storyFile1 = storyFile1;

function checkAdd() {
    return (window.address);
};

function addressTest() {
    return window.addresss;
};

export default function Vorple2( address, vorpAddress, userProvider, mainnetProvider, localProvider, storyFile1) {
    // Reference to the element we use as the interpreter container
    const containerRef = useRef(null);
    const FS = vorple.file.getFS();


    useEffect(() => {
        if( containerRef ) {
            vorple.options = {
                // URL to the game file
                story: "3AW4.ulx",
                //story: "../src/books/3AW4.ulx",
                //story: storyFile1,

                // Container for the interpreter
                /* The HTML element where the interpreter is placed. It can be a DOM element or 
                a selector as a string (e.g. "#vorple"). The element must exist in the DOM 
                at the time when vorple.init() is called. If left out, defaults to the 
                element with the id vorple. If that element doesn't exist, 
                the interpreter is placed at the end of the page.
                */
                container: containerRef.current,

                use_proxy: "auto",

                proxy_url: storyFile1
            };
            vorple.init();
        } 
    }, [ containerRef ]);


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
                        <div class="push">

                        </div>
                    </vorple-section>
            </Row>
        )


}