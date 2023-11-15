import keys from "@/keys";
import { TUser } from "@/types/user.type";
import axios from "axios";

const getStudents = async () => {
	const res = await axios.get(`${keys.NEXT_PUBLIC_URL}/overview?role=STUDENT`);
	return res.data as TUser[];
};

const studentService = { getStudents };
export default studentService;
