const data = {
  success: true,
  data: [
    {
      title: "Course 1",
      img: "https://picsum.photos/id/0/1000/1200",
      coursePrice: 3000,
      currency: "inr",
      duration: "1hr",
    },
    {
      title: "Course 2",
      img: "https://picsum.photos/id/0/1000/1200",
      coursePrice: 4000,
      currency: "inr",
      duration: "1hr",
    },
    {
      title: "Course 3",
      img: "https://picsum.photos/id/0/1000/1200",
      coursePrice: 3000,
      currency: "inr",
      duration: "1hr",
    },
    {
      title: "Course 4",
      img: "https://picsum.photos/id/0/1000/1200",
      coursePrice: 9000,
      currency: "inr",
      duration: "1hr",
    },
    {
      title: "Course 5",
      img: "https://picsum.photos/id/0/1000/1200",
      coursePrice: 1000,
      currency: "inr",
      duration: "1hr",
    },
    {
      title: "Course 6",
      img: "https://picsum.photos/id/0/1000/1200",
      coursePrice: 13000,
      currency: "inr",
      duration: "1hr",
    },
    {
      title: "Course 7",
      img: "https://picsum.photos/id/0/1000/1200",
      coursePrice: 35000,
      currency: "inr",
      duration: "1hr",
    },
    {
      title: "Course 8",
      img: "https://picsum.photos/id/0/1000/1200",
      coursePrice: 34000,
      currency: "inr",
      duration: "1hr",
    },
  ],
};

const meetings = {
  data: {
    Buildings: [
      {
        id: 1,
        name: "Building 8",
        meetingRooms: [
          {
            name: "Punjab",
            meetings: [
              {
                title: "Booked for Interview",
                date: "13/02/2019",
                startTime: "19:00",
                endTime: "20:00",
              },
            ],
          },
          {
            name: "Ganga",
            meetings: [
              {
                title: "Booked for Interview",
                date: "13/02/2019",
                startTime: "19:00",
                endTime: "20:00",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Building 4",
        meetingRooms: [],
      },
      {
        id: 3,
        name: "Building 6",
        meetingRooms: [],
      },
    ],
    MeetingRooms: [
      {
        id: 1,
        name: "Punjab",
        floor: 7,
        building: {
          name: "Building 8",
        },
        meetings: [
          {
            id: 1,
            title: "Booked for Interview",
            date: "13/02/2019",
            startTime: "19:00",
            endTime: "20:00",
          },
        ],
      },
      {
        id: 1,
        name: "Ganga",
        floor: 8,
        building: {
          name: "Building 8",
        },
        meetings: [
          {
            id: 1,
            title: "Booked for Interview",
            date: "13/02/2019",
            startTime: "19:00",
            endTime: "20:00",
          },
        ],
      },
    ],
    Meetings: [
      {
        id: 1,
        title: "Booked for Interview",
        date: "13/02/2019",
        startTime: "19:00",
        endTime: "20:00",
      },
    ],
  },
};

module.exports = {
  data,
  meetings,
};
