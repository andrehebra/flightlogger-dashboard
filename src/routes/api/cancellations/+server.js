import { AUTH_TOKEN } from "$env/static/private"

const data = JSON.stringify({
    query: `bookings(all: true) {
        nodes {
          ... on SingleStudentBooking {
            student {
              firstName
              lastName
            }
            instructor {
              firstName
              lastName
            }
            startsAt
            endsAt
            cancellation {
              comment
              id
              title
              user {
                callSign
              }
            }
            
          }
        }
      }`,
  });

const options = {
    hostname: 'api.flightlogger.net',
    path: '/graphql',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + AUTH_TOKEN,
    },
};

const req = https.request(options, (res) => {
    let data = '';
    console.log(`statusCode: ${res}`);
  
    res.on('data', (d) => {
      data += d;
    });
    res.on('end', () => {
      console.log(data);
    });
  });

export async function POST() {
    
}