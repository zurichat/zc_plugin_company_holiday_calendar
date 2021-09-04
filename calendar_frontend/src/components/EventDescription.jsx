import {
  AttachFileOutlined,
  FormatBoldOutlined,
  FormatItalicOutlined,
  FormatListBulletedOutlined,
  FormatListNumberedOutlined,
  FormatUnderlinedOutlined,
  Link,
  LinkOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const DescribeEvent = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-left: 30px;

  & > p {
    color: black;
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 12px;
  }
  & > .icons {
    color: grey;
    display: flex;
    width: 55%;
    justify-content: space-between;
    font-size: 10px;
  }

  & > .icons > .share {
    transform: rotate(45deg);
  }
  & > .description {
    margin-top: 50px;
  }
  & > .description > input {
    width: 80%;
    border: none;
    border-bottom: 1px solid lightgrey;
    outline: none;
    padding-bottom: 10px;
    font-size: 15px;
  }
`;
const EventDescription = () => {
  return (
    <DescribeEvent>
      <p>Description</p>
      <div className="icons">
        <AttachFileOutlined className="share" />
        <FormatBoldOutlined />
        <FormatItalicOutlined />
        <FormatUnderlinedOutlined />
        <FormatListNumberedOutlined />
        <FormatListBulletedOutlined />

        <LinkOutlined />
      </div>
      <div className="description">
        <input placeholder="Enter text here" type="text" />
      </div>
    </DescribeEvent>
  );
};
export default EventDescription;
