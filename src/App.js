import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Layout from "./pages/layout/Layout";
import Single from "./pages/single/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { projectInputs, userInputs, customerInputs, incomeInputs, financeInputs, bindingPackageInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import ProtectedRoute from "./route/ProtectedRoute";
import Project from "./pages/table/project/Project";
import Customer from "./pages/table/customer/Customer";
import MainContract from "./pages/table/mainContract/MainContract";
import Acceptance from "./pages/table/acceptance/Acceptance";
import BindingPackage from "./pages/table/bindingPackage/BindingPackage";
import Execution from "./pages/table/execution/Execution";
import FCBudget from "./pages/table/fcBudget/FCBudget";
import Finance from "./pages/table/finance/Finance";
import FreelanceContract from "./pages/table/freelanceContract/FreelanceContract";
import Income from "./pages/table/income/Income";
import Upload from "./pages/table/Upload";
import Edit from "./pages/table/Edit";
import { projectVerifyColumns } from "./pages/table/project/Columns";
import { bindingPackageVerifyColumns } from "./pages/table/bindingPackage/Columns";
import { incomeVerifyColumns } from "./pages/table/income/Columns";

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
              <Route
                path="new"
                element={<Edit inputs={projectInputs} title="Add New User" />}
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
              <Route
                path="projectUpload"
                element={
                  <Upload
                    columns={projectVerifyColumns}
                    api_verify="https://lilama18.herokuapp.com/api/project/upload/verify"
                    api_commit="https://lilama18.herokuapp.com/api/project/upload/commit"
                    api_sampleLink="https://lilama18.herokuapp.com/api/config/IMPORT_PROJECT_SAMPLE_FILE"
                  />
                }
              />
              <Route
                path="edit/:id"
                element={
                  <Edit
                    formInputs={projectInputs}
                    title="Edit project"
                    api="https://lilama18.herokuapp.com/api/project"
                  />
                }
              />
            </Route>

            <Route path="customer">
              <Route
                index
                element={
                  <Layout>
                    <Customer />
                  </Layout>
                }
              />
              <Route path=":projectId" element={<Single />} />
              {/* <Route
                path="customerUpload"
                element={
                  <Upload
                    columns={projectVerifyColumns}
                    api_verify="https://lilama18.herokuapp.com/api/project/upload/verify"
                    api_commit="https://lilama18.herokuapp.com/api/project/upload/commit"
                    api_sampleLink="https://lilama18.herokuapp.com/api/config/IMPORT_PROJECT_SAMPLE_FILE"
                  />
                }
              /> */}
              <Route
                path="edit/:id"
                element={
                  <Edit
                    formInputs={customerInputs}
                    title="Edit customer"
                    api="https://lilama18.herokuapp.com/api/customer"
                  />
                }
              />
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
              <Route
                path="bindingPackageUpload"
                element={
                  <Upload
                    columns={bindingPackageVerifyColumns}
                    api_verify="https://lilama18.herokuapp.com/api/binding-package/upload/verify"
                    api_commit="https://lilama18.herokuapp.com/api/binding-package/upload/commit"
                    api_sampleLink="https://lilama18.herokuapp.com/api/config/IMPORT_BINDING_PACKAGE_SAMPLE_FILE"
                  />
                }
              />
              <Route
                path="edit/:id"
                element={
                  <Edit
                    formInputs={bindingPackageInputs}
                    title="Edit Binding Package"
                    api="https://lilama18.herokuapp.com/api/binding-package"
                  />
                }
              />
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
              <Route
                path="incomeUpload"
                element={
                  <Upload
                    columns={incomeVerifyColumns}
                    api_verify="https://lilama18.herokuapp.com/api/income/upload/verify"
                    api_commit="https://lilama18.herokuapp.com/api/income/upload/commit"
                    api_sampleLink="https://lilama18.herokuapp.com/api/config/IMPORT_INCOME_SAMPLE_FILE"
                  />
                }
              />
              <Route
                path="edit/:id"
                element={
                  <Edit
                    formInputs={incomeInputs}
                    title="Edit Income"
                    api="https://lilama18.herokuapp.com/api/income"
                  />
                }
              />
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
              <Route
                path="edit/:id"
                element={
                  <Edit
                    formInputs={financeInputs}
                    title="Edit Finance"
                    api="https://lilama18.herokuapp.com/api/finance"
                  />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
