console.log("This is tutorial 49");

let regex = /harry/;
let str = "harry bhai";

    regex = /\war/;         // word character => underscore(_) or alphabet or numbers
    //regex = /\wart/;
    regex=/\w+d1r/;         // \w+ means one or more word character

    regex=/\Wbhai/;         // \W non word character
    regex=/\W+bhai/;        // \W+ more than one non word character


    regex=/\d999/;          // \d means digit
    regex=/number \d999/;
    regex=/number \d+999/;  // \d+ means more than one digit

    regex=/\D999/;          // \D means non digit
    regex=/\D+999/;         // \D+ means more than one non digit


    regex=/\ska number/;          // \s means match whitespace 
    regex=/\s+ka number/;          // \s+ means match one or more than one whitespace 

    regex=/\Ska number/;          // \S means match non whitespace
    regex=/\S+ka number/;          // \S means match one or more than one non whitespace


    regex=/4r5r\b/;                  // \b means word boundry


    //Assertions-----------
    regex=/h(?=y)/;
    regex=/h(?!y)/;

    str = "harhar1r4r5r bhai";
    str = "*arha7rd1r4r5r bhai";
    str = "*harha7rd1r4r5r bhai";
    str = "harha%7rd1r4r5r bhai";
    str = "harha%7rd1r4r5r %%$@bhai";
    str = "harha%7rd1r4r5r %%$@bhai harry ka number 9999999999";
    str = "harha%7rd1r4r5r %%$@bhai harry ka number 8999999999";
    str = "harha%7rd1r4r5r %%$@bhai harry ka number 899999 9999";
    str = "harha%7rd1r4r5r %%$@bhai harry ka number 899999harry9999";
    str = "harha%7rd1r4r5r %%$@bhai harry\tka number 899999harry9999";
    str = "harha%7rd1r4r5r %%$@bhai harry        ka number 899999harry9999";
    str = "harha%7rd1r4r5r %%$@bhai harry ka number 899999harry9999";
    str = "harha%7rd1r4r5ry%%$@bhai harryika number 899999harry9999";
    str = "harha%7rd1r4r5ry%%$@bhai hyrryika number 899999harry9999";
    str = "harha%7rd1r4r5ry%%$@bhai hdrryika number 899999harry9999";
    str = "harha%7rd1r4r5ry%%$@bhai hdrryika number 899999harry9999";

    


    let result = regex.exec(str);
    console.log("the result from exec is :", result);

    if (regex.test(str)) {
    console.log(`the string ${str} matches the expressions ${regex.source}`);
    }
    else {
    console.log(`the string ${str} does not match the expressions ${regex.source}`);
    }