import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { Routes as AppRoutes } from "../routes";

// pages
import Presentation from "./Presentation";
import Upgrade from "./Upgrade";
import DashboardOverview from "./dashboard/DashboardOverview";
import Transactions from "./Transactions";
import Settings from "./Settings";
import BootstrapTables from "./tables/BootstrapTables";
import Signin from "./examples/Signin";
import Signup from "./examples/Signup";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import Lock from "./examples/Lock";
import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";

// documentation pages
import DocsOverview from "./documentation/DocsOverview";
import DocsDownload from "./documentation/DocsDownload";
import DocsQuickStart from "./documentation/DocsQuickStart";
import DocsLicense from "./documentation/DocsLicense";
import DocsFolderStructure from "./documentation/DocsFolderStructure";
import DocsBuild from "./documentation/DocsBuild";
import DocsChangelog from "./documentation/DocsChangelog";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

import Accordion from "./components/Accordion";
import Alerts from "./components/Alerts";
import Badges from "./components/Badges";
import Breadcrumbs from "./components/Breadcrumbs";
import Buttons from "./components/Buttons";
import Forms from "./components/Forms";
import Modals from "./components/Modals";
import Navs from "./components/Navs";
import Navbars from "./components/Navbars";
import Pagination from "./components/Pagination";
import Popovers from "./components/Popovers";
import Progress from "./components/Progress";
import Tables from "./components/Tables";
import Tabs from "./components/Tabs";
import Tooltips from "./components/Tooltips";
import Toasts from "./components/Toasts";

const RouteWithLoader = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader show={loaded ? false : true} />
      {children}
    </>
  );
};

const RouteWithSidebar = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <>
      <Preloader show={loaded ? false : true} />
      <Sidebar />

      <main className="content">
        <Navbar />
        {children}
        <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
      </main>
    </>
  );
};

export default () => (
  <Routes>
    <Route path={AppRoutes.Presentation.path} element={<RouteWithLoader><Presentation /></RouteWithLoader>} />
    <Route path={AppRoutes.Signin.path} element={<RouteWithLoader><Signin /></RouteWithLoader>} />
    <Route path={AppRoutes.Signup.path} element={<RouteWithLoader><Signup /></RouteWithLoader>} />
    <Route path={AppRoutes.ForgotPassword.path} element={<RouteWithLoader><ForgotPassword /></RouteWithLoader>} />
    <Route path={AppRoutes.ResetPassword.path} element={<RouteWithLoader><ResetPassword /></RouteWithLoader>} />
    <Route path={AppRoutes.Lock.path} element={<RouteWithLoader><Lock /></RouteWithLoader>} />
    <Route path={AppRoutes.NotFound.path} element={<RouteWithLoader><NotFoundPage /></RouteWithLoader>} />
    <Route path={AppRoutes.ServerError.path} element={<RouteWithLoader><ServerError /></RouteWithLoader>} />

    {/* pages */}
    <Route path={AppRoutes.DashboardOverview.path} element={<RouteWithSidebar><DashboardOverview /></RouteWithSidebar>} />
    <Route path={AppRoutes.Upgrade.path} element={<RouteWithSidebar><Upgrade /></RouteWithSidebar>} />
    <Route path={AppRoutes.Transactions.path} element={<RouteWithSidebar><Transactions /></RouteWithSidebar>} />
    <Route path={AppRoutes.Settings.path} element={<RouteWithSidebar><Settings /></RouteWithSidebar>} />
    <Route path={AppRoutes.BootstrapTables.path} element={<RouteWithSidebar><BootstrapTables /></RouteWithSidebar>} />

    {/* components */}
    <Route path={AppRoutes.Accordions.path} element={<RouteWithSidebar><Accordion /></RouteWithSidebar>} />
    <Route path={AppRoutes.Alerts.path} element={<RouteWithSidebar><Alerts /></RouteWithSidebar>} />
    <Route path={AppRoutes.Badges.path} element={<RouteWithSidebar><Badges /></RouteWithSidebar>} />
    <Route path={AppRoutes.Breadcrumbs.path} element={<RouteWithSidebar><Breadcrumbs /></RouteWithSidebar>} />
    <Route path={AppRoutes.Buttons.path} element={<RouteWithSidebar><Buttons /></RouteWithSidebar>} />
    <Route path={AppRoutes.Forms.path} element={<RouteWithSidebar><Forms /></RouteWithSidebar>} />
    <Route path={AppRoutes.Modals.path} element={<RouteWithSidebar><Modals /></RouteWithSidebar>} />
    <Route path={AppRoutes.Navs.path} element={<RouteWithSidebar><Navs /></RouteWithSidebar>} />
    <Route path={AppRoutes.Navbars.path} element={<RouteWithSidebar><Navbars /></RouteWithSidebar>} />
    <Route path={AppRoutes.Pagination.path} element={<RouteWithSidebar><Pagination /></RouteWithSidebar>} />
    <Route path={AppRoutes.Popovers.path} element={<RouteWithSidebar><Popovers /></RouteWithSidebar>} />
    <Route path={AppRoutes.Progress.path} element={<RouteWithSidebar><Progress /></RouteWithSidebar>} />
    <Route path={AppRoutes.Tables.path} element={<RouteWithSidebar><Tables /></RouteWithSidebar>} />
    <Route path={AppRoutes.Tabs.path} element={<RouteWithSidebar><Tabs /></RouteWithSidebar>} />
    <Route path={AppRoutes.Tooltips.path} element={<RouteWithSidebar><Tooltips /></RouteWithSidebar>} />
    <Route path={AppRoutes.Toasts.path} element={<RouteWithSidebar><Toasts /></RouteWithSidebar>} />

    {/* documentation */}
    <Route path={AppRoutes.DocsOverview.path} element={<RouteWithSidebar><DocsOverview /></RouteWithSidebar>} />
    <Route path={AppRoutes.DocsDownload.path} element={<RouteWithSidebar><DocsDownload /></RouteWithSidebar>} />
    <Route path={AppRoutes.DocsQuickStart.path} element={<RouteWithSidebar><DocsQuickStart /></RouteWithSidebar>} />
    <Route path={AppRoutes.DocsLicense.path} element={<RouteWithSidebar><DocsLicense /></RouteWithSidebar>} />
    <Route path={AppRoutes.DocsFolderStructure.path} element={<RouteWithSidebar><DocsFolderStructure /></RouteWithSidebar>} />
    <Route path={AppRoutes.DocsBuild.path} element={<RouteWithSidebar><DocsBuild /></RouteWithSidebar>} />
    <Route path={AppRoutes.DocsChangelog.path} element={<RouteWithSidebar><DocsChangelog /></RouteWithSidebar>} />

    <Route path="*" element={<Navigate to={AppRoutes.NotFound.path} replace />} />
  </Routes>
);
