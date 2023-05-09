const t = [
  {
    gcNumber: 101,
    gcEmail: '101@gc.edu.gm',

    firstName: 'A',
    minit: '',
    lastName: 'Kamariana',
    photo: '/',
    dob: '',

    contacts: {
      primaryPhone: '293-2091',
      secondaryPhone: '293-2091',
    },

    studies: [
      {
        school: 'School of Nursing and Midwifery',
        programme: {
          name: 'Higher National Diploma in Midwifery',
          tuition: 10000, // have a copy here, like p price in case when it is change
          duration: 3,
          major: ['English', 'Mathematics'], // two from the list of majors or null for other schools
        },
        status: 'Active', // ENUM of student status [Active, Graduated, Transfer, Suspended, Expel]
        service: 'In Service', // Should be an ENUM
        admitted: 2021,
        completed: null, // when student finish it should be year. eg 2024

        classification: 'Year 1', // example year 1 :: classification could be based on creditHours completed
        class: 'A', // This either group or class
        cumGpa: 3.5,
        cumGpaClass: 'CUM LAUDE', // ENUM // base on calculations
        totalCredits: 120, // Credit hours earned
        rankInClass: 13,
        rankInBadge: 24,

        records: [
          {
            academicYear: '2022-2023',
            year: 2022,
            semesters: [
              {
                semester: 1,
                startDate: 'date',
                endDate: 'date',
                totalCredit: 34,
                totalPoint: 35,
                gpa: 2.5,
                courses: [
                  {
                    code: '1231',
                    course: 'Introduction to Midwifery',
                    credit: 3,
                    point: 4.0,
                    mark: 85,
                    grade: 'A', // computed value from score but should be fixed
                  },
                  {
                    code: '3423',
                    course: 'Human Reproduction',
                    credit: 3,
                    point: 4.0,
                    mark: 76,
                    grade: 'B', // computed value from score but should be fixed
                  },
                ],
              },
            ],
          },
        ],
      },
    ],

    //payments: [Payment]
  },
];

console.log(t);
