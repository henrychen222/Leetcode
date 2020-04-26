const minNumberOfFrogs = (croakOfFrogs) => {
    
    for (let i = 0; i < croakOfFrogs.length; i++) {
        if (croakOfFrogs.substring(croakOfFrogs[i], croakOfFrogs[i+5])) {
        }
        
    }
    
};

const main = () => {
    croakOfFrogs = "croakcroak";
    croakOfFrogs2 = "crcoakroak";
    croakOfFrogs3 = "croakcrook";
    croakOfFrogs4 = "croakcroa";

    console.log(minNumberOfFrogs(croakOfFrogs))
    console.log(minNumberOfFrogs(croakOfFrogs2))
    console.log(minNumberOfFrogs(croakOfFrogs3))
    console.log(minNumberOfFrogs(croakOfFrogs4))
}

main()