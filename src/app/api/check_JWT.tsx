import jwt from "jsonwebtoken";

const CheckJWT = async (check_data: string): Promise<string> => {
  let token = "";

  if (check_data !== process.env.NEXT_PUBLIC_CHECK_JWT) return "JWT s_key false";
  const secretKey = check_data;

  if (typeof secretKey !== "string" || !secretKey) {
    console.error("Invalid SecretKey: Must be a non-empty string");
    return "JWT type false";
  }

  //토큰 생성
  try {
    token = jwt.sign({ md_write: "okmd" }, secretKey, { expiresIn: "1h" });
  } catch (error) {
    console.error("Error creating token:", error);
    return "JWT create token false";
  }

  try {
    //토큰 검증
    const payload = {
      s_key: secretKey,
      token: token,
    };
    const decoded = jwt.verify(token, secretKey);
    if (decoded === null) return "JWT decoded false";
  } catch (error) {
    console.error("Error creating token:", error);
    return "JWT false";
  }
  return token;
};

export default CheckJWT;
