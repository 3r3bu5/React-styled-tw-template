import styled from "styled-components";
import tw from "tailwind.macro";

const AppStyles = styled.div.attrs({
  className: "w-full h-screen flex flex-col items-center justify-center",
})`
  & {
    h1 {
      ${tw` text-6xl  font-bold text-6xl text-teal-500`}
    }
    p {
      ${tw`text-gray-700 text-lg`}
    }
    h2 {
      ${tw`text-2xl font-hairline mt-5 text-teal-500`}
    }
    ul {
      ${tw`inline-flex`}
    }
    li {
      ${tw`mr-5`}
    }
    a {
      ${tw`text-blue-500 hover:text-gray-500 hover:underline`}
    }
  }
`;

export default AppStyles;
