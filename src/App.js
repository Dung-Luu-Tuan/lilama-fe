import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Layout from "./pages/layout/Layout";
import Single from "./pages/single/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  projectInputs,
  userInputs,
  customerInputs,
  mainContractInputs,
  executorInputs,
  freelanceContractInputs,
  userCreateInputs,
  bindingPackageInputs,
  incomeInputs,
} from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import ProtectedRoute from "./route/ProtectedRoute";
import Project from "./pages/table/project/Project";
import Customer from "./pages/table/customer/Customer";
import MainContract from "./pages/table/mainContract/MainContract";
import Acceptance from "./pages/table/acceptance/Acceptance";
import BindingPackage from "./pages/table/bindingPackage/BindingPackage";
import Executor from "./pages/table/executor/Executor";
import FCBudget from "./pages/table/fcBudget/FCBudget";
import Finance from "./pages/table/finance/Finance";
import FreelanceContract from "./pages/table/freelanceContract/FreelanceContract";
import Income from "./pages/table/income/Income";
import Upload from "./pages/table/Upload";
import Edit from "./pages/table/Edit";
import User from "./pages/table/user/User";
import Create from "./pages/table/Create";
import { projectVerifyColumns } from "./pages/table/project/Columns";
import { bindingPackageVerifyColumns } from "./pages/table/bindingPackage/Columns";
import { incomeVerifyColumns } from "./pages/table/income/Columns";
import { customerVerifyColumns } from "./pages/table/customer/Columns";
import { mainContractVerifyColumns } from "./pages/table/mainContract/Columns";
import { executorVerifyColumns } from "./pages/table/executor/Columns";
import { freelanceContractVerifyColumns } from "./pages/table/freelanceContract/Columns";
import { acceptanceInputs, acceptanceVerifyColumns } from "./pages/table/acceptance/Columns";
import { financeInputs, financeVerifyColumns } from "./pages/table/finance/Columns";
import { fcBudgetInputs, fcBudgetVerifyColumns } from "./pages/table/fcBudget/Columns";
import CostType from "./pages/table/costType/CostType";
import { costTypeInputs, costTypeVerifyColumns } from "./pages/table/costType/Columns";
import Manager from "./pages/table/manager/Manager";
import { managerInputs, managerVerifyColumns } from "./pages/table/manager/Columns";
import {notifyStore} from "./store/notifyStore";
import Snackbar from "@mui/material/Snackbar";


function App() {
  const { darkMode } = useContext(DarkModeContext);
  const showNotify = notifyStore(state => state.show)
  const errorMessage = notifyStore(state => state.message)

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

            <Route path="user">
              <Route
                index
                element={
                  <Layout>
                    <User />
                  </Layout>
                }
              />
              <Route
                path="userCreate"
                element={
                  <Create
                    formInputs={userCreateInputs}
                    api_create="https://lilama18.herokuapp.com/api/user"
                  />
                }
              />
              <Route
                path="edit/:id"
                element={
                  <Edit
                    formInputs={userInputs}
                    title="Edit project"
                    api="https://lilama18.herokuapp.com/api/user"
                  />
                }
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
              <Route
                path="customerUpload"
                element={
                  <Upload
                    columns={customerVerifyColumns}
                    api_verify="https://lilama18.herokuapp.com/api/customer/upload/verify"
                    api_commit="https://lilama18.herokuapp.com/api/customer/upload/commit"
                    api_sampleLink="https://lilama18.herokuapp.com/api/config/IMPORT_CUSTOMER_SAMPLE_FILE"
                  />
                }
              />
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
              <Route
                path="mainContractUpload"
                element={
                  <Upload
                    columns={mainContractVerifyColumns}
                    api_verify="https://lilama18.herokuapp.com/api/main-contract/upload/verify"
                    api_commit="https://lilama18.herokuapp.com/api/main-contract/upload/commit"
                    api_sampleLink="https://lilama18.herokuapp.com/api/config/IMPORT_MAIN_CONTRACT_SAMPLE_FILE"
                  />
                }
              />
              <Route
                path="edit/:id"
                element={
                  <Edit
                    formInputs={mainContractInputs}
                    title="Edit main contract"
                    api="https://lilama18.herokuapp.com/api/main-contract"
                  />
                }
              />
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

            <Route path="freelance-contract">
              <Route
                index
                element={
                  <Layout>
                    <FreelanceContract />
                  </Layout>
                }
              />
              <Route
                path="freelanceContractUpload"
                element={
                  <Upload
                    columns={freelanceContractVerifyColumns}
                    api_verify="https://lilama18.herokuapp.com/api/freelance-contract/upload/verify"
                    api_commit="https://lilama18.herokuapp.com/api/freelance-contract/upload/commit"
                    api_sampleLink="https://lilama18.herokuapp.com/api/config/IMPORT_FREELANCE_CONTRACT_SAMPLE_FILE"
                  />
                }
              />
              <Route
                path="edit/:id"
                element={
                  <Edit
                    formInputs={freelanceContractInputs}
                    title="Edit freelance contract"
                    api="https://lilama18.herokuapp.com/api/freelance-contract"
                  />
                }
              />
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
              <Route
                path="fcBudgetUpload"
                element={
                  <Upload
                    columns={fcBudgetVerifyColumns}
                    api_verify="https://lilama18.herokuapp.com/api/budget/upload/verify"
                    api_commit="https://lilama18.herokuapp.com/api/budget/upload/commit"
                    api_sampleLink="https://lilama18.herokuapp.com/api/config/IMPORT_BUDGET_SAMPLE_FILE"
                  />
                }
              />
              <Route
                path="edit/:id"
                element={
                  <Edit
                    formInputs={fcBudgetInputs}
                    title="Edit Budget"
                    api="https://lilama18.herokuapp.com/api/budget"
                  />
                }
              />
            </Route>

            <Route path="executor">
              <Route
                index
                element={
                  <Layout>
                    <Executor />
                  </Layout>
                }
              />
              <Route
                path="executorUpload"
                element={
                  <Upload
                    columns={executorVerifyColumns}
                    api_verify="https://lilama18.herokuapp.com/api/executor/upload/verify"
                    api_commit="https://lilama18.herokuapp.com/api/executor/upload/commit"
                    api_sampleLink="https://lilama18.herokuapp.com/api/config/IMPORT_EXECUTOR_SAMPLE_FILE"
                  />
                }
              />
              <Route
                path="edit/:id"
                element={
                  <Edit
                    formInputs={executorInputs}
                    title="Edit executor"
                    api="https://lilama18.herokuapp.com/api/executor"
                  />
                }
              />
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
              <Route
                path="acceptanceUpload"
                element={
                  <Upload
                    columns={acceptanceVerifyColumns}
                    api_verify="https://lilama18.herokuapp.com/api/acceptance/upload/verify"
                    api_commit="https://lilama18.herokuapp.com/api/acceptance/upload/commit"
                    api_sampleLink="https://lilama18.herokuapp.com/api/config/IMPORT_ACCEPTANCE_SAMPLE_FILE"
                  />
                }
              />
              <Route
                path="edit/:id"
                element={
                  <Edit
                    formInputs={acceptanceInputs}
                    title="Edit Acceptance"
                    api="https://lilama18.herokuapp.com/api/acceptance"
                  />
                }
              />
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
              <Route
                path="financeUpload"
                element={
                  <Upload
                    columns={financeVerifyColumns}
                    api_verify="https://lilama18.herokuapp.com/api/finance/upload/verify"
                    api_commit="https://lilama18.herokuapp.com/api/finance/upload/commit"
                    api_sampleLink="https://lilama18.herokuapp.com/api/config/IMPORT_FINANCE_SAMPLE_FILE"
                  />
                }
              />
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

            <Route path="costType">
              <Route
                index
                element={
                  <Layout>
                    <CostType />
                  </Layout>
                }
              />
              <Route
                path="costTypeUpload"
                element={
                  <Upload
                    columns={costTypeVerifyColumns}
                    api_verify="https://lilama18.herokuapp.com/api/cost-type/upload/verify"
                    api_commit="https://lilama18.herokuapp.com/api/cost-type/upload/commit"
                    api_sampleLink="https://lilama18.herokuapp.com/api/config/IMPORT_COST_TYPE_SAMPLE_FILE"
                  />
                }
              />
              <Route
                path="edit/:id"
                element={
                  <Edit
                    formInputs={costTypeInputs}
                    title="Edit Cost Type"
                    api="https://lilama18.herokuapp.com/api/cost-type"
                  />
                }
              />
            </Route>


            <Route path="manager">
              <Route
                index
                element={
                  <Layout>
                    <Manager />
                  </Layout>
                }
              />
              <Route
                path="managerUpload"
                element={
                  <Upload
                    columns={managerVerifyColumns}
                    api_verify="https://lilama18.herokuapp.com/api/manager/upload/verify"
                    api_commit="https://lilama18.herokuapp.com/api/manager/upload/commit"
                    api_sampleLink="https://lilama18.herokuapp.com/api/config/IMPORT_MANAGER_SAMPLE_FILE"
                  />
                }
              />
              <Route
                path="edit/:id"
                element={
                  <Edit
                    formInputs={managerInputs}
                    title="Edit Manager"
                    api="https://lilama18.herokuapp.com/api/manager"
                  />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal:"center" }}
          autoHideDuration={5000}
          open={showNotify}
          severity="error"
          onClose={() => notifyStore.setState({show: false})}
          message={errorMessage}
          key="error-snackbar"
      />
    </div>
  );
}

export default App;
