const  crawelPage = require("./craweler");

function main() {
    if(process.argv.length < 3) {
        console.log("No website provoided");
        process.exit(1);
    };

    if(process.argv.length > 3) {
            console.log("No website provoided");
            process.exit(1);
    };
    
    const baseUrl = process.argv[2]
    console.log(`Craweleing website: ${baseUrl}`)
    crawelPage(baseUrl);
};


main();