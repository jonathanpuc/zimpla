import gamora from '../img/gamora.png'
import drax from '../img/drax.jpg'
import groot from '../img/groot.jpeg'
import rocket from '../img/rocket.png'
import profile from '../img/starlord.png'

export const mockGroup = {
    id: '2qyFiq94hbnQ92',
    name: 'Guardians of the Galaxy',
    description: 'Kick Galaxy butt',
    members: [
        {
            name: 'Starlord',
            photo: profile
        },
        {
            name: 'Gamora',
            photo: gamora
        },
        {
            name: 'Drax',
            photo: drax
        },
        {
            name: 'Groot',
            photo: groot
        },
        {
            name: 'Rocket',
            photo: rocket
        },
    ],
    goals: [
        {
            createdAt: '05/10/2001',
            createdBy: 'Rocket',
            completed: true,
            description: 'Find nappies for Groot',
            deadline: '02/11/2001',
            comments: [
                {
                    publishedBy: 'Gamora',
                    date: '24/11/2001',
                    text: "We're using this to set goals, not manage chores!"
                },
                {
                    publishedBy: 'Rocket',
                    date: '25/11/2001',
                    text: 'Bite me, what size is Groot?'
                },
                {
                    publishedBy: 'Groot',
                    date: '26/11/2001',
                    text: 'I am Groot'
                },
                {
                    publishedBy: 'Drax',
                    date: '26/11/2001',
                    text: 'He is an extra large'
                },
                {
                    publishedBy: 'Rocket',
                    date: '26/11/2001',
                    text: "What, no he isn't"
                },
                {
                    publishedBy: 'Gamora',
                    date: '27/11/2001',
                    text: "XS should be fine"
                },
            ]
        },
        {
            createdAt: '05/10/2001',
            createdBy: 'Starlord',
            completed: true,
            description: 'I am Groot',
            deadline: '15/05/2001',
            comments: [
                {
                    publishedBy: 'Groot',
                    date: '26/04/2001',
                    text: "I am Groot"
                },
                {
                    publishedBy: 'Groot',
                    date: '05/05/2001',
                    text: "I am Groot"
                },
                {
                    publishedBy: 'Rocket',
                    date: '10/05/2001',
                    text: "You better get this one done soon Groot, times a runnin"
                },
                {
                    publishedBy: 'Groot',
                    date: '10/05/2001',
                    text: "!!!!!!!"
                },
            ]
        },
        {
            createdAt: '07/02/2002',
            createdBy: 'Drax',
            completed: false,
            description: 'Find and destroy Thanos',
            deadline: '15/05/2001',
            comments: [
                {
                    publishedBy: 'Starlord',
                    date: '17/01/2001',
                    text: 'Thats a big goal you got there buddy'
                },
                {
                    publishedBy: 'Rocket',
                    date: '17/01/2001',
                    text: "Insane right? Better chance of running into a Norse god."
                }
            ]
        }
    ],
    messages: [
        {
            publishedBy: 'Starlord',
            text: "What's for Lunch?"
        },
        {
            publishedBy: 'Drax',
            text: 'The blood of Thanos I hope'
        },
        {
            publishedBy: 'Rocket',
            text: "Uhh yeahh I'll stick with carrots"
        },
        {
            publishedBy: 'Gamora',
            text: 'Seriously, can we start using this app appropriately?!'
        }
    ]
}