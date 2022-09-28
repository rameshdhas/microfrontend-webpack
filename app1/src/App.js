import React, {Suspense} from "react";
import ErrorBoundary from "./error-boundary"

const RemoteApp = React.lazy(() => import("button/Button"));

const App = () => {
  return (
    <div>
      <div style={{
        margin:"10px",
        padding:"10px",
        textAlign:"center",
        backgroundColor:"greenyellow"
      }}>
        <h1>App1</h1>
      </div>
      <ErrorBoundary
            fallback={
              <div>There's an error loading the widget! Please contact admin'</div>
            }
      >
      <Suspense fallback={"loading..."}>
        <RemoteApp/>
      </Suspense>
      </ErrorBoundary>
    </div>)
}


export default App;
