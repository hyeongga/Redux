/*파일명을 필수 적으로 _app.js로 작성해야 함 (함수명은 상관없음)
다른 페이지를 렌더링 하기전에 제일 먼저 확인하는 페이지
like blueprint : 어떤 페이지들, 컴포넌트들이 어떻게 있어야하는지 확인하는 곳
*/
import NavBar from "@/components/NavBar";
import "../styles/globals.css"; // _app.js에서만 import할 수 있음

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>
        {`
          a {
            color: white;
          }
        `}
      </style>
    </>
  );
}
