const { BlogPost } = require("../models");

const blogpostData = [
  {
    title: "Always Keep a Spare Computer in your House",
    body: "The best tip I can give to a new coder is to always keep a spare computer (maybe two) in your house. When you are learning to code, you will inevitably start to rage. If you can't solve the bugs, then the rage will turn to blind fury and you will throw your computer out the window. But after you have calmed yourself with a bottle of tequila, you will be ready to get back to work. That is when you will be glad you have a spare computer!",
    blogger_id: 1,
  },
  {
    title: "Mouses or Mice?",
    body: "I have recently been trying to make myself sound more intelligent. When talking to my coworkers, I always avoid talking about the number of mous....the number of mic....the plural word for mouse. I'm not sure which word to use and it is a hot topic at work. Please tell me the correct word to use so I can impress the ladi...um, coworkers.",
    blogger_id: 2,
  },
  {
    title: "I Have Bugs",
    body: "My mom told me that my computer had bugs. I have taken the entire thing apart and sprayed it down with bug spray. I still haven't seen any bugs come out. I am soaking all the pieces in a tub of warm, soapy water but if that doesn't work I need suggestion. Please advise!",
    blogger_id: 3,
  },
  {
    title: "I Picked My Nose During a Live Stream",
    body: "I love to live stream Fortnight and trash talk little kids. Last week, while I was suffering from allergies, I forgot I was on camera and I picked my nose. One of the little dweebs I was trash talking saw it and now they are calling me 'BoogerMan'. Please follow me on twitch and help me smack talk these kids so they will quit bullying me.",
    blogger_id: 4,
  },
  {
    title: "Temu-Anonymous",
    body: "My husband has been complaining that I spend too much money on Temu. He told me I had to quit so I am looking for a support group to help me sneak around and hide my spending from my husband. Please meet me Tuesday at 7:30 pm in the basement at 602 Elm Street if you would like to hide your spending from your husband too! We can sneak money to get prepaid credit cards and then have our packages shipped to this address. They will never know.",
    blogger_id: 5,
  },
  {
    title: "I Would Rather Be Fishing",
    body: "My wife has a terrible spending habit thanks to Temu. She always tells me she is saving money but she is buying things that we will never use. I mean, who really needs a Creative Human Face Watermelon Keychain for the key to the shed? Because of her spending, I am stuck working overtime and I would rather be fishing. How can I get her to stop?",
    blogger_id: 6,
  },
  {
    title: "Online Line Dancing--Live Stream",
    body: "Howdy Ya'll! I am hosting an online line dancing party tonight at 6:00 pm. The hubs and I will be showing you how to boogie and groove all night long (at least until 8:30). We are looking for spicy seniors to join our party.",
    blogger_id: 7,
  },
  {
    title: "My Wife is Crazy",
    body: "My wife has the bright idea to host an online line dancing party. I can't show my face at the local senior center after the last dance party. I can't imagine how embarrassed I will be after this party. I need to think of excuses to get out of this PRONTO...",
    blogger_id: 8,
  },
  {
    title: "howdoiworkthisthing",
    body: "mygranddaughtergotmethisnewcomputerandidontknowwhattodo",
    blogger_id: 9,
  },
  {
    title: "This Thing Isn't Working",
    body: "My granddaughter was tired of me messing up my TV with the remote. The last time she came by, she brought duct tape and completely taped up my remote so I can only press the power button and change channels. I know how to work the remote but I was lonely and would mess it up to make her visit me. I peeled the tape off but it was so sticky that the rest of the buttons will no longer work. Now I can't turn the volume up to watch my soap opera and I am lonely.",
    blogger_id: 10,
  },
];

const seedBlogPost = () => BlogPost.bulkCreate(blogpostData);
module.exports = seedBlogPost;
