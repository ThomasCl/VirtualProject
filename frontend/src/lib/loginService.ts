import keys from "@/keys";
import { TUser } from "@/types/user.type";
import axios from "axios";

const login = async (
	usernameOrEmail: string,
	password: string,
	session?: any
) => {
	const res = await axios.post(`${keys.NEXT_PUBLIC_URL}/api/voteEase/login`, {
		email: usernameOrEmail,
		password,
	});

	return res.data as TUser;
};

const loginService = { login };
export default loginService;
