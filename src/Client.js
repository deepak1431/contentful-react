import * as contentful from 'contentful'

export const Client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID='ys0prbv263bi',
    accessToken: process.env.REACT_APP_ACCESS_TOKEN='_OSqewVbdEWu2fKTBMHIiLq7r7Q-P9pSMKsHL5xHMcA'
})