import keys from "@/keys";
import { TUser } from "@/types/user.type";
import axios from "axios";

const getMentors = async () => {
	const res = await axios.get(`${keys.NEXT_PUBLIC_URL}/overview?role=STAGEMENTOR`);
	return res.data as TUser[];
};

const studentService = { getMentors };
export default studentService;
