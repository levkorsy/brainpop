//Structure===
//--Title(quiz, movie, etc.)
//------Options ({})
//---------------score: Boolean
//---------------zoom: Boolean
// Better to use classes with constructor

export const ActivityTypes = [
    {
        title: 'all_work',
        options: {
            score: false,
            zoom: false
        }
    },
    {
        title: 'movie',
        options: {
            score: false,
            zoom: false
        }
    },
    {
        title: 'quiz',
        options: {
            score: true,
            zoom: true
        }
    },
    {
        title: 'easy_quiz',
        options: {
            score: true,
            zoom: true
        }
    },
    {
        title: 'challenge',
        options: {
            score: true,
            zoom: true
        }
    },
    {
        title: 'make_a_map',
        options: {
            score: false,
            zoom: true
        }
    }, {
        title: 'make_a_movie',
        options: {
            score: false,
            zoom: true
        }
    },
    {
        title: 'wordplay',
        options: {
            score: false,
            zoom: true
        }
    },
    {
        title: 'related_reading',
        options: {
            score: false,
            zoom: false
        }
    },
    {
        title: 'draw_about_it',
        options: {
            score: false,
            zoom: true
        }
    },
];



