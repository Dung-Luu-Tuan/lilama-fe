import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Layout from "./pages/layout/Layout";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import ProtectedRoute from "./route/ProtectedRoute";
import Project from "./pages/table/project/Project";
import MainContract from "./pages/table/mainContract/MainContract";
import Acceptance from "./pages/table/acceptance/Acceptance";
import BindingPackage from "./pages/table/bindingPackage/BindingPackage";
import Execution from "./pages/table/execution/Execution";
import FCBudget from "./pages/table/fcBudget/FCBudget";
import Finance from "./pages/table/finance/Finance";
import FreelanceContract from "./pages/table/freelanceContract/FreelanceContract";
import Income from "./pages/table/income/Income";
import Upload from "./pages/table/project/Upload";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="users">
              <Route
                index
                element={
                  <Layout>
                    <Project />
                  </Layout>
                }
              />
              <Route path=":userId" element={<Single />} />
              {/* <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />} */}
              />
            </Route>
            <Route path="project">
              <Route
                index
                element={
                  <Layout>
                    <Project />
                  </Layout>
                }
              />
              <Route path=":projectId" element={<Single />} />
              <Route path="projectUpload" element={<Upload />} />
            </Route>
            <Route path="main-contract">
              <Route
                index
                element={
                  <Layout>
                    <MainContract />
                  </Layout>
                }
              />
              <Route path=":productId" element={<Single />} />
              {/* <Route
                path="new"
                element={
                  <New inputs={productInputs} title="Thêm hợp đồng mới" />
                }
              /> */}
            </Route>

            <Route path="bindingPackage">
              <Route
                index
                element={
                  <Layout>
                    <BindingPackage />
                  </Layout>
                }
              />
              <Route path=":bindingPackageId" element={<Single />} />
              <Route path="bindingPackageUpload" element={<Upload />} />
            </Route>

            <Route path="freelanceContract">
              <Route
                index
                element={
                  <Layout>
                    <FreelanceContract />
                  </Layout>
                }
              />
              <Route path=":freelanceContractId" element={<Single />} />
              <Route path="freelanceContractUpload" element={<Upload />} />
            </Route>

            <Route path="fcBudget">
              <Route
                index
                element={
                  <Layout>
                    <FCBudget />
                  </Layout>
                }
              />
              <Route path=":fcBudgetId" element={<Single />} />
              <Route path="fcBudgetUpload" element={<Upload />} />
            </Route>

            <Route path="execution">
              <Route
                index
                element={
                  <Layout>
                    <Execution />
                  </Layout>
                }
              />
              <Route path=":executionId" element={<Single />} />
              <Route path="executionUpload" element={<Upload />} />
            </Route>

            <Route path="acceptance">
              <Route
                index
                element={
                  <Layout>
                    <Acceptance />
                  </Layout>
                }
              />
              <Route path=":acceptanceId" element={<Single />} />
              <Route path="acceptanceUpload" element={<Upload />} />
            </Route>

            <Route path="income">
              <Route
                index
                element={
                  <Layout>
                    <Income />
                  </Layout>
                }
              />
              <Route path=":incomeId" element={<Single />} />
              <Route path="incomeUpload" element={<Upload />} />
            </Route>

            <Route path="finance">
              <Route
                index
                element={
                  <Layout>
                    <Finance />
                  </Layout>
                }
              />
              <Route path=":financeId" element={<Single />} />
              <Route path="financeUpload" element={<Upload />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
