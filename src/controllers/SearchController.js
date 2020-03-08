import Dev from "../Models/Dev";
import parseArrayAsString from "../utils/parseStringAsArray";

export default {
  async index(request, response) {
    const { latitude, longitude, techs } = request.query;

    const techArray = parseArrayAsString(techs);
    const devs = await Dev.find({
      techs: {
        $in: techArray
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            condinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });

    return response.json({ devs });
  }
};
