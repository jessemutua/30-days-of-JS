const stockMarketByIndustry = {
    technology: [{
            marketName: "Nasdaq",
            marketMembers1: ["ASML", "NVIDIA", "MSFT", "TSL"]
        },
        {
            marketName: "fortune500",
            marketMembers1: ["Berkshire", "JPMorgan", "BlackRock"]
        }
    ]
}

stockMarketByIndustry['technology'][1]['marketName'] = 'vetureCaptalists'
stockMarketByIndustry['technology'][1]['marketName']
stockMarketByIndustry['technology'].unshift({
    marketName: "Jesse",

    marketMembers1: ["Appl"]
})
console.log(stockMarketByIndustry['technology'])
const board = [
    ['X', 'O', ' '],
    [' ', 'X', 'O'],
    ['X', ' ', 'O']
];
console.log(board)