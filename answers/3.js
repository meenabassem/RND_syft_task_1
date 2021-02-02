/*
3- make a function that find the object having the largest "campaignActiveCreators_aggregate.aggregate.count" value in each "location"
i.e. the output should be something like
{
    "WW": 41,
    "GG": 51,
}
 */

const givenCampaigns = require('../q3.json')


const findLargestActiveCreatorsCount = givenCampaigns => {
    const result = {}
    givenCampaigns.forEach(campaign => {
        if(campaign.location){ // to remove null locations
            result[campaign.location] = result[campaign.location] || campaign.user.campaignActiveCreators_aggregate.aggregate.count || 0
            if (campaign.user.campaignActiveCreators_aggregate.aggregate.count > result[campaign.location]) {
                result[campaign.location] = campaign.user.campaignActiveCreators_aggregate.aggregate.count
            }
        }
    })
    return result;
}

console.log(findLargestActiveCreatorsCount(givenCampaigns))

