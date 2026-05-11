import { View } from "react-native";
import { Image } from "expo-image";

const IMAGE_URL =
  "https://vrthumb.clipartkorea.co.kr/2023/10/12/tc00240107234.jpg";

const BLUR_HASH = "L69zFSi_.AyE_3t7t7R**0o#DgR4";

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/images/favicon.png")} // 로컬 파일 이미지
        style={{
          height: 200,
          width: 200,
        }}
        transition={800}
        contentFit="cover"
        placeholder={{
          BLUR_HASH,
        }}
      />

      <Image
        source={IMAGE_URL} // 원격 URL 이미지
        style={{
          height: 300,
          width: 300,
        }}
        resizeMode="cover"
        onLoad={() => {
          alert("이미지가 로드되었습니다.");
        }}
        onError={() => {
          alert("로드 중 에러가 발생했습니다.");
        }}
        defaultSource={require("../assets/images/favicon.png")} // 이미지 로드 에러 시, 보여줄 이미지
      />
    </View>
  );
};

export default Home;
