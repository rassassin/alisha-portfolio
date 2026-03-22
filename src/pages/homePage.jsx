const styles = {
  navbarContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100px",
    backgroundColor: "blue",
    zIndex: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  nameContainer: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  nameText: {
    fontSize: "140px",
  },
  arrowContainer: {
    position: "absolute",
    bottom: 20,
    left: "50%",
    animation: "bounce 2s infinite",
    cursor: "pointer",
  },
  alishaDescriptionTextContainer: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "blue",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  videoText: {
    fontSize: "1.6rem",
    margin: 0,
  },
};

const HomePage = () => {
  return (
    <>
      <div style={styles.navbarContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
            {" "}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {" "}
              <path d="M3 5H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />{" "}
              <path d="M3 19H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />{" "}
              <path d="M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />{" "}
            </svg>{" "}
          </div>
        </div>
      </div>
      <div style={styles.nameContainer}>
        <p style={styles.nameText}>Alisha Mahmood</p>
      </div>
      <div
        style={styles.arrowContainer}
        onClick={() =>
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          })
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 4v14" />
          <path d="M7 13l5 5 5-5" />
        </svg>
      </div>

      <div style={{ height: "100vh", backgroundColor: "green" }}>
        <div style={styles.alishaDescriptionTextContainer}>
          <h2 style={styles.videoText}>I'm a creative bitch, i love creative shit</h2>
          <h2 style={styles.videoText}>I'm a creative bitch</h2>
        </div>
      </div>
      <div style={{ height: "100vh", backgroundColor: "purple" }}></div>
    </>
  );
};

export default HomePage;
