import { Grid } from "../models/Grid";
import { LawnMower } from "../models/LawnMower";
import * as fs from 'fs';
import { GridDataType, InstructionType, OrientationType } from "../@types";

export function getGridFromInputFile(filePath: string): Promise<Grid> {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if(err) throw reject(err);
            const arr = data.toString().replace(/\r\n/g,'\n').split('\n');

            const gridData: GridDataType = [];
            for(let i = 1; i < arr.length; i=i+2) {
                const lawnMowerState = arr[i].split(' ');
                const lawnMower = new LawnMower(
                    parseInt(lawnMowerState[0]),
                    parseInt(lawnMowerState[1]),
                    lawnMowerState[2] as OrientationType
                );
                gridData.push({ lawnMower, instructions: arr[i+1].split('') as InstructionType[]});
            }
            const gridDimensions = arr[0].split(' ');
            const grid =  new Grid(
                parseInt(gridDimensions[0]), 
                parseInt(gridDimensions[1]),
                gridData
            );

            resolve(grid);
        });
    });
}