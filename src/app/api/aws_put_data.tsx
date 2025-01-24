import CheckJWT from "./check_JWT";

type ResultType = {
  error: Number;
  body: string;
};

type PayloadType = {
  s_key: string;
  id: string;
  title: string;
  text: string;
};

const PutListData = async ({ payload }: { payload: PayloadType }): Promise<string> => {
  const result: ResultType = { error: 0, body: "suc" };

  try {
    const check_jwt = await CheckJWT(payload.s_key);

    if (check_jwt === null) return "false: JWT Error";

    const put_result = await fetch(`${process.env.NEXT_PUBLIC_AWS_PATH}/data_PUT`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: check_jwt },
      body: JSON.stringify(payload),
      mode: "cors",
    });

    if (put_result.ok === false) {
      result.error = 1;
      result.body = "false: put error";
    }
  } catch (e) {
    result.error = 1;
    result.body = "false: fetch error";
  }

  if (result.error !== 0) result.body = "false: Error";

  return result.body;
};
export default PutListData;
