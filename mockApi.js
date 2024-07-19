export const mockFetchEvents = () => {
    return [
        {
            id: 1,
            name: 'Art show  🎨 ',
            organizer: 'Olivia Adams',
            date: 'Monday, Nov 13 2023',
            time: '6:00 PM - 10:00 PM',
            address: 'Lower Manhattan',
            totalTickets: 100,
            remainingTickets: 78,
            totalInvited: 120,
            minTicketPrice: 10.55,
            maxTicketPrice: 50.00,
            description: "Come join me in celebrating my 25th birthday! I can't wait to celebrate with all of you, so let's make it a night to remember. See you at the party!"
        },
        {
            id: 2,
            name: 'Art show 2 🎨 ',
            organizer: 'John Doe',
            date: 'Monday, Nov 14 2023',
            time: '6:00 PM - 10:00 PM',
            address: 'Lower Manhattan',
            totalTickets: 100,
            remainingTickets: 95,
            totalInvited: 70,
            minTicketPrice: 10.00,
            maxTicketPrice: 50.00,
            description: "Come join me in celebrating my 42nd birthday! I can't wait to celebrate with all of you, so let's make it a night to remember. See you at the party!"
        },
    ];
};
export const mockFetchQuestions = () => {
    return [
        {
            id: 1,
            type: 1,
            question: 'Company/Organization',
        },
        {
            id: 2,
            type: 1,
            question: 'Job Title',
        },
        {
            id: 3,
            type: 2,
            question: 'Are you a current student?',
            options: ['Yes', 'No']
        },
        {
            id: 4,
            type: 3,
            question: 'Where did you hear about this event?:',
            options: ['LinkedIn', 'Instagram', 'Twitter', 'Facebook']
        },
        {
            id: 5,
            type: 3,
            question: 'How many language(s) do you know?:',
            options: ['English', 'German', 'French', 'Spanish']
        },
    ]
};