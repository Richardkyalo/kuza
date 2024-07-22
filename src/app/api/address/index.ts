import axios from "axios";

const baseURL = "https://agriflexpay-backend.onrender.com/api/";

const Instance = axios.create({
    baseURL,
    });
class AddressAPI_ {
    async getAddress() {
        const response = await Instance.get("address");
        console.log("address api",response);
        return response.data;
    }

    async addAddress(data: any) {
        const response = await Instance.post("address", data);
        return response.data;
    }

}
const AddressAPI = new AddressAPI_();
export default AddressAPI;