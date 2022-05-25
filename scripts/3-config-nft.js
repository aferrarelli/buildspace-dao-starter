import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x282fF6f220e27435EB3dCd437e85C6eA9959efBd");

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: "Penne Rigate",
                description: "This NFT will give you access to PastaDAO!",
                image: readFileSync("scripts/assets/Pasta.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})();