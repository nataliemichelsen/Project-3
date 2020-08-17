import axios from "axios";

async function Authenticate() {
    try {
        const res = await axios.get("/api/authenticate");
        if (res.data === false) {
            console.log("login required");
            window.location.replace("/login");
        }else{
            return res;
        }
    }
    catch (err) {
        return console.log(err);
    };
};

export default Authenticate