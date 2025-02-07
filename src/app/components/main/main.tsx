"use client";

import { Box, Button } from "@mui/material";
import Carousel, { CardData } from "@/app/components/carousel/carousel";
import MarkdownWrite from "@/app/components/md/md_write";
import { useEffect, useState } from "react";
import MDList from "../md/md_list";
import MakePopUp from "../popup/make_popup";
import PutListData from "@/app/api/aws_put_data";
import UserId from "../popup/user_id";
import { v4 as uuidv4 } from "uuid";
import GetListData, { GetData } from "@/app/api/aws_get_data";
import MarkdownViwer from "../md/md_viewer";
import { useRouter } from "next/navigation";

const MainClient = ({ get_result }: { get_result: GetData[] }) => {
  const router = useRouter();
  const [text, setText] = useState<string>("");
  const [readBool, setReadBool] = useState<boolean>(false);
  const [writeBool, setWriteBool] = useState<boolean>(false);
  const [viewer, setViewer] = useState<boolean>(false);
  const [viewerData, setViewerData] = useState<GetData>({ id: "", title: "", text: "", s_key: "" });

  const card_data = [
    {
      id: "1",
      title: "title",
      text: "text",
      img: "img",
    },
  ];

  //데이터 넣기 함수
  const SetDataFunc = async (s_key: string) => {
    const data = {
      s_key: s_key,
      id: uuidv4(),
      title: text.substring(0, 20),
      text: text,
    };
    const put_result = await PutListData({ payload: data });
    if (put_result.includes("false")) return;

    setWriteBool(false);

    alert("suc-put");

    router.refresh();
  };

  //리스트에서 클릭하기
  const ClickListFunc = async (id: string, title: string) => {
    const data = await GetListData("GET", id);

    if (data.length === 0) return;

    setViewerData({
      id: data[0].id,
      title: data[0].title,
      text: data[0].text,
      s_key: data[0].s_key,
    });

    setViewer(true);
  };

  return (
    <>
      <section className="cardNcarousel">
        <Box sx={{ display: "flex", flexWrap: "wrap", padding: 2 }}>
          <Box
            sx={{
              display: "flex",
              margin: "0 auto",
            }}
          >
            {/* 슬라이더 영역 */}
            {/* <Box>
              <Box sx={{ padding: 2 }}>
                <Carousel params={card_data} />
              </Box>
              <Box>
                <Carousel params={card_data} />
              </Box>
            </Box> */}
            {/* 버튼 및 글쓰기 영역(MD) */}
            <Box sx={{ padding: 2 }}>
              <Button onClick={() => setWriteBool(true)}>Write</Button>
              <Button onClick={() => setReadBool(true)}>List</Button>
              {/* <Button onClick={() => setViewer(true)}>Test</Button> */}
              <MarkdownWrite setText={setText} />
            </Box>
          </Box>
          {/* 팝업창 켜기 글쓰기용(아이디 입력) */}
          <MakePopUp open={writeBool} close={() => setWriteBool(false)} size="300px">
            <UserId SetDataFunc={SetDataFunc} />
          </MakePopUp>

          {/* 팝업창 켜기 리스트 가져오기용*/}
          <MakePopUp open={readBool} close={() => setReadBool(false)} size="1200px">
            <MDList get_result={get_result} ClickListFunc={ClickListFunc} />
          </MakePopUp>

          {/* 팝업창 켜기*/}
          <MakePopUp
            open={viewer}
            close={() => {
              setViewer(false);
            }}
            size="1000px"
          >
            <MarkdownViwer id={viewerData.id} title={viewerData.title} content={viewerData.text} />
          </MakePopUp>
        </Box>
      </section>
    </>
  );
};
export default MainClient;
// const CarouselBox = {
//   Width: "100%",
// };
