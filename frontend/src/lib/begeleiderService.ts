import keys from "@/keys";
import { TUser } from "@/types/user.type";
import axios from "axios";

const getBegeleiders = async () => {
	const res = await axios.get(`${keys.NEXT_PUBLIC_URL}/overview?role=STAGEBEGELEIDER`);
	return res.data as TUser[];
};

const studentService = { getBegeleiders };
export default studentService;