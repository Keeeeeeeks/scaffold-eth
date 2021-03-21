import React, { useEffect, useRef } from 'react';
import vorple from "vorple";
import { Address } from "../components";

const fs = require('fs');
const VFS = vorple.file.getFS();

export default function VorpSave () {
    let savefile = []
    let transcriptFile = []

    VFS.readdir( vorple.file.SAVEFILE_PATH, (error, savepath) => {
    // The result is an array of files in the directory,
    // in this case directories that contain the save files

    // The actual path of the save files, assuming there's only one directory
        const path = `${vorple.file.SAVEFILE_PATH}/${savepath[0]}`;

        // Read each save file
        VFS.readdir( path, (error, savefiles) => {
            savefiles.forEach( filename => {
            VFS.readFile( path + "/" + filename, (error, contents) => {
                console.log(filename)
                fs.writeFile("Savefile_" + filename + "".txt, contents,)

                // do something with the file here
                // contents is a Uint8Array


                //Also do something with transcripts


            

            });
            });
        });
    });

    //need a function that takes the transcript, and turns it into an object, then makes it into a transaction on-chain
    fs.readdir( vorple.file.TRANSCRIPT_PATH, function( files, transcriptFile ) {
        // "files" now contains the list of saved transcripts
        for( let i = 0; i < files.length; ++i ) {
            fs.readFile( 
                vorple.file.path( files[ i ], vorple.file.TRANSCRIPT_PATH ),
                "utf8",
                function( error, contents ) {
                    console.log( "Transcript file " + files[ i ] + " contains " + contents );
                    fs.writeFile("transcript file" + files[ i ] + "".txt, contents)

                }
            );
        }
    });
}