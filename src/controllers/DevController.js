import axios from "axios";
import parseArrayAsString from "../utils/parseStringAsArray";
import Dev from "../Models/Dev";

// index, show, store, update, destroy

export default {
  async index(request, response) {
    const devs = await Dev.find();

    return response.json(devs);
  },

  async destroy(request, response) {
    const { id } = request.params;

    await Dev.findByIdAndDelete(id);
  },

  async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ github_username });
    console.log(Dev);
    if (dev === null) {
      const apiResponse = await axios.get(
        `http://api.github.com/users/${github_username}`
      );

      let { name = login, avatar_url, bio } = apiResponse.data;

      const techArray = parseArrayAsString(techs);
      const location = { type: "Point", coordinates: [latitude, longitude] };
      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techArray,
        location
      });
    }
    return response.json(dev);
  }
};
