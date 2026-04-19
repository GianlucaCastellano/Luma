import express from "express";
import figlet from "figlet";
import chalk from "chalk"

const app = express();


app.listen(3000, () => {
    console.log(chalk.red("========================================================================================================================================================"));
    console.log(chalk.red(figlet.textSync("Luma API running on Port 3000")));
    console.log(chalk.red("========================================================================================================================================================"));
})