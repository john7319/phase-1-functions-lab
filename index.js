// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
    if (blockNumber > 42){
        return (blockNumber - 42);
    }
    else{
        return (42- blockNumber);
    }
}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);


function distanceFromHqInFeet(values){
        const distance = distanceFromHqInBlocks(values);  
        const rate = 264;
        return (distance * rate);
}

distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(start, destination){
    if (destination > start){
        const distanceInBlocks = destination - start
        return distanceInBlocks * 264
    }
    else{
        const distance = start - destination;
        return distance * 264;
    }

    
}

function calculatesFarePrice(start, destination){
    const distanceInBlocks = Math.abs((destination - start)) * 264;
    const EditdistanceInBlocks = distanceInBlocks - 400
    if (distanceInBlocks <= 400){
        return 0;
    }
    else if (distanceInBlocks>400 && distanceInBlocks<=2000){
        return (EditdistanceInBlocks * 0.02);
    }
    else if (distanceInBlocks > 2000 && distanceInBlocks <= 2500){
        return 25;
    }
    else if (distanceInBlocks > 2500){
        return "cannot travel that far"
    }
}