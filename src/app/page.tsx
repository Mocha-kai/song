import GetListData, { GetData } from "./api/aws_get_data";
import MainClient from "./components/main/main";

const Home = async () => {
  let get_result: GetData[] = await GetListData("SCAN");
  if (get_result === null) return;

  return <MainClient get_result={get_result} />;
};
export default Home;
