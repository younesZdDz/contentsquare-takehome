import { Grid } from "../models/Grid";
import { LawnMower } from "../models/LawnMower";
import * as fs from 'fs';
import { InstructionType, OrientationType } from "../@types";

export function getGridFromInputFile(filePath: string): Promise<Grid> {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if(err) throw reject(err);
            const arr = data.toString().replace(/\r\n/g,'\n').split('\n');

            const lawnMowers: LawnMower[] = [];
            for(let i = 1; i < arr.length; i=i+2) {
                const lawnMowerData = arr[i].split(' ');
                const lawnMower = new LawnMower(
                    parseInt(lawnMowerData[0]),
                    parseInt(lawnMowerData[1]),
                    lawnMowerData[2] as OrientationType,
                    arr[i+1].split('') as InstructionType[]
                );
                lawnMowers.push(lawnMower);
            }
            const gridData = arr[0].split(' ');
            const grid =  new Grid(
                parseInt(gridData[0]), 
                parseInt(gridData[1]),
                lawnMowers
            );

            resolve(grid);
        });
    });
}
