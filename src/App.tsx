import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartTest from '@components/startTest/startTest.tsx';
import QuestionPage from '@components/questionPage/questionPage.tsx';
import ResultsPage from '@components/resultsPage/resultsPage.tsx';


function App() {

  return <>
    <BrowserRouter>
      <Routes>
        <Route element={<StartTest />} path={'/'} />
        <Route element={<QuestionPage />} path={'/question'} />
        <Route element={<ResultsPage />} path={'/results'} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
