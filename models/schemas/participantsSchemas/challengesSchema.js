const express = require('express');
const mongoose = require('mongoose');

const ChallengesSchema = mongoose.Schema({
    "challenges": {
        "damagePerMinute": {
          "type": "Number"
        },
        "goldPerMinute": {
          "type": "Number"
        },
        "kda": {
          "type": "Number"
        },
        "perfectGame": {
          "type": "Number"
        },
        "soloKills": {
          "type": "Number"
        },
        "takedowns": {
          "type": "Number"
        },
        "champExperience": {
            "type": "Number"
          },
          "championName": {
            "type": "String"
          },
          "deaths": {
            "type": "Number"
          },
          "doubleKills": {
            "type": "Number"
          },
          "goldEarned": {
            "type": "Number"
          },
          "individualPosition": {
            "type": "String"
          },
          "kills": {
            "type": "Number"
          },
          "neutralMinionsKilled": {
            "type": "Number"
          },
          "pentaKills": {
            "type": "Number"
          },
          "quadraKills": {
            "type": "Number"
          },
          "summonerId": {
            "type": "String"
          },
          "summonerLevel": {
            "type": "Number"
          },
          "summonerName": {
            "type": "String"
          },
          "teamId": {
            "type": "Number"
          },
          "teamPosition": {
            "type": "String"
          },
          "totalDamageDealtToChampions": {
            "type": "Number"
          },
          "tripleKills": {
            "type": "Number"
          },
          "visionScore": {
            "type": "Number"
          },
          "win": {
            "type": "Boolean"
          }
        }
});