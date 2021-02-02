/*
4- make a function that calculate the sum of "campaignActiveCreators_aggregate.aggregate.count" value in each location
i.e. the output should be something like
{
    "WW": 241,
    "GG": 841,
}
 */

const givenCampaigns = require('../q3.json')


const findSumOfCampaignActiveCreatorsCount = givenCampaigns => {
    const result = {}
    givenCampaigns.forEach(campaign => {
        if (campaign.location) { // to remove null locations
            // to set initial value
            result[campaign.location] = result[campaign.location] || campaign.user.campaignActiveCreators_aggregate.aggregate.count || 0
            result[campaign.location] += campaign.user.campaignActiveCreators_aggregate.aggregate.count
        }
    })
    return result;
}

console.log(findSumOfCampaignActiveCreatorsCount(givenCampaigns))

