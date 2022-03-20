const express = require("express");
var cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;

var whitelist = [
  "http://localhost:3000/",
  "http://example1.com",
  "http://example2.com",
];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.get("/", cors(corsOptions), function (req, res, next) {
  res.send({ msg: "This is CORS-enabled for a whitelisted domain." });
});

app.get("/json", cors(corsOptions), function (req, res, next) {
  res.json({
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
  });
});

app.listen(PORT, function () {
  console.log("CORS-enabled web server listening on port 80");
});
