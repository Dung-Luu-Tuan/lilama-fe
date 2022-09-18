import "./sidebar.scss";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications"
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import EuroIcon from "@mui/icons-material/Euro";
import PaymentsIcon from "@mui/icons-material/Payments";
import TaskIcon from "@mui/icons-material/Task";
import SavingsIcon from "@mui/icons-material/Savings";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { logout } from "../../utils/auth";

const Sidebar = () => {
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Lilama</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <Link to="/user" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Tài khoản</span>
            </li>
          </Link>

          <Link to="/project" style={{ textDecoration: "none" }}>
            <li>
              <TaskIcon className="icon" />
              <span>Dự án</span>
            </li>
          </Link>

          <Link to="/customer" style={{ textDecoration: "none" }}>
            <li>
              <AccessibilityNewIcon className="icon" />
              <span>Khách hàng</span>
            </li>
          </Link>

          <Link to="/main-contract" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Hợp đồng chính</span>
            </li>
          </Link>

          <Link to="/bindingPackage" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Gói Thầu</span>
            </li>
          </Link>

          <Link to="/freelance-contract" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>Hợp đồng thi công</span>
            </li>
          </Link>

          <Link to="/fcBudget" style={{ textDecoration: "none" }}>
            <li>
              <PaymentsIcon className="icon" />
              <span>Chi phí HDTC</span>
            </li>
          </Link>

          <Link to="/executor" style={{ textDecoration: "none" }}>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>Đơn vị thực hiện</span>
            </li>
          </Link>

          <Link to="/execution" style={{ textDecoration: "none" }}>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>Thực hiện</span>
            </li>
          </Link>

          <Link to="/acceptance" style={{ textDecoration: "none" }}>
            <li>
              <PsychologyOutlinedIcon className="icon" />
              <span>Nghiệm thu</span>
            </li>
          </Link>

          <Link to="/income" style={{ textDecoration: "none" }}>
            <li>
              <EuroIcon className="icon" />
              <span>Dòng tiền</span>
            </li>
          </Link>

          <Link to="/finance" style={{ textDecoration: "none" }}>
            <li>
              <SavingsIcon className="icon" />
              <span>Tài chính</span>
            </li>
          </Link>

          <Link to="/costType" style={{ textDecoration: "none" }}>
            <li>
              <EuroIcon className="icon" />
              <span>Loại chi phí</span>
            </li>
          </Link>

          <Link to="/manager" style={{ textDecoration: "none" }}>
            <li>
              <ManageAccountsIcon className="icon" />
              <span>Quản lý</span>
            </li>
          </Link>

          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li onClick={handleLogout}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
