import keys from "@/keys";
import { TInternship } from "@/types/internship.type";
import axios from "axios";
import { fromAddress, setKey } from "react-geocode";
setKey("AIzaSyCPZsQv-YiKjgxq7Bftx2i5J_FOUgGY00E");

const getInternships = async (rnummer: string, session: any): Promise<TInternship[]> => {
  let internships: TInternship[] = []
  if (session?.user.role === "STAGECOORDINATOR") {
    internships = (await axios(keys.NEXT_PUBLIC_URL + `/internships`)).data
  } else {
    internships = (await axios(keys.NEXT_PUBLIC_URL + `/internships/user?rnummer=${rnummer}`)).data
  }



  // const internships = [
  //   {
  //     detail: {
  //       locatie: "Paris - France",
  //       gekoppeldeStagebegeleider: {
  //         username: "john_doe",
  //         name: "John Doe",
  //         email: "john@example.com",
  //         password: "hashed_password",
  //         role: "STAGEBEGELEIDER" as TRole,
  //         accessToken: "access_token_for_john",
  //       },
  //       gekoppeldeStudent: {
  //         username: "your_name",
  //         name: "Your Name",
  //         email: "your@example.com",
  //         password: "hashed_password",
  //         role: "STUDENT" as TRole,
  //         accessToken: "access_token_for_you",
  //       },
  //       gekoppeldeStagementor: {
  //         username: "mentor_name",
  //         name: "Mentor Name",
  //         email: "mentor@example.com",
  //         password: "hashed_password",
  //         role: "STAGEMENTOR" as TRole,
  //         accessToken: "access_token_for_mentor",
  //       },
  //     },
  //     bedrijfsnaam: "Facebook",
  //     typeStage: "Bedrijfsstage",
  //     begindatum: new Date("2023-09-18T00:00:00.000Z"),
  //     einddatum: new Date("2023-10-23T00:00:00.000Z"),
  //   },
  // ];


  const internshipsWithCoords = await Promise.all(
    internships.map(async (internship) => {
      try {
        const { lat, lng } = (await fromAddress(internship.location))
          .results[0].geometry.location;
        const startDate = new Date(internship.startDate);
        const endDate = new Date(internship.endDate)
        return {
          ...internship,
          startDate,
          endDate,
          lat,
          lng
        };
      } catch (err) {
        const startDate = new Date(internship.startDate);
        const endDate = new Date(internship.endDate)
        return {
          ...internship,
          startDate,
          endDate,
          lat: -34.397,
          lng: 150.644
        };
      }
    }),
  );
  return internshipsWithCoords as TInternship[];
};

const internshipService = { getInternships };
export default internshipService;
