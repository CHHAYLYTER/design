import "antd";
import { Menu } from "antd";
import './slid.css'
import { useNavigate } from "react-router";
import RouterContent from "../Routers/router";
import { 
DesktopOutlined,
HomeTwoTone, 
PoweroffOutlined, 
UserOutlined 
} from "@ant-design/icons"


const SideBar = () => {
  const navigate = useNavigate ()
  return (
    <div className="menu">
      <Menu className="MenuBar"
      onClick={({key}) => {
        if(key === "signout"){
          
        }else{
          navigate(key)
        }
      }}
        items={[
          {
            label: "Home",
            icon:<HomeTwoTone />,
            key: "/"
          },
          {
            label: "Dashboard",
            icon:<DesktopOutlined />,
            key: "dashboard"
          },
          {
            label: "Profile",
            icon:<UserOutlined />,
            key: "profile"
          },
          {
            label: "Signout",
            icon: <PoweroffOutlined />,
            key: "signout",
            danger: true
          }
        ]}
        ></Menu>
        <RouterContent />
    </div>
  );
}
export default SideBar;
