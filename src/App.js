import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        <title>To-do-list</title>
        <script defer src="todolist.js"></script>
      </Helmet>
      <>
        <h1>To-Do List</h1>
        <section id="sec">
          <div className="first-div">
            <p className="tasks">Task1</p>
            <div className="container">
              <span className="icon-star icon" />
              <div className="trashangry">
                <span className="icon-trash icon" />
                <span className="icon-angry icon" />
              </div>
            </div>
          </div>
          <br />
          {/* secondlist */}
          <div className="first-div2">
            <p className="tasks">Task2</p>
            <div className="container">
              <span className="icon-star icon" />
              <div className="trashangry">
                <span className="icon-trash icon" />
                <span className="icon-angry icon" />
              </div>
            </div>
          </div>
          <br />
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <span class="icon-heart    icons"></span> */}
        <h2>What Else !</h2>
        <div className="fix">
          <div className="under">
            <form>
              <input
                defaultValue=""
                id="inn"
                type="text"
                className="in"
                placeholder="Do it now"
              />
              <button className="icon-upload" />
            </form>
          </div>
        </div>
      </>
    </>
  );
}

export default App;
