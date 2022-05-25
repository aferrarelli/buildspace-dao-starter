import sdk from "./1-initialize-sdk.js";

// This is the address of our ERC-20 contract printed out in the step before.
const token = sdk.getToken("0x12021eE06F9Db357F41CeF7191FB1afA55169d4a");

(async () => {
    try {
        // What's the max supply you want to set? 1,000,000 is a nice number!
        const amount = 1000000;
        // Interact with your deployed ERC-20 contract and mint the tokens!
        await token.mintBatchTo([{ toAddress: "0xBA18a5a6d2E96475b942a697F332Cba2Ac1d1E8d", amount: amount }]);
        const totalSupply = await token.totalSupply();

        // Print out how many of our token's are out there now!
        console.log("✅ There now is", totalSupply.displayValue, "$PENNE in circulation");
    } catch (error) {
        console.error("Failed to print money", error);
    }
})();